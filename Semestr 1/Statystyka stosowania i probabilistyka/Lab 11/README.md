# Statystyka Stosowana i Probabilistyka - Lab 11

Repozytorium zawiera materiały dotyczące zaawansowanego wnioskowania statystycznego, skupiające się na wyznaczaniu przedziałów ufności oraz stosowaniu rozkładów t-Studenta i F-Snedecora do weryfikacji hipotez badawczych.

## Tematyka zajęć

### Topic 11: Estymacja przedziałowa i testy istotności
* [cite_start]**Cel**: Szacowanie parametrów populacji na podstawie małych prób oraz porównywanie wariancji i średnich w różnych grupach danych. [cite: 1, 5]
* **Pliki**: 
    * [cite_start]`tstudent.mlx` & `tstudentuzupelnienie3.mlx` – Skrypty dotyczące rozkładu t-Studenta. [cite: 1, 5]
    * [cite_start]`ufnonosc5.mlx` & `ufnosc2v7.pdf` – Materiały dotyczące wyznaczania przedziałów ufności. [cite: 2, 3]
    * [cite_start]`fSnedecor2.mlx` – Analiza rozkładu F-Snedecora. [cite: 4]

* **Zakres**:
    * [cite_start]**Przedziały ufności**: Budowanie obszarów, w których z określonym prawdopodobieństwem (poziom ufności $1-\alpha$) znajduje się nieznany parametr populacji (np. średnia). [cite: 2, 3]
    * [cite_start]**Rozkład t-Studenta**: Zastosowanie w sytuacjach, gdy liczebność próby jest mała ($n < 30$), a odchylenie standardowe populacji jest nieznane. [cite: 1, 5]
    * [cite_start]**Rozkład F-Snedecora**: Wykorzystanie statystyki F do testowania równości wariancji w dwóch niezależnych populacjach. [cite: 4]
    * [cite_start]**Istotność statystyczna**: Wyznaczanie obszarów krytycznych i interpretacja wyników testów (weryfikacja hipotezy zerowej $H_0$). [cite: 1, 4]

## Wykorzystane technologie
* [cite_start]**MATLAB Live Editor (`.mlx`)**: Interaktywne środowisko wykorzystane do obliczania kwantyli rozkładów (`tinv`, `finv`) oraz automatyzacji procedur testowych. [cite: 1, 2, 4, 5]
* [cite_start]**Dokumentacja PDF**: Tablice statystyczne i teoretyczne podstawy wyznaczania przedziałów ufności dla różnych modeli statystycznych. [cite: 3]

## Kluczowe zagadnienia teoretyczne
1. [cite_start]**Błąd standardowy**: Zrozumienie wpływu liczebności próby na precyzję estymacji. [cite: 2]
2. [cite_start]**Stopnie swobody ($df$)**: Prawidłowe wyznaczanie parametrów dla rozkładów t oraz F w zależności od wielkości grup danych. [cite: 1, 4]
3. [cite_start]**Poziom istotności ($\alpha$)**: Dobór prawdopodobieństwa popełnienia błędu I rodzaju w testach statystycznych. [cite: 3, 5]

## Instrukcja
1. [cite_start]Rozpocznij od analizy pliku `ufnosc2v7.pdf`, aby zapoznać się z modelami matematycznymi przedziałów ufności. [cite: 3]
2. [cite_start]Uruchom skrypty `tstudent.mlx` oraz `fSnedecor2.mlx` w programie MATLAB, aby przeprowadzić symulacje testów istotności. [cite: 1, 4]
3. [cite_start]Przetestuj wpływ zmiany poziomu ufności (np. z $95\%$ na $99\%$) w pliku `ufnonosc5.mlx` na szerokość otrzymanych przedziałów. [cite: 2]

---
*Materiały archiwalne - Semestr 1*