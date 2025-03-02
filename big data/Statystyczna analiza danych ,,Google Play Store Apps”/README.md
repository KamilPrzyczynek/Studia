# Statystyczna analiza danych ,,Google Play Store Apps”

Project description and conceptual design (“Header Top” style).


Project description.

Celem projektu jest kompleksowa analiza danych dotyczących aplikacji z Google Play. Projekt ma na celu:
Zrozumienie rynku aplikacji mobilnych: Przeanalizowanie różnych aspektów aplikacji (takich jak kategoria, oceny, recenzje, rozmiar, liczba instalacji, typ aplikacji, cena, treść ocen, gatunki, data ostatniej aktualizacji) w celu uzyskania pełnego obrazu sytuacji na rynku.
Identyfikację kluczowych czynników sukcesu: Wyznaczenie zależności między cechami aplikacji a jej popularnością oraz ocenami, co może pomóc w identyfikacji czynników wpływających na sukces lub porażkę aplikacji.
Segmentację aplikacji: Przeprowadzenie klasteryzacji (uczenie nienadzorowane) w celu wydzielenia grup aplikacji o podobnych właściwościach. Takie podejście umożliwia określenie, jakie segmenty aplikacji dominują na rynku oraz jakie są ich charakterystyczne cechy.
Predykcję ocen i popularności: Zastosowanie modeli uczenia nadzorowanego (np. regresji, RandomForest Regressor) do przewidywania ocen aplikacji lub liczby instalacji na podstawie dostępnych cech. Dzięki temu można lepiej zrozumieć, które zmienne mają największy wpływ na sukces aplikacji.


Źródło danych: https://www.kaggle.com/datasets/lava18/google-play-store-apps


Conceptual design.
W ramach projektu zostanie wdrożona trójwarstwowa architektura przetwarzania i przechowywania danych. Jej główne warstwy to:

Warstwa hurtowni danych:
Wykorzystanie hurtowni danych w pgAdmin jako podstawowej warstwy do przechowywania surowych danych. W tej warstwie zostanie zaprojektowany schemat typu Diamond Analysis oraz tabela google_apps, która będzie przechowywać surowe dane o aplikacjach z Google Play.

Warstwa przetworzonych danych:
Wykorzystanie Delta Lake do przechowywania danych po ich wstępnym przetworzeniu i integracji, co umożliwi łatwiejsze zarządzanie danymi oraz ich aktualizację.

Warstwa analityczna:
Wykorzystanie DataFrames w Databricks, które posłużą do przeprowadzania analiz, wizualizacji oraz budowy modeli uczenia maszynowego.

W hurtowni danych zaprojektowany zostanie schemat typu Diamond Analysis oraz tabela google_apps, która będzie zawierać następujące kolumny:

app: Nazwa aplikacji
category: Kategoria aplikacji
rating: Średnia ocena aplikacji
reviews: Liczba recenzji
size: Rozmiar aplikacji
installs: Liczba instalacji
type: Typ aplikacji (np. darmowa lub płatna)
price: Cena aplikacji
content_rating: Ocena treści (grupa wiekowa, do której aplikacja jest przeznaczona)
genres: Dodatkowe gatunki, do których aplikacja może należeć
last_updated: Data ostatniej aktualizacji aplikacji
Taki model architektury umożliwi efektywne gromadzenie, przetwarzanie i analizę danych o aplikacjach z Google Play, co pozwoli na uzyskanie szczegółowych informacji o rynku, identyfikację kluczowych czynników sukcesu oraz budowę modeli predykcyjnych i segmentacyjnych.
Data model design.
Projekt opiera się na trójwarstwowej architekturze przetwarzania i przechowywania danych, w której podstawową warstwą jest hurtownia danych zarządzana za pomocą pgAdmin. W hurtowni danych znajduje się główna tabela, nazwana google_apps, która przechowuje surowe dane dotyczące aplikacji z Google Play. Tabela ta została zaprojektowana w oparciu o schemat gwiazdy (star schema) i zawiera następujące kolumny:

