# Statystyka Stosowana i Probabilistyka - Lab 10

Repozytorium zawiera materiały dotyczące analizy korelacji liniowej Pearsona oraz badania siły i kierunku związków między zmiennymi ilościowymi. Prace obejmują obliczenia numeryczne w środowisku MATLAB oraz analizę danych z plików zewnętrznych (branża motoryzacyjna i chemiczna).

## Tematyka zajęć

### Topic 10: Korelacja i Współzależność Zmiennych
* [cite_start]**Cel**: Wyznaczenie stopnia powiązania między dwiema zmiennymi losowymi oraz interpretacja współczynnika korelacji. [cite: 38, 107]
* **Pliki**: 
    * [cite_start]`korelacja6.mlx` – Główny skrypt MATLAB z algorytmami obliczeniowymi. [cite: 38, 107]
    * [cite_start]`auto.xlsx` – Dane dotyczące parametrów technicznych pojazdów. [cite: 107]
    * [cite_start]`chemia.xlsx` – Dane z pomiarów chemicznych do analizy stężeń i reakcji. [cite: 107]
    * [cite_start]`Bez tytułu 1.ods` – Arkusz z surowymi danymi do weryfikacji korelacji. [cite: 28, 105]

* **Zakres**:
    * [cite_start]**Współczynnik korelacji Pearsona ($r$)**: Obliczanie wartości $r$ w zakresie od $-1$ do $1$ w celu określenia siły związku. [cite: 38, 107]
    * [cite_start]**Wykresy rozrzutu (Scatter Plots)**: Wizualizacja danych w celu wstępnej identyfikacji trendów liniowych i punktów odstających. [cite: 38, 107]
    * [cite_start]**Macierz korelacji**: Jednoczesna analiza wielu zmiennych przy użyciu funkcji `corrcoef` w MATLAB. [cite: 38, 107]
    * [cite_start]**Istotność statystyczna**: Wyznaczanie wartości $p$ (p-value) dla testu istotności współczynnika korelacji. [cite: 38, 107]

## Wykorzystane technologie
* [cite_start]**MATLAB Live Editor (`.mlx`)**: Wykorzystany do wczytywania plików `.xlsx` i `.csv` oraz automatycznego generowania macierzy korelacji. [cite: 38, 107]
* [cite_start]**Analiza danych zewnętrznych**: Praca na rzeczywistych zbiorach danych (`auto`, `chemia`) wymagająca czyszczenia danych przed analizą. [cite: 107]

## Kluczowe zagadnienia teoretyczne
1. **Interpretacja $r$**:
    * [cite_start]$r \approx 1$: Silna korelacja dodatnia (wzrost jednej zmiennej powoduje wzrost drugiej). [cite: 38]
    * [cite_start]$r \approx -1$: Silna korelacja ujemna (wzrost jednej zmiennej powoduje spadek drugiej). [cite: 38]
    * [cite_start]$r \approx 0$: Brak związku liniowego między zmiennymi. [cite: 38]
2. [cite_start]**Korelacja a przyczynowość**: Zrozumienie, że wysoka korelacja nie musi oznaczać bezpośredniego związku przyczynowo-skutkowego. [cite: 107]

## Instrukcja
1. [cite_start]Przed uruchomieniem skryptu `korelacja6.mlx`, upewnij się, że pliki `auto.xlsx` oraz `chemia.xlsx` znajdują się w folderze roboczym MATLAB. [cite: 107]
2. [cite_start]Skrypt automatycznie generuje wykresy rozrzutu dla wybranych par zmiennych, co ułatwia interpretację wyników numerycznych. [cite: 38]
3. [cite_start]Wyniki macierzy korelacji są prezentowane w sekcji `output` pod blokami kodu. [cite: 38]

---
*Materiały archiwalne - Semestr 1*