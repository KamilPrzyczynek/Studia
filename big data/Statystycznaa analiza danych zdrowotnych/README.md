# MStatystyczna analiza danych zdrowotnych ,,Healthcare”

Project description and conceptual design (“Header Top” style).


Project description.
Celem projektu jest przeprowadzenie analizy danych zdrowotnych z dużego zbioru obejmującego dane pacjentów, takie jak wiek, płeć, diagnozy, typ ubezpieczenia oraz koszty leczenia. Projekt ma za zadanie dostarczyć wniosków dotyczących zależności między tymi zmiennymi oraz opracować modele analityczne, takie jak regresja liniowa czy klasteryzacja. Dodatkowym celem jest identyfikacja grup pacjentów, które generują najwyższe koszty leczenia.


Conceptual design.
Dane są przetwarzane w trzech warstwach: PostgreSQL do przechowywania surowych danych, Delta Lake dla danych przetworzonych i PySpark DataFrames do analizy. Wykorzystano metody analizy statystycznej i wizualizacyjnej, takie jak histogramy, boxploty oraz klasteryzację K-średnich.

Data model design.
Dane zdrowotne zostały zapisane w tabeli healthcare_data z następującymi kolumnami:
age: wiek pacjenta (liczba całkowita)
gender: płeć pacjenta (0 - kobieta, 1 - mężczyzna)
medical_condition: typ diagnozy (np. astma, cukrzyca)
billing_amount: koszty leczenia (kwoty rozliczeniowe w USD)
insurance_provider: typ ubezpieczenia (np. Medicare, Blue Cross)
admission_type: typ przyjęcia do szpitala (nagły, planowy, pilny).


Interface implementation for datasource connection and data import.

from pyspark.sql import SparkSession

spark = SparkSession.builder.appName('HealthcareAnalysis').getOrCreate()



ETL / Data processing

Cleaning Data:
Usunięto brakujące wartości z kluczowych kolumn: Age i Billing Amount.
Sprawdzono i usunięto ewentualne duplikaty.
Standaryzowano wartości kosztów leczenia w celu usunięcia skrajnych wartości.
Transforming Data:
Przekształcono dane do formatu standaryzowanego dla analizy klasteryzacji.
Dodano kolumnę Cluster, reprezentującą wyniki klasteryzacji K-means.
Loading Data:
Oczyszczone dane załadowano do dalszego przetwarzania w ramach analizy statystycznej i wizualizacyjnej.


Data analysis.

5.1 Statystyka opisowa
5.1.1 Skrypt/Kod

5.1.2 Wizualizacja
1. Histogram wieku
 








2. Histogram kwot rozliczeniowych
 
3. Boxplot wieku
 

4. Boxplot kwot rozliczeniowych

5. Wyniki analizy ANOVA
 
5.1.3 Wyniki analizy
Dodatkowe dane:






- Wiek:
  - Średnia: 50,56 lat.
  - Odchylenie standardowe: 28,77.
  - Zakres: od 1 do 100 lat.
- Kwoty rozliczeniowe:
  - Średnia: 498 581,05.
  - Odchylenie standardowe: 289 581,80.
  - Zakres: od 10 do 999 998.

5.2 Regresja liniowa
5.2.1 Skrypt/Kod










5.2.2 Wizualizacja

 
5.2.3 Wyniki analizy
Współczynnik regresji: 5,31.
Punkt przecięcia: 498 312,73.
Wiek ma minimalny wpływ na koszty leczenia.
5.3 Testy statystyczne
5.3.1 Skrypt/Kod

5.3.2 Wizualizacja


5.3.3 Wyniki analizy
Brak istotnych różnic między płciami (p = 0,979).

5.4 Klasteryzacja i analiza sylwetki
5.4.1 Skrypt/Kod

5.4.2 Wizualizacja



5.4.3 Wyniki analizy
Wskaźnik silhouette: 0,75.
Klaster 1: Pacjenci młodsi z niskimi kosztami.
Klaster 2: Pacjenci starsi z umiarkowanymi kosztami.
Klaster 3: Pacjenci z bardzo wysokimi kosztami.
