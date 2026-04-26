# Metody Numeryczne - Laboratorium 9

Laboratorium dziewiąte poświęcone jest **rozwiązywaniu równań nieliniowych** oraz układów równań nieliniowych. Celem zajęć jest implementacja klasycznych metod iteracyjnych, analiza ich zbieżności oraz wykorzystanie funkcji wbudowanych środowiska MATLAB.

## Zawartość laboratorium

Projekt zawiera skrypty realizujące poszukiwanie miejsc zerowych funkcji jedną zmienną oraz rozwiązywanie problemów wielowymiarowych.

### 1. Implementacja Solverów (`nonlinsolvers.m`)
Główna funkcja narzędziowa implementująca trzy podstawowe algorytmy:
* **Metoda Bisekcji**: Stabilna, choć wolniejsza metoda oparta na podziale przedziału.
* **Metoda Regula-Falsi**: Wykorzystuje interpolację liniową (metoda fałszywej linii).
* **Metoda Newtona-Raphsona**: Metoda stycznych wymagająca znajomości pochodnej, oferująca bardzo szybką zbieżność.

### 2. Porównanie Zbieżności i Metoda Mullera (`zad9_2.m`, `zad951.m`)
* **Analiza porównawcza**: Skrypt `zad9_2.m` testuje zbieżność metod bisekcji, regula-falsi i Newtona dla funkcji $f(x) = \sin(x)$.
* **Wizualizacja**: Porównanie prędkości docierania do rozwiązania na wykresach iteracji.
* **Metoda Mullera**: W skrypcie `zad951.m` zaimplementowano metodę wykorzystującą interpolację wielomianem stopnia drugiego (parabolą) przechodzącą przez trzy punkty początkowe.

### 3. Funkcje Wbudowane i Pierwiastki Wielokrotne (`zad910.m`)
* **Funkcja `fzero`**: Wykorzystanie profesjonalnego solvera MATLABa z określoną tolerancją (`TolX`).
* **Analiza krotności**: Badanie zachowania algorytmów dla różnych typów miejsc zerowych:
    * $f(x) = x^2 - 4$ (pierwiastki proste).
    * $f(x) = (x-4)^2$ (pierwiastek podwójny – brak zmiany znaku).
    * $f(x) = (x-4)^3$ (pierwiastek potrójny).

### 4. Układy Równań Nieliniowych (`zad911.m`)
* **Wielowymiarowa Metoda Newtona**: Rozwiązywanie układów równań nieliniowych za pomocą macierzy Jacobiego ($J$).
* **Wizualizacja wektorowa**: Skrypt pokazuje proces dochodzenia algorytmu do rozwiązania w przestrzeni 2D przy użyciu funkcji `scatter` oraz `quiver` (wektory poprawek).

## Wykorzystane techniki numeryczne

* **Metody iteracyjne**: Powtarzanie obliczeń aż do osiągnięcia zadanej precyzji (tolerancji).
* **Aproksymacja pochodnej**: Wykorzystanie pochodnych analitycznych w metodzie Newtona.
* **Kryteria zbieżności**: Monitorowanie wartości funkcji bliskiej zeru lub normy różnicy kolejnych przybliżeń.

## Instrukcja uruchomienia

1.  Aby porównać standardowe metody: Uruchom `zad9_2.m`.
2.  Aby przeanalizować działanie funkcji `fzero`: Uruchom `zad910.m`.
3.  Aby zobaczyć działanie algorytmu Newtona w dwóch wymiarach: Uruchom `zad911.m`.

---
*Opracował: Kamil Przyczynek*