# Metody Numeryczne - Zbiór Zadań Laboratoryjnych

Niniejsze repozytorium zawiera zbiór zadań z przedmiotu **Metody Numeryczne**, realizowanych w środowisku MATLAB/Octave. Zakres materiału obejmuje zaawansowaną algebrę macierzową, optymalizację, rozwiązywanie równań różniczkowych oraz szybkie algorytmy cyfrowego przetwarzania sygnałów.

## Struktura Projektu

Zadania zostały podzielone tematycznie zgodnie z programem laboratorium:

### 1. Algebra Macierzowa i DSP (Laboratorium 3)
* **Układy Równań Liniowych**: Porównanie metod rozwiązywania $Ax=b$ (inv, pinv, operator backslash, wzory Cramera).
* **Transformacje Liniowe**: Implementacja macierzowej analizy i syntezy sygnału mowy z wykorzystaniem bazy kosinusowej.

### 2. Dekompozycje i Metody Iteracyjne (Laboratorium 4)
* **Dekompozycje Macierzy**: Autorskie implementacje rozkładów LU, Cholesky'ego oraz QR (Gram-Schmidt, Householder).
* **Metody Iteracyjne**: Rozwiązywanie układów równań metodą Jacobiego.
* **Identyfikacja Systemów**: Wyznaczanie wag filtru z wykorzystaniem macierzy Toeplitza.

### 3. Aproksymacja i Regresja (Laboratorium 5)
* **Regresja Liniowa**: Dopasowywanie trendów do danych pomiarowych.
* **Estymacja Kanału**: Odzyskiwanie odpowiedzi impulsowej systemów zaszumionych (AWGN).
* **Wielomiany Ortogonalne**: Generowanie i analiza właściwości wielomianów Czebyszewa oraz szeregów Fouriera.

### 4. Równania Nieliniowe (Laboratorium 9)
* **Solvery Jednowymiarowe**: Implementacja metod bisekcji, regula-falsi, Newtona-Raphsona oraz Mullera.
* **Układy Równań**: Rozwiązywanie wielowymiarowych problemów nieliniowych z użyciem macierzy Jacobiego.
* **Analiza Zbieżności**: Badanie wpływu krotności pierwiastka na stabilność algorytmów.

### 5. Optymalizacja (Laboratorium 10)
* **Minimalizacja Funkcji**: Poszukiwanie ekstremów funkcji wielu zmiennych (m.in. funkcja Rosenbrocka).
* **Metody Bezgradientowe**: Algorytmy złotego podziału i interpolacji kwadratowej.
* **Zastosowania Fizyczne**: Optymalizacja parametrów ruchu pocisku oraz dynamiki skoku bungee.

### 6. Równania Różniczkowe Zwyczajne - ODE (Laboratorium 11)
* **Modele Dynamiczne**: Symulacja nieliniowego oscylatora Van der Pola.
* **Metody Krokowe**: Implementacja algorytmów Rungego-Kutty (RK4) oraz wykorzystanie wbudowanych solverów `ode45` i `ode23`.

### 7. Równania Różniczkowe Cząstkowe - PDE (Laboratorium 12)
* **Problemy Brzegowe**: Rozkład temperatury w pręcie (1D) i płycie (2D) metodą różnic skończonych.
* **Propagacja Fal**: Symulacja dynamiki fali elektromagnetycznej w czasie i przestrzeni.

### 8. Szybkie Algorytmy Numeryczne (Laboratorium 14)
* **Rekurencyjne Generatory**: Wydajne generowanie sinusoid bez użycia tablic i funkcji systemowych.
* **Logarytmy w DSP**: Aproksymacja logarytmów (Padé) oraz operacje stałoprzecinkowe dla systemów czasu rzeczywistego.
* **Pętle Fazowe (PLL)**: Numeryczna symulacja synchronizacji sygnałów.

## Narzędzia i Technologie

* **MATLAB / Octave**: Główne środowisko obliczeniowe.
* **DSP Toolbox**: Przetwarzanie i analiza sygnałów audio.
* **Metoda Najmniejszych Kwadratów (LSE)**: Fundament większości algorytmów aproksymacji.

## Instrukcja użytkowania

1. Wszystkie pliki `.m` z danego laboratorium powinny znajdować się w jednym podfolderze, aby umożliwić skryptom dostęp do funkcji pomocniczych.
2. Skrypty główne (np. `zadX_Y.m`) zawierają gotowe parametry testowe i generują wizualizacje wyników.
3. W przypadku zadań audio (Lab 3) wymagany jest plik `mowa.wav` w folderze roboczym.

---
**Opracował: Kamil Przyczynek**