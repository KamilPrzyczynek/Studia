# Statystyka Stosowana i Probabilistyka

Repozytorium zawiera dokumentację, arkusze obliczeniowe oraz skrypty MATLAB realizowane w ramach przedmiotu Statystyka Stosowana i Probabilistyka. Głównym celem modułu jest nauka metod opisu danych, wnioskowania statystycznego oraz analizy prawdopodobieństwa zjawisk inżynierskich.

## Zakres materiału

Moduł został podzielony na kluczowe bloki tematyczne, od statystyki opisowej po zaawansowane testowanie hipotez:

### 1. Statystyka Opisowa i Analiza Danych (Topic 1-3)
* **Gromadzenie danych**: Przygotowanie surowych danych w arkuszach `.ods` do dalszej obróbki.
* **Miary statystyczne**: Obliczanie średniej, mediany, odchylenia standardowego oraz wariancji.
* **Wizualizacja**: Tworzenie szeregów rozdzielczych, histogramów i wykresów częstości występowania zdarzeń.

### 2. Rozkłady Prawdopodobieństwa (Topic 4-9)
* **Rozkłady dyskretne**: Analiza liczebności oraz modelowanie zdarzeń rzadkich za pomocą rozkładu Poissona.
* **Rozkład Normalny (Gaussa)**: Modelowanie zmiennych ciągłych, proces standaryzacji (wartości Z) oraz reguła trzech sigm.
* **Rozkład Chi-kwadrat**: Badanie gęstości prawdopodobieństwa i wyznaczanie wartości krytycznych dla testów zgodności.

### 3. Korelacja i Zależności (Topic 10)
* **Współczynnik Pearsona**: Badanie siły i kierunku związków liniowych między zmiennymi ilościowymi.
* **Macierze korelacji**: Automatyzacja obliczeń dla wielu zmiennych przy użyciu funkcji `corrcoef`.

### 4. Wnioskowanie Statystyczne i Testy (Topic 11-15)
* **Przedziały ufności**: Szacowanie parametrów populacji na podstawie próby z określonym poziomem prawdopodobieństwa.
* **Testy istotności**: Zastosowanie rozkładu t-Studenta dla małych prób oraz rozkładu F-Snedecora do porównywania wariancji.
* **Analiza błędów**: Szacowanie niezbędnej liczebności próby dla zachowania zadanej precyzji obliczeń.

## Wykorzystane narzędzia i technologie

* **MATLAB Live Editor (`.mlx`)**: Interaktywne skrypty łączące opis matematyczny z kodem wykonawczym i wizualizacją wyników.
* **Arkusz Kalkulacyjny (`.ods`, `.xlsx`)**: Podstawowe narzędzie do wstępnej analizy danych i weryfikacji formuł statystycznych.
* **Analiza numeryczna**: Wykorzystanie funkcji wbudowanych MATLAB, takich jak `normcdf`, `chi2inv`, `tinv` czy `mean`.

## Struktura plików

* **Skrypty MLX**: Gotowe algorytmy do obliczania rozkładów, korelacji i przedziałów ufności.
* **Arkusze ODS**: Dane laboratoryjne dotyczące parametrów technicznych (np. branża motoryzacyjna, chemiczna).
* **Dokumentacja PDF**: Teoretyczne podstawy estymacji i tablice statystyczne.

---
*Materiały opracowane na potrzeby archiwizacji projektów z zakresu probabilistyki i statystyki inżynierskiej.*
