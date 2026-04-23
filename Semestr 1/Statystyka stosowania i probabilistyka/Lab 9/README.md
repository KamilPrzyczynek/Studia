# Statystyka Stosowana i Probabilistyka - Lab 9

Repozytorium zawiera materiały dotyczące rozkładu Chi-kwadrat ($\chi^2$) oraz jego praktycznego zastosowania w testowaniu hipotez statystycznych. Prace obejmują analizę gęstości prawdopodobieństwa oraz realizację testów zgodności i niezależności w środowisku MATLAB.

## Tematyka zajęć

### Topic 9: Rozkład Chi-kwadrat i Testowanie Hipotez
* **Cel**: Zrozumienie charakterystyki rozkładu $\chi^2$ oraz wykorzystanie go do weryfikacji założeń statystycznych.
* **Pliki**: `chi_kwadrat8fin.mlx`, `Gauss_standaryzowany.mlx` (materiał porównawczy).
* **Zakres**:
    * **Charakterystyka rozkładu**: Badanie wpływu liczby stopni swobody ($df$) na kształt funkcji gęstości prawdopodobieństwa.
    * **Wartości krytyczne**: Wyznaczanie wartości krytycznych rozkładu dla zadanych poziomów istotności $\alpha$ przy użyciu funkcji `chi2inv`.
    * **Test Niezależności**: Badanie związku między dwiema zmiennymi jakościowymi (kategorycznymi) za pomocą statystyki $\chi^2$.
    * **Test Zgodności**: Weryfikacja, czy zebrane dane empiryczne pochodzą z założonego rozkładu teoretycznego (np. normalnego).

## Wykorzystane technologie
* **MATLAB Live Editor (`.mlx`)**: Interaktywne skrypty wykorzystane do automatyzacji obliczeń statystyki testowej oraz generowania obszarów krytycznych na wykresach.
* **Wizualizacja**: Generowanie wykresów rozkładu $\chi^2$ dla różnych stopni swobody w celu zobrazowania asymetrii rozkładu.

## Kluczowe zagadnienia teoretyczne
1. **Statystyka Testowa**: Obliczanie różnic między liczebnościami oczekiwanymi a obserwowanymi w tabelach wielodzielczych.
2. **Stopnie Swobody**: Kluczowy parametr definiujący rozkład $\chi^2$, zależny od liczby kategorii w badanej próbie.
3. **Standaryzacja i Porównanie**: Odniesienie wyników do rozkładu Gaussa w celu zrozumienia relacji między rozkładem normalnym a rozkładem $\chi^2$ (suma kwadratów niezależnych zmiennych losowych o rozkładzie $N(0,1)$).

## Instrukcja
1. Otwórz plik `chi_kwadrat8fin.mlx` w programie MATLAB.
2. Skrypt zawiera gotowe bloki kodu do obliczania wartości $p$ (p-value) oraz wyznaczania obszarów odrzuceń dla hipotezy zerowej $H_0$.
3. Do wizualizacji rozkładu normalnego standaryzowanego jako punktu odniesienia, wykorzystaj pomocniczo skrypt `Gauss_standaryzowany.mlx`.

---
*Materiały archiwalne - Semestr 1*