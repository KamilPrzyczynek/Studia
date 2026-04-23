# Laboratorium 1 - Podstawy obliczeń i wizualizacji w MATLAB

Katalog zawiera rozwiązania zadań wprowadzających do pracy w środowisku MATLAB, obejmujących obliczenia numeryczne, algebrę liniową oraz generowanie wykresów.

## Spis zadań

### 1. Obliczanie wartości wyrażeń
Realizacja złożonych operacji arytmetycznych z wykorzystaniem funkcji wbudowanych:
* Wykładniki potęgowe i pierwiastki n-tego stopnia (`nthroot`).
* Logarytmy naturalne i funkcje trygonometryczne.
* Konwersja stopni na radiany (`deg2rad`).

### 2. Formuły matematyczne z podstawieniem
Implementacja wzorów inżynierskich dla zadanych wartości zmiennych:
* Obliczanie wyrażeń wymiernych i potęgowych.
* Zastosowanie wzoru na zamianę podstawy logarytmu.
* Wykorzystanie silni (`factorial`) oraz operacje na wektorach parametrów (np. obliczanie natężenia prądu $I$ dla zakresu częstotliwości).

### 3. Wizualizacja funkcji 2D
Generowanie wykresów porównawczych dla funkcji trygonometrycznych:
* Rysowanie $y = \sin(x)$ oraz $y = \cos(x) - \sin(x)$ na jednym układzie współrzędnych.
* Formatowanie wykresu: style linii, kolory, legendy oraz siatka pomocnicza (`grid`).

### 4. Wykresy parametryczne
Sporządzanie wykresu funkcji określonej parametrycznie:
* Definicja zmiennych $x(t)$ i $y(t)$.
* Obsługa punktu osobliwego w $t=0$ dla funkcji typu $\frac{\sin(t)}{t}$ poprzez ręczne zdefiniowanie granicy.

### 5. Algorytmy warunkowe
Implementacja funkcji zdefiniowanej przedziałowo:
* Wykorzystanie pętli `for` do iteracji po wektorze testowym.
* Zastosowanie instrukcji `if-else` do wyboru odpowiedniego wzoru funkcji w zależności od wartości bezwzględnej argumentu.

### 6. Sumowanie ciągów
Obliczanie sumy szeregu liczb (suma odwrotności liczb naturalnych od $1$ do $n$) na podstawie danych wejściowych pobranych od użytkownika.

### 7. Kombinatoryka
Obliczanie wartości symbolu Newtona $\binom{n}{k}$ przy użyciu funkcji `nchoosek`.

### 8. Algebra liniowa - Układy równań
Rozwiązywanie układów trzech równań liniowych przy użyciu operatora lewostronnego dzielenia macierzowego (`\`).

### 9. Wielomiany i pierwiastki
Wyznaczanie pierwiastków równań wielomianowych oraz liczb zespolonych za pomocą funkcji `roots`.

### 10. Pierwiastkowanie liczb zespolonych
Obliczanie pierwiastków trzeciego stopnia z jednostki urojonej $i$ oraz liczby $1$, z uwzględnieniem wszystkich rozwiązań na płaszczyźnie zespolonej.

## Technologie
* **Środowisko**: MATLAB
* **Zastosowane funkcje**: `plot`, `roots`, `eval`, `nchoosek`, `factorial`, `input`.