from pyspark.sql import SparkSession
from pyspark.sql.functions import col, regexp_replace, to_date, current_date, datediff, min, max, avg, stddev, countDistinct, log1p
from pyspark.ml.feature import StringIndexer, OneHotEncoder, VectorAssembler, StandardScaler
from pyspark.ml.regression import RandomForestRegressor
from pyspark.ml.clustering import KMeans
from pyspark.ml import Pipeline
from pyspark.ml.evaluation import RegressionEvaluator, ClusteringEvaluator
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd




# Inicjalizacja sesji Spark


spark = SparkSession.builder \
    .appName("AppsGoogle_Supervised_Unsupervised") \
    .config("spark.jars", "/dbfs/FileStore/jars/postgresql-42.3.3.jar") \
    .getOrCreate()


db_config = {
    "url": "jdbc:postgresql://195.150.230.208:5432/2023_kolak_grzegorz",
    "user": "2023_kolak_grzegorz",
    "password": "36376",
    "dbtable": "google_play.google_play_apps",
    "driver": "org.postgresql.Driver"
}


df = (spark.read.format("jdbc")
      .option("url", db_config["url"])
      .option("dbtable", db_config["dbtable"])
      .option("user", db_config["user"])
      .option("password", db_config["password"])
      .option("driver", db_config["driver"])
      .load()
)


df.show(100)




# Statystyki i wizualizacja (opcjonalnie)


print("Ogólne statystyki (describe) dla wszystkich kolumn:")
df.describe(*df.columns).show()


# Szczegółowe statystyki dla poszczególnych kolumn
print("Szczegółowe statystyki dla poszczególnych kolumn:")
for column, dtype in df.dtypes:
    print("------------------------------------------------")
    print(f"Kolumna: {column} (Typ: {dtype})")
    if dtype in ["int", "bigint", "double", "float", "decimal"]:
        df.select(
            min(col(column)).alias("min"),
            max(col(column)).alias("max"),
            avg(col(column)).alias("avg"),
            stddev(col(column)).alias("stddev")
        ).show()
    else:
        distinct_count = df.select(countDistinct(column).alias("distinct_count")).collect()[0]["distinct_count"]
        print(f"Liczba unikalnych wartości: {distinct_count}")
        print("Top 5 najczęściej występujących wartości:")
        df.groupBy(column).count().orderBy("count", ascending=False).show(5, truncate=False)


# Wizualizacja dystrybucji
pdf = df.toPandas()
for column in pdf.columns:
    plt.figure(figsize=(12, 5))
    if pd.api.types.is_numeric_dtype(pdf[column]):
        plt.subplot(1, 2, 1)
        sns.histplot(pdf[column].dropna(), kde=True, bins=30)
        plt.title(f'Histogram for {column}')
        plt.subplot(1, 2, 2)
        sns.boxplot(x=pdf[column].dropna())
        plt.title(f'Boxplot for {column}')
    else:
        unique_vals = pdf[column].nunique()
        plt.subplot(1, 2, 1)
        if unique_vals <= 30:
            sns.countplot(y=pdf[column].dropna(), order=pdf[column].value_counts().index)
            plt.title(f'Count Plot for {column}')
        else:
            plt.hist(pdf[column].dropna(), bins=30)
            plt.title(f'Histogram for {column}')
        plt.subplot(1, 2, 2)
        plt.text(0.5, 0.5, 'Boxplot not applicable', horizontalalignment='center',
                 verticalalignment='center', transform=plt.gca().transAxes, fontsize=12)
        plt.title(f'Boxplot for {column}')
    plt.tight_layout()
    plt.show()


# Czyszczenie kolumny "price"
df_clean = df.withColumn("price_clean", regexp_replace(col("price"), "[$,]", ""))
df_clean = df_clean.withColumn("price_clean", col("price_clean").cast("double"))


# Konwersja "last_updated" na datę oraz obliczenie "days_since_update"
df_clean = df_clean.withColumn("last_updated_date", to_date(col("last_updated"), "yyyy-MM-dd"))
df_clean = df_clean.withColumn("days_since_update", datediff(current_date(), col("last_updated_date")))


# Uczenie nadzorowane– przewidywanie ratingu
# Przygotowanie danych
# kategoryczne cechy
supervised_df = df_clean.select(
    col("rating").cast("double").alias("label"),
    col("reviews").cast("double").alias("reviews"),
    col("price_clean").alias("price"),
    col("days_since_update"),
    col("category"),
    col("content_rating"),
    col("type")
).na.drop()


cat_indexer = StringIndexer(inputCol="category", outputCol="category_index", handleInvalid="keep")
cr_indexer = StringIndexer(inputCol="content_rating", outputCol="content_rating_index", handleInvalid="keep")
type_indexer = StringIndexer(inputCol="type", outputCol="type_index", handleInvalid="keep")


cat_encoder = OneHotEncoder(inputCols=["category_index"], outputCols=["category_vec"])
cr_encoder = OneHotEncoder(inputCols=["content_rating_index"], outputCols=["content_rating_vec"])
type_encoder = OneHotEncoder(inputCols=["type_index"], outputCols=["type_vec"])


assembler_sup = VectorAssembler(
    inputCols=["reviews", "price", "days_since_update", "category_vec", "content_rating_vec", "type_vec"],
    outputCol="raw_features"
)
scaler_sup = StandardScaler(inputCol="raw_features", outputCol="features", withMean=True, withStd=True)


# Model
rf = RandomForestRegressor(featuresCol="features", labelCol="label", numTrees=50, maxDepth=5)


pipeline_sup = Pipeline(stages=[
    cat_indexer, cr_indexer, type_indexer,
    cat_encoder, cr_encoder, type_encoder,
    assembler_sup, scaler_sup,
    rf
])


# Podział danych na zbiór treningowy i testowy
train_sup, test_sup = supervised_df.randomSplit([0.8, 0.2], seed=42)


# Trening modelu nadzorowanego
model_sup = pipeline_sup.fit(train_sup)
predictions_sup = model_sup.transform(test_sup)


# Ocena modelu nadzorowanego
evaluator_sup = RegressionEvaluator(labelCol="label", predictionCol="prediction", metricName="rmse")
rmse_sup = evaluator_sup.evaluate(predictions_sup)
evaluator_r2 = RegressionEvaluator(labelCol="label", predictionCol="prediction", metricName="r2")
r2_sup = evaluator_r2.evaluate(predictions_sup)
print("Uczenie nadzorowane (Supervised Learning) – RandomForestRegressor:")
print("RMSE:", rmse_sup)
print("r2:", r2_sup)
predictions_sup.select("features", "label", "prediction").show(10)


# Uczenie nienadzorowane
unsup_df = df_clean.select(
    col("rating").cast("double").alias("rating"),
    col("reviews").cast("double").alias("reviews"),
    col("price_clean").alias("price"),
    col("days_since_update")
).na.drop()


assembler_unsup = VectorAssembler(inputCols=["rating", "reviews", "price", "days_since_update"], outputCol="raw_features")
data_unsup = assembler_unsup.transform(unsup_df)


scaler_unsup = StandardScaler(inputCol="raw_features", outputCol="features", withMean=True, withStd=True)
scaler_model_unsup = scaler_unsup.fit(data_unsup)
scaled_unsup = scaler_model_unsup.transform(data_unsup).select("features")


# Klasteryzacja
kmeans = KMeans(featuresCol="features", k=3, seed=42)
kmeans_model = kmeans.fit(scaled_unsup)
predictions_unsup = kmeans_model.transform(scaled_unsup)


# Ocena klasteryzacji
evaluator_unsup = ClusteringEvaluator(featuresCol="features", metricName="silhouette", distanceMeasure="squaredEuclidean")
silhouette = evaluator_unsup.evaluate(predictions_unsup)
print("Uczenie nienadzorowane (Unsupervised Learning) – KMeans:")
print("Silhouette with squared euclidean distance =", silhouette)


centers = kmeans_model.clusterCenters()
print("Cluster Centers:")
for center in centers:
    print(center)


# Wizualizacja wyników klasteryzacji
pdf_clusters = predictions_unsup.toPandas()
pdf_clusters["pc1"] = pdf_clusters["features"].apply(lambda x: x[0])
pdf_clusters["pc2"] = pdf_clusters["features"].apply(lambda x: x[1])


sns.scatterplot(data=pdf_clusters, x="pc1", y="pc2", hue="prediction", palette="viridis")
plt.title("KMeans Clustering (2D Projection)")
plt.xlabel("PC1")
plt.ylabel("PC2")
plt.show()



