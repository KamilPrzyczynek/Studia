# Statystyka Stosowana i Probabilistyka - Lab 11

Repozytorium zawiera materiały dotyczące zaawansowanego wnioskowania statystycznego, skupiające się na wyznaczaniu przedziałów ufności oraz stosowaniu rozkładów t-Studenta i F-Snedecora do weryfikacji hipotez badawczych.

## Tematyka zajęć

### Topic 11: Estymacja przedziałowa i testy istotności
* **Cel**: Szacowanie parametrów populacji na podstawie małych prób oraz porównywanie wariancji i średnich w różnych grupach danych.
* **Pliki**: 
    * `tstudent.mlx` & `tstudentuzupelnienie3.mlx` – Skrypty dotyczące rozkładu t-Studenta.
    * `ufnonosc5.mlx` & `ufnosc2v7.pdf` – Materiały dotyczące wyznaczania przedziałów ufności.
    * `fSnedecor2.mlx` – Analiza rozkładu F-Snedecora.

* **Zakres**:
    * **Przedziały ufności**: Budowanie obszarów, w których z określonym prawdopodobieństwem (poziom ufności $1-\alpha$) znajduje się nieznany parametr populacji (np. średnia).
    * **Rozkład t-Studenta**: Zastosowanie w sytuacjach, gdy liczebność próby jest mała ($n < 30$), a odchylenie standardowe populacji jest nieznane.
    * **Rozkład F-Snedecora**: Wykorzystanie statystyki F do testowania równości wariancji w dwóch niezależnych populacjach.
    * **Istotność statystyczna**: Wyznaczanie obszarów krytycznych i interpretacja wyników testów (weryfikacja hipotezy zerowej $H_0$).

## Wykorzystane technologie
* **MATLAB Live Editor (`.mlx`)**: Interaktywne środowisko wykorzystane do obliczania kwantyli rozkładów (`tinv`, `finv`) oraz automatyzacji procedur testowych.
* **Dokumentacja PDF**: Tablice statystyczne i teoretyczne podstawy wyznaczania przedziałów ufności dla różnych modeli statystycznych.

## Kluczowe zagadnienia teoretyczne
1. **Błąd standardowy**: Zrozumienie wpływu liczebności próby na precyzję estymacji.
2. **Stopnie swobody ($df$)**: Prawidłowe wyznaczanie parametrów dla rozkładów t oraz F w zależności od wielkości grup danych.
3. **Poziom istotności ($\alpha$)**: Dobór prawdopodobieństwa popełnienia błędu I rodzaju w testach statystycznych.

## Instrukcja
1. Rozpocznij od analizy pliku `ufnosc2v7.pdf`, aby zapoznać się z modelami matematycznymi przedziałów ufności.
2. Uruchom skrypty `tstudent.mlx` oraz `fSnedecor2.mlx` w programie MATLAB, aby przeprowadzić symulacje testów istotności.
3. Przetestuj wpływ zmiany poziomu ufności (np. z $95\%$ na $99\%$) w pliku `ufnonosc5.mlx` na szerokość otrzymanych przedziałów.

---
*Materiały archiwalne - Semestr 1*