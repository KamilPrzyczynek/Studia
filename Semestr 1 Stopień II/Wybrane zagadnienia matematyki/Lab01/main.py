import pandas as pd
import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# 1. Pobranie danych
iris = load_iris()
# Używamy prostszych nazw kolumn dla czytelności
feature_cols = ['sepal_l', 'sepal_w', 'petal_l', 'petal_w']
df = pd.DataFrame(data=iris.data, columns=feature_cols)
df['target'] = iris.target

# 2. Podział na zbiór treningowy i testowy
train_df, test_df = train_test_split(df, test_size=0.3, random_state=42)


# 3. Dyskretyzacja zorientowana na rozróżnialność
def get_optimal_cuts(data, features):
    cuts = {}
    for col in features:
        sorted_vals = np.sort(data[col].unique())
        potential_cuts = (sorted_vals[:-1] + sorted_vals[1:]) / 2

        best_cuts = []
        for c in potential_cuts:
            left_classes = data[data[col] <= c]['target'].unique()
            right_classes = data[data[col] > c]['target'].unique()
            if not np.array_equal(left_classes, right_classes):
                best_cuts.append(c)

        if len(best_cuts) >= 2:
            cuts[col] = [np.percentile(best_cuts, 33), np.percentile(best_cuts, 66)]
        else:
            cuts[col] = [data[col].median()]
    return cuts


def apply_cuts(df, cuts):
    df_disc = df.copy()
    for col, c_vals in cuts.items():
        bins = [-np.inf] + sorted(c_vals) + [np.inf]
        labels = ['Low', 'Medium', 'High'][:len(bins) - 1]
        df_disc[col] = pd.cut(df[col], bins=bins, labels=labels)
    return df_disc


optimal_cuts = get_optimal_cuts(train_df, feature_cols)
train_d = apply_cuts(train_df, optimal_cuts)
test_d = apply_cuts(test_df, optimal_cuts)


# 4. Aproksymacje
def get_lower_approximation(data, target_class):
    groups = data.groupby(feature_cols, observed=True)
    lower_approx = []
    for _, group in groups:
        if (group['target'] == target_class).all():
            lower_approx.extend(group.index.tolist())
    return lower_approx


print("--- APROKSYMACJE DOLNE ---")
for i, name in enumerate(iris.target_names):
    approx = get_lower_approximation(train_d, i)
    print(f"Klasa {name.upper()}: {len(approx)} obiektów pewnych")

# 5. Wyznaczanie Reduktu (uproszczone)
reduced_features = feature_cols.copy()
for col in feature_cols:
    temp_features = [f for f in reduced_features if f != col]
    inconsistent = train_d.groupby(temp_features, observed=True)['target'].nunique().gt(1).any()
    if not inconsistent:
        reduced_features.remove(col)
        print(f"\nREDUKT: Usunięto zbędną cechę: {col}")

print(f"Ostateczny zestaw cech (Redukt): {reduced_features}")


# 6. Generowanie reguł (tylko dla reduktu)
def generate_rules(data, features):
    consistent_groups = data.groupby(features, observed=True).filter(lambda x: x['target'].nunique() == 1)
    unique_patterns = consistent_groups.drop_duplicates(subset=features)

    rules = []
    for _, row in unique_patterns.iterrows():
        condition = {col: row[col] for col in features}
        rules.append({'if': condition, 'then': row['target']})
    return rules


rules = generate_rules(train_d, reduced_features)
print(f"Wygenerowano {len(rules)} reguł decyzyjnych.")

# 7. Klasyfikacja i Accuracy
def classify(row, rules):
    for rule in rules:
        if all(row[col] == val for col, val in rule['if'].items()):
            return rule['then']
    return -1


test_d['prediction'] = test_d.apply(lambda x: classify(x, rules), axis=1)

# Statystyki końcowe
valid_preds = test_d[test_d['prediction'] != -1]
accuracy = accuracy_score(valid_preds['target'], valid_preds['prediction'])
unclassified = len(test_d[test_d['prediction'] == -1])

print("\n--- WYNIKI KOŃCOWE ---")
print(f"Dokładność (dla sklasyfikowanych): {accuracy * 100:.2f}%")
print(f"Liczba obiektów niesklasyfikowanych: {unclassified} / {len(test_df)}")

if rules:
    r = rules[0]
    cond_str = " AND ".join([f"{k}={v}" for k, v in r['if'].items()])
    print(f"\nPrzykładowa reguła: IF {cond_str} THEN {iris.target_names[r['then']]}")