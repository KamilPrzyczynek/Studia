from pyspark.sql import SparkSession
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.regression import LinearRegression
from pyspark.ml.clustering import KMeans
from pyspark.ml.evaluation import ClusteringEvaluator
from pyspark.sql.functions import col, count, mean, stddev, min, max
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Inicjalizacja sesji Spark
spark = SparkSession.builder \
    .appName("HealthcareAnalysis") \
    .config("spark.jars", "/dbfs/FileStore/jars/postgresql-42.3.3.jar") \
    .getOrCreate()

# Konfiguracja połączenia z PostgreSQL
db_config = {
    "url": "jdbc:postgresql://195.150.230.208:5432/2023_przyczynek_kamil",
    "user": "2023_przyczynek_kamil",
    "password": "zaq1@WSX",
    "dbtable": "healthcare_dataset.healthcare_data",
    "driver": "org.postgresql.Driver"
}

# Ładowanie danych z PostgreSQL do Spark DataFrame
df = (
    spark.read.format("jdbc")
    .option("url", db_config["url"])
    .option("dbtable", db_config["dbtable"])
    .option("user", db_config["user"])
    .option("password", db_config["password"])
    .option("driver", db_config["driver"])
    .load()
)

# Wyświetlenie danych
df.show(100)  # Wyświetla pierwsze 100 wierszy tabeli

# Liczenie liczby mężczyzn i kobiet
gender_counts = df.groupBy("gender").count()
gender_counts.show()  # Wyświetla liczność płci w zbiorze danych

# Liczba pacjentów w każdym wieku
age_counts = df.groupBy("age").count()
age_counts.show()  # Wyświetla liczność pacjentów dla każdej grupy wiekowej

# Statystyki opisowe dla kolumn numerycznych
numerical_columns = ['age', 'billing_amount']
for column in numerical_columns:
    df.select(
        mean(column).alias(f"mean_{column}"),
        stddev(column).alias(f"stddev_{column}"),
        min(column).alias(f"min_{column}"),
        max(column).alias(f"max_{column}")
    ).show()  # Wyświetla średnią, odchylenie standardowe, minimum i maksimum dla wybranych kolumn

# Histogram wieku
df.groupBy("age").count().orderBy("age").show()  # Wyświetla histogram dla wieku

# Histogram kwot rozliczeniowych
billing_histogram = df.groupBy("billing_amount").count().orderBy("billing_amount")
billing_histogram.show()  # Wyświetla histogram dla kwot rozliczeniowych

# Boxplot dla wieku i kwot rozliczeniowych
pandas_df = df.toPandas()
# Konwersja Decimal na float dla kompatybilności
pandas_df['billing_amount'] = pandas_df['billing_amount'].astype(float)
sns.boxplot(x=pandas_df['age']).set_title('Boxplot dla wieku')
plt.show()
sns.boxplot(x=pandas_df['billing_amount']).set_title('Boxplot dla kwot rozliczeniowych')
plt.show()

# Porównanie kosztów leczenia względem płci
gender_billing = pandas_df.groupby('gender')['billing_amount'].mean()
print("Średnie koszty leczenia względem płci:")
print(gender_billing)

# Test t-Studenta: różnice kosztów leczenia względem płci
from scipy.stats import ttest_ind
male_billing = pandas_df[pandas_df['gender'] == 1]['billing_amount']
female_billing = pandas_df[pandas_df['gender'] == 0]['billing_amount']
t_stat, p_value = ttest_ind(male_billing, female_billing, nan_policy='omit')
print("Wynik testu t-Studenta dla porównania kosztów leczenia mężczyzn i kobiet:")
print(f"Statystyka t: {t_stat}, p-wartość: {p_value}")

# Porównanie kosztów leczenia względem wieku
age_billing = pandas_df.groupby('age')['billing_amount'].mean()
print("Średnie koszty leczenia względem wieku:")
print(age_billing)

# Porównanie kosztów leczenia względem choroby
condition_billing = pandas_df.groupby('medical_condition')['billing_amount'].mean()
print("Średnie koszty leczenia względem choroby:")
print(condition_billing)

# Porównanie kosztów leczenia względem ubezpieczyciela
insurance_billing = pandas_df.groupby('insurance_provider')['billing_amount'].mean()
print("Średnie koszty leczenia względem ubezpieczyciela:")
print(insurance_billing)

# Regresja liniowa: kwota rozliczeniowa względem wieku
assembler = VectorAssembler(inputCols=['age'], outputCol='features')
data = assembler.transform(df.select('age', 'billing_amount'))
lr = LinearRegression(featuresCol='features', labelCol='billing_amount')
lr_model = lr.fit(data)
print(f"Współczynnik regresji: {lr_model.coefficients}")  # Wyświetla współczynnik regresji
print(f"Punkt przecięcia regresji: {lr_model.intercept}")  # Wyświetla punkt przecięcia

# Klasteryzacja K-Means: wiek i kwota rozliczeniowa
assembler = VectorAssembler(inputCols=['age', 'billing_amount'], outputCol='features')
data = assembler.transform(df.select('age', 'billing_amount'))
kmeans = KMeans(k=3, seed=1)
model = kmeans.fit(data)
clusters = model.transform(data)
clusters.show()  # Wyświetla przypisanie klastrów do danych
evaluator = ClusteringEvaluator()
silhouette = evaluator.evaluate(clusters)
print(f"Wynik współczynnika silhouette: {silhouette}")  # Wyświetla wynik współczynnika silhouette

# Pairplot dla kolumn numerycznych
sns.pairplot(pandas_df[['age', 'billing_amount', 'gender']])
plt.show()  # Wyświetla pairplot pokazujący zależności między kolumnami numerycznymi

# ANOVA: kwota rozliczeniowa w zależności od typu przyjęcia
import statsmodels.api as sm
from statsmodels.formula.api import ols
anova_df = pandas_df[['billing_amount', 'admission_type']].dropna()
model = ols('billing_amount ~ C(admission_type)', data=anova_df).fit()
anova_table = sm.stats.anova_lm(model, typ=2)
print("Wyniki analizy ANOVA:")
print(anova_table)  # Wyświetla wyniki analizy ANOVA

# Odchylenie standardowe i średnia dla każdej kolumny numerycznej
df.describe(numerical_columns).show()  # Wyświetla pełne statystyki opisowe dla kolumn numerycznych