id (integer, Primary Key):
Unikalny identyfikator dla każdej aplikacji.
app (varchar):
Nazwa aplikacji.
category (varchar):
Kategoria, do której należy aplikacja (np. FAMILY, GAME, TOOLS).
rating (numeric(3,1)):
Średnia ocena aplikacji, wyrażona np. w skali 1–5.
reviews (integer):
Liczba recenzji, które oceniły aplikację.
size (varchar):
Rozmiar aplikacji – wartość może być numeryczna (np. "19M") lub tekstowa (np. "Varies with device").
installs (varchar):
Liczba instalacji aplikacji, często przedstawiana w formie tekstowej z dodatkowymi symbolami, np. "10,000+".
type (varchar):
Typ aplikacji określający, czy jest darmowa ("Free") czy płatna ("Paid").
price (varchar):
Cena aplikacji – dla aplikacji darmowych zwykle "0" lub "$0.99", a dla płatnych – konkretna kwota.
content_rating (varchar):
Ocena treści, która określa grupę wiekową, dla której aplikacja jest przeznaczona (np. "Everyone", "Teen", "Mature 17+").
genres (varchar):
Dodatkowe gatunki lub kategorie, do których aplikacja należy, mogą być wymienione jako lista oddzielona przecinkami.
last_updated (date):
Data ostatniej aktualizacji aplikacji, co może być użyte jako wskaźnik aktualności i wsparcia technicznego.

Interface implementation for datasource connection and data import.
W ramach implementacji interfejsu połączenia źródła danych oraz importu danych, wykorzystana została technologia JDBC, która pozwala na nawiązanie połączenia z bazą danych PostgreSQL. Implementacja umożliwia importowanie danych z wybranego źródła do docelowej aplikacji, przez zabezpieczone połączenie. Istnieje także możliwość weryfikacji poprawności danych oraz ich formatowania na etapie importu. System wspiera integrację z różnymi źródłami danych, co zapewnia elastyczność i łatwość implementacji.

ETL / Data processing
Extract (Pobieranie danych):
Dane są importowane z hurtowni danych w pgAdmin przy użyciu połączenia JDBC. Dzięki temu surowe dane z tabeli (np. google_apps) są pobierane do środowiska analitycznego, np. do Spark DataFrame w Databricks.

Transform (Transformacja danych):

Czyszczenie danych: Usuwane są niepotrzebne znaki (np. "$", przecinki, znaki "+") z kolumn takich jak price i installs.
Konwersja typów: Dane są rzutowane na odpowiednie typy (np. liczby, daty) – kolumna last_updated jest konwertowana na typ daty, a liczba dni od ostatniej aktualizacji jest obliczana.
Inżynieria cech: Tworzone są nowe cechy (np. days_since_update), wykonywane są transformacje (np. logarytmiczna transformacja zmiennej docelowej) oraz kodowanie cech kategorycznych (indeksacja i one-hot encoding).
Load (Ładowanie danych):
Przetworzone dane są ładowane do kolejnych warstw analitycznych, takich jak warstwa Delta Lake lub DataFrames w Databricks, gdzie są używane do dalszej analizy, wizualizacji oraz budowy modeli uczenia maszynowego (zarówno nadzorowanego, jak i nienadzorowanego).









Data analysis.

“Data Analysis – Statystyka Opisowa”.
Podstawowe miary statystyczne:
Obliczamy liczbę rekordów (count), średnią (mean), odchylenie standardowe (stddev), wartość minimalną (min) oraz maksymalną (max) dla zmiennych numerycznych, takich jak rating czy liczba recenzji. Te miary pomagają ocenić centralną tendencję oraz rozproszenie danych.
Analiza zmiennych kategorycznych:
Dla cech tekstowych, takich jak kategoria, typ aplikacji czy content_rating, obliczamy liczbę unikalnych wartości oraz identyfikujemy najczęściej występujące kategorie. Dzięki temu możemy zidentyfikować dominujące segmenty oraz ewentualne anomalie w danych.
Wizualizacja rozkładów:
Tworzymy histogramy, boxploty oraz wykresy liczebności (count plots) dla poszczególnych kolumn. Dzięki wizualizacjom łatwiej jest wykryć wartości odstające, skośności rozkładów oraz inne nieprawidłowości, które mogą wpłynąć na dalszą analizę.
Cel analizy opisowej:
Celem statystyki opisowej jest zrozumienie, jakie są podstawowe cechy zbioru danych, jakie wartości dominują, jak rozkładają się dane oraz czy występują w nich błędy lub braki. Wyniki tej analizy służą jako podstawa do dalszych etapów projektu, takich jak inżynieria cech, budowa modeli uczenia nadzorowanego (np. regresji) oraz nienadzorowanego (np. klasteryzacji).


Script/Code.
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



Visualization.


Analysis results. .
Ogólna jakość danych:
Dane są stosunkowo kompletne, ale niektóre kolumny, takie jak rating, mają brakujące wartości. Występują także potencjalne anomalie, np. rating o wartości 19.0, co jest nietypowe i sugeruje konieczność dalszej weryfikacji lub oczyszczenia danych.Rozkład i zmienność:
Wartości ratingu są stosunkowo skupione (średnia ~4.19 z niskim odchyleniem), ale kolumna recenzji wykazuje ogromną zmienność, co wskazuje na silnie skośny rozkład oraz obecność wartości odstających.
Dane tekstowe, takie jak kategorie, wskazują, że rynek jest zróżnicowany, ale dominują pewne kategorie (np. FAMILY, GAME).
Wnioski:Statystyka opisowa dostarcza cennych informacji o rozkładzie i jakości danych, co pozwala na identyfikację potencjalnych problemów (np. wartości odstających, brakujących danych) oraz daje wskazówki, które cechy mogą być ważne dla dalszych analiz i modeli predykcyjnych.



“Data Analysis – Regresja liniowa”.
Script/Code.
from pyspark.sql import SparkSession
from pyspark.sql.functions import col
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.regression import LinearRegression

assembler = VectorAssembler(inputCols=["reviews"], outputCol="features")
data = assembler.transform(regression_df).select("label", "features")

train_data, test_data = data.randomSplit([0.8, 0.2], seed=42)

lr = LinearRegression(featuresCol="features", labelCol="label")
lr_model = lr.fit(train_data)

print("Współczynniki:", lr_model.coefficients)
print("Wyraz wolny:", lr_model.intercept)

training_summary = lr_model.summary
print("RMSE:", training_summary.rootMeanSquaredError)
print("r2:", training_summary.r2)

predictions = lr_model.transform(test_data)
predictions.select("features", "label", "prediction").show(10)


Analysis Results
Wyniki analizy regresji liniowej (sekcja 5.2.3 Analysis results) wskazują, że przy wykorzystaniu jedynie liczby recenzji jako predyktora model nie potrafi znacząco wyjaśnić zmienności ocen aplikacji (bardzo niski r²). Otrzymany współczynnik przy recenzjach jest praktycznie zerowy, co sugeruje, że liczba recenzji nie wpływa na ocenę lub że wpływ ten jest zbyt subtelny, aby był wychwycony przez model liniowy. Wyraz wolny wynoszący około 4.18 oznacza, że przy braku recenzji model "ustawia" rating na tym poziomie.

Te wyniki mogą sugerować potrzebę uwzględnienia dodatkowych cech lub przeprowadzenia innej inżynierii cech (np. skalowania, transformacji lub uwzględnienia cech kategorycznych) oraz ewentualnie zastosowania bardziej złożonych modeli, które mogłyby lepiej uchwycić zależności w danych.

Visualization	

“Data Analysis –Uczenie nadzorowane”.
Script/Code
# Przygotowanie danych do klasteryzacji (cechy numeryczne)
unsup_df = df_clean.select(
    col("rating").cast("double").alias("rating"),
    col("reviews").cast("double").alias("reviews"),
    col("price_clean").alias("price"),
    col("days_since_update")
).na.drop()

# Łączenie cech w jeden wektor
assembler_unsup = VectorAssembler(inputCols=["rating", "reviews", "price", "days_since_update"], outputCol="raw_features")
data_unsup = assembler_unsup.transform(unsup_df)

# Skalowanie cech
scaler_unsup = StandardScaler(inputCol="raw_features", outputCol="features", withMean=True, withStd=True)
scaler_model_unsup = scaler_unsup.fit(data_unsup)
scaled_unsup = scaler_model_unsup.transform(data_unsup).select("features")

# Klasteryzacja KMeans (k=3)
kmeans = KMeans(featuresCol="features", k=3, seed=42)
kmeans_model = kmeans.fit(scaled_unsup)
predictions_unsup = kmeans_model.transform(scaled_unsup)
Visualization 

Analysis Results
Skuteczność modelu:
Współczynnik determinacji r² wynoszący około 6% wskazuje, że model wyjaśnia tylko niewielką część zmienności ocen. RMSE na poziomie około 0.48 sugeruje, że średni błąd prognozy jest znaczący w stosunku do skali ratingów.
Interpretacja predykcji:
Model systematycznie przewiduje ratingi wokół wartości około 4, mimo że rzeczywiste wartości (label) są znacznie niższe (np. 1.0 – 1.9). Może to wskazywać na problemy z rozkładem danych lub niewystarczające informacje zawarte w wybranych cechach.
Dalsze kroki:
Konieczne jest dodanie dodatkowych cech lub zastosowanie bardziej zaawansowanych metod modelowania (np. innych algorytmów nieliniowych), a także dalsza analiza rozkładu ratingów i ewentualne usunięcie wartości odstających.
	
Data Analysts – Uczenie nienadzorowane.
Script/Code
# Przygotowanie danych do klasteryzacji (cechy numeryczne)
unsup_df = df_clean.select(
    col("rating").cast("double").alias("rating"),
    col("reviews").cast("double").alias("reviews"),
    col("price_clean").alias("price"),
    col("days_since_update")
).na.drop()

# Łączenie cech w jeden wektor
assembler_unsup = VectorAssembler(inputCols=["rating", "reviews", "price", "days_since_update"], outputCol="raw_features")
data_unsup = assembler_unsup.transform(unsup_df)

# Skalowanie cech
scaler_unsup = StandardScaler(inputCol="raw_features", outputCol="features", withMean=True, withStd=True)
scaler_model_unsup = scaler_unsup.fit(data_unsup)
scaled_unsup = scaler_model_unsup.transform(data_unsup).select("features")

# Klasteryzacja KMeans (k=3)
kmeans = KMeans(featuresCol="features", k=3, seed=42)
kmeans_model = kmeans.fit(scaled_unsup)
predictions_unsup = kmeans_model.transform(scaled_unsup)


Visualization 


Analysis Results
Jakość klasteryzacji:
Uzyskany wskaźnik Silhouette wynoszący około 0.523 wskazuje, że klastry są umiarkowanie dobrze rozdzielone.
Segmentacja danych:
Wyznaczone centra klastrów sugerują, że dane można podzielić na trzy grupy, które mogą odpowiadać różnym segmentom rynku aplikacji (np. aplikacje o wysokim ratingu, dużej liczbie recenzji, niskiej cenie vs. inne segmenty).
Wizualizacja:
Wykres 2D (projekcja PCA) pozwala zobaczyć rozkład danych i przypisanie do poszczególnych klastrów, co może być użyteczne przy dalszej analizie segmentacji rynku.
Dalsze kroki:
Dalsza analiza poszczególnych klastrów, weryfikacja cech dominujących w każdym klastrze oraz ewentualne dostrojenie parametrów klasteryzacji (np. liczby klastrów) mogą poprawić interpretację wyników.


Podsumowanie ogólne
Uczenie nadzorowane: Model RandomForestRegressor uzyskał RMSE na poziomie około 0.48, ale bardzo niski współczynnik determinacji (r² ≈ 6%), co sugeruje, że użyte cechy nie wystarczająco tłumaczą zmienność ocen. Predykcje są przesunięte i wskazują na konieczność dalszej inżynierii cech lub wykorzystania innych modeli.
Uczenie nienadzorowane: Klasteryzacja metodą KMeans (k=3) uzyskała umiarkowany wskaźnik Silhouette (~0.523). Wyniki wskazują na możliwość segmentacji rynku aplikacji, choć interpretacja centrów klastrów wymaga dalszej analizy.


