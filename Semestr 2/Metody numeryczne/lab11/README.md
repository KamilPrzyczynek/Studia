# Metody Numeryczne - Laboratorium 11

Laboratorium jedenaste poświęcone jest **numerycznemu rozwiązywaniu równań różniczkowych zwyczajnych (ODE)**. Celem zajęć jest implementacja własnych algorytmów całkowania numerycznego oraz wykorzystanie wbudowanych solverów środowiska MATLAB do analizy układów dynamicznych.

## Zawartość laboratorium

Projekt zawiera skrypty realizujące zadania od implementacji klasycznych metod krokowych po symulację oscylatorów nieliniowych.

### 1. Oscylator Van der Pola (`zadanie113.m`, `zadanie114.m`)
* **Modelowanie**: Symulacja nieliniowego oscylatora opisanego równaniem Van der Pola dla różnych wartości parametru sztywności $\mu$ oraz różnych warunków początkowych $x_0$.
* **Solvery MATLAB**: 
    * Wykorzystanie funkcji `ode23` (metoda Bogackiego-Shampine'a) do wyznaczania przebiegów czasowych zmiennych stanu $x_1(t)$ i $x_2(t)$.
    * Porównanie wpływu parametrów tolerancji (`RelTol`, `AbsTol`) na dokładność i stabilność rozwiązania.
* **Wizualizacja**: Generowanie wykresów czasowych oraz portretów fazowych układu.

### 2. Własne implementacje metod ODE (`zad11_9.m`)
* **Algorytmy hybrydowe**: Skrypt realizuje algorytm całkowania numerycznego łączący różne podejścia.
* **Inicjalizacja RK4**: Wykorzystanie metody Rungego-Kutty czwartego rzędu (RK4) do wyznaczenia pierwszych kroków rozwiązania.
* **Metody wielokrokowe**: Implementacja pętli obliczeniowej wykorzystującej wartości z poprzednich kroków do wyznaczania kolejnych punktów całki.

## Wykorzystane narzędzia i techniki

* **Solvery wbudowane**: `ode23` oraz `ode45` – podstawowe narzędzia MATLABa do rozwiązywania problemów początkowych.
* **Metody Rungego-Kutty**: Klasyczne podejście oparte na wyznaczaniu przyrostów funkcji w punktach pośrednich kroku czasowego.
* **Analiza stabilności**: Badanie zachowania algorytmów przy zmianie kroku czasowego $dt$ oraz parametrów modelu (np. parametr $\mu$ w oscylatorze).
* **Opcje optymalizacji**: Wykorzystanie `odeset` do precyzyjnego sterowania procesem obliczeniowym.

## Instrukcja uruchomienia

1. **Symulacja Oscylatora**: Uruchom `zadanie113.m`, aby zobaczyć przebiegi czasowe $x(t)$ dla różnych parametrów $\mu$.
2. **Analiza parametrów**: Skrypt `zadanie114.m` pozwala na zbadanie wpływu warunków początkowych na stabilność cyklu granicznego.
3. **Własny solver**: Funkcja `zad11_9.m` wymaga podania uchwytu do funkcji różniczkowej, zakresu czasu oraz liczby kroków $M$ w celu przeprowadzenia autorskiego procesu całkowania.

---
*Opracował: Kamil Przyczynek*