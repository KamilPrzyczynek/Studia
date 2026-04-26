# Metody Numeryczne - Laboratorium 5

Laboratorium piąte poświęcone jest zagadnieniom **aproksymacji funkcji i sygnałów**. Celem zajęć jest praktyczne wykorzystanie regresji liniowej, estymacji parametrów systemów oraz modelowania przy użyciu wielomianów ortogonalnych.

## Zawartość laboratorium

Projekt zawiera skrypty realizujące różne podejścia do przybliżania danych i modelowania kanałów transmisji.

### 1. Regresja Liniowa i Aproksymacja Wielomianowa (`untitled5.m`)
* **Regresja Liniowa**: Wyznaczanie parametrów prostej $y = ax + b$ dla zbioru pomiarów.
* **Porównanie metod**:
    * Rozwiązanie macierzowe przy użyciu operatora `\` (minimalizacja błędu średniokwadratowego).
    * Rozwiązanie analityczne z wykorzystaniem średnich arytmetycznych i kowariancji.
* **Wielomiany wyższego rzędu**: Wykorzystanie funkcji `polyfit` i `polyval` do dopasowania krzywych wyższych rzędów do danych punktowych.

### 2. Estymacja odpowiedzi impulsowej kanału (`untitled4.m`)
* **Modelowanie kanału**: Symulacja odpowiedzi impulsowej $h(n)$.
* **Sekwencje PRBS**: Generowanie pseudolosowych sekwencji binarnych do wzbudzenia kanału.
* **Macierz Toeplitza**: Budowa macierzy splotu $X$ i rozwiązanie problemu odwrotnego $he = X \setminus y$ w celu odzyskania wag filtru.
* **Analiza szumu**: Badanie wpływu białego szumu Gaussa (AWGN) na jakość estymacji sygnału.

### 3. Aproksymacja sygnałów okresowych (`untitled6.m`)
* **Aproksymacja sygnału piłokształtnego**: Przybliżanie funkcji `sawtooth` zaszumionej losowymi zakłóceniami.
* **Baza ortogonalna**: Wykorzystanie ortogonalnych funkcji sinus jako bazy transformacji.
* **Szereg Fouriera**: Wyznaczanie współczynników aproksymacji poprzez rzutowanie sygnału na bazę trygonometryczną ($a = X^T y$).

### 4. Wielomiany Czebyszewa (`untitled7.m`, `untitled8.m`)
* **Generowanie wielomianów**: Implementacja i wizualizacja wielomianów Czebyszewa pierwszego rodzaju od $C_0(x)$ do $C_{10}(x)$.
* **Właściwości**: Analiza przebiegów wielomianów w przedziale $[-1, 1]$, które są kluczowe w optymalnej aproksymacji jednostajnej.


## Wykorzystane narzędzia i techniki

* **Minimalizacja błędu**: Metoda najmniejszych kwadratów (LSE).
* **Ortogonalność**: Wykorzystanie właściwości baz ortogonalnych do uproszczenia obliczeń i poprawy stabilności numerycznej.
* **Wizualizacja**: Porównywanie funkcji oryginalnych z ich aproksymatami na wykresach (`plot`, `stem`).

## Instrukcja uruchomienia

1. **Regresja**: Uruchom `untitled5.m`, aby zobaczyć dopasowanie linii trendu do punktów pomiarowych.
2. **Kanał transmisji**: Skrypt `untitled4.m` przeprowadza symulację identyfikacji systemu – czerwone kółka oznaczają zadane wagi, a niebieskie krzyżyki wagi obliczone.
3. **Analiza Czebyszewa**: Skrypty `untitled7.m` i `untitled8.m` generują wykresy kolejnych rzędów wielomianów.

---
*Opracował: Kamil Przyczynek*