# Metody Numeryczne - Laboratorium 14

Laboratorium czternaste poświęcone jest **szybkim algorytmom numerycznym** oraz metodom przybliżonym stosowanym w systemach czasu rzeczywistego i procesorach sygnałowych (DSP). Celem zajęć jest implementacja wydajnych metod generowania sygnałów oraz obliczania funkcji logarytmicznych przy ograniczonej złożoności obliczeniowej.

## Zawartość laboratorium

Projekt zawiera skrypty realizujące iteracyjne generowanie funkcji trygonometrycznych, analizę pętli PLL oraz aproksymację logarytmów.

### 1. Rekurencyjne generowanie funkcji trygonometrycznych (`zad143.m`, `zad145.m`)
* **Metody rekurencyjne**: Implementacja generatorów sinusoid, które zamiast kosztownych funkcji `sin()` i `cos()`, wykorzystują wartości z poprzednich kroków:
    * **Metoda I**: Wykorzystanie zależności $y(n) = 2\cos(\Delta x)y(n-1) - y(n-2)$.
    * **Metoda II (Cyfrowy oscylator)**: Wykorzystanie par równań różnicowych dla zmiennych $u(n)$ i $v(n)$.
* **Obroty współrzędnych**: Wykorzystanie macierzy rotacji $R$ do generowania eksponenty zespolonej (sekwencja rotacji wektora).

### 2. Pętla fazowa PLL (`zad148.m`)
* **Synchronizacja**: Symulacja działania pętli PLL (Phase Locked Loop) dla sygnałów rzeczywistych i zespolonych.
* **Adaptacja**: Wyznaczanie parametrów pętli (współczynniki $\mu_1, \mu_2$) na podstawie zadanego tłumienia i szerokości pasma pracy.
* **Implementacja DSP**: Wykorzystanie własnych funkcji `my_cos` i `my_exp` opartych na definicjach wykładniczych.

### 3. Aproksymacja logarytmów (`zad1410.m`, `LOG2.m`, `calculateLogs.m`)
* **Algorytmy stałoprzecinkowe**: Obliczanie $\log_2(x)$ przy użyciu operacji bitowych (`bitshift`) do wyznaczenia części całkowitej (cechy).
* **Aproksymacja Padé**: Wykorzystanie wymiernej aproksymacji Padé dla funkcji $\ln(1+x)$ w celu precyzyjnego wyznaczenia części ułamkowej (mantysy) logarytmu.
* **Konwersja baz**: Obliczanie $\log_{10}(x)$ na podstawie $\log_2(x)$ z wykorzystaniem stałej konwersji.

## Wykorzystane techniki num