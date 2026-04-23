# Statystyka Stosowana i Probabilistyka - Lab 10

Repozytorium zawiera materiały dotyczące analizy korelacji liniowej Pearsona oraz badania siły i kierunku związków między zmiennymi ilościowymi. Prace obejmują obliczenia numeryczne w środowisku MATLAB oraz analizę danych z plików zewnętrznych (branża motoryzacyjna i chemiczna).

## Tematyka zajęć

### Topic 10: Korelacja i Współzależność Zmiennych
* **Cel**: Wyznaczenie stopnia powiązania między dwiema zmiennymi losowymi oraz interpretacja współczynnika korelacji.
* **Pliki**: 
    * `korelacja6.mlx` – Główny skrypt MATLAB z algorytmami obliczeniowymi.
    * `auto.xlsx` – Dane dotyczące parametrów technicznych pojazdów.
    * `chemia.xlsx` – Dane z pomiarów chemicznych do analizy stężeń i reakcji.
    * `Bez tytułu 1.ods` – Arkusz z surowymi danymi do weryfikacji korelacji.

* **Zakres**:
    * **Współczynnik korelacji Pearsona ($r$)**: Obliczanie wartości $r$ w zakresie od $-1$ do $1$ w celu określenia siły związku.
    * **Wykresy rozrzutu (Scatter Plots)**: Wizualizacja danych w celu wstępnej identyfikacji trendów liniowych i punktów odstających.
    * **Macierz korelacji**: Jednoczesna analiza wielu zmiennych przy użyciu funkcji `corrcoef` w MATLAB.
    * **Istotność statystyczna**: Wyznaczanie wartości $p$ (p-value) dla testu istotności współczynnika korelacji.

## Wykorzystane technologie
* **MATLAB Live Editor (`.mlx`)**: Wykorzystany do wczytywania plików `.xlsx` i `.csv` oraz automatycznego generowania macierzy korelacji.
* **Analiza danych zewnętrznych**: Praca na rzeczywistych zbiorach danych (`auto`, `chemia`) wymagająca czyszczenia danych przed analizą.

## Kluczowe zagadnienia teoretyczne
1. **Interpretacja $r$**:
    * $r \approx 1$: Silna korelacja dodatnia (wzrost jednej zmiennej powoduje wzrost drugiej).
    * $r \approx -1$: Silna korelacja ujemna (wzrost jednej zmiennej powoduje spadek drugiej).
    * $r \approx 0$: Brak związku liniowego między zmiennymi.
2. **Korelacja a przyczynowość**: Zrozumienie, że wysoka korelacja nie musi oznaczać bezpośredniego związku przyczynowo-skutkowego.

## Instrukcja
1. Przed uruchomieniem skryptu `korelacja6.mlx`, upewnij się, że pliki `auto.xlsx` oraz `chemia.xlsx` znajdują się w folderze roboczym MATLAB.
2. Skrypt automatycznie generuje wykresy rozrzutu dla wybranych par zmiennych, co ułatwia interpretację wyników numerycznych.
3. Wyniki macierzy korelacji są prezentowane w sekcji `output` pod blokami kodu.

---
*Materiały archiwalne - Semestr 1*