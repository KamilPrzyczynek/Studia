# Metody Numeryczne - Laboratorium 10

Laboratorium dziesiąte poświęcone jest zagadnieniom **optymalizacji numerycznej**. Celem zajęć jest praktyczne zastosowanie metod poszukiwania ekstremów funkcji jednej oraz wielu zmiennych, a także wykorzystanie narzędzi optymalizacyjnych środowiska MATLAB.

## Zawartość laboratorium

Projekt zawiera skrypty realizujące zadania od optymalizacji funkcji testowych po rozwiązywanie problemów fizycznych.

### 1. Optymalizacja funkcji wielu zmiennych (`zad10_1.m`, `zad10_9.m`, `rosenbrock.m`)
* **Funkcja Rosenbrocka**: Analiza słynnej funkcji testowej o wąskiej, zakrzywionej dolinie prowadzącej do minimum globalnego w punkcie $(1,1)$.
* **Algorytmy**:
    * Wykorzystanie funkcji `fminunc` do minimalizacji bez ograniczeń.
    * Optymalizacja z wykorzystaniem analitycznie wyznaczonego gradientu w celu przyspieszenia zbieżności (`GradObj` ustawione na `on`).
    * Wizualizacja powierzchni błędu przy użyciu funkcji `surf` oraz śledzenie ścieżki optymalizacji.

### 2. Problemy fizyczne i kinematyczne (`zad10_5.m`, `zad10_11.m`)
* **Ruch pocisku**: Wyznaczanie maksymalnej wysokości lotu pocisku przy uwzględnieniu oporu powietrza za pomocą funkcji `fminbnd`.
* **Skok Bungee**: Analiza funkcji wysokości $z(t)$ podczas skoku.
* **Metoda Newtona**: Implementacja algorytmu Newtona do wyznaczenia ekstremum przy użyciu pierwszej i drugiej pochodnej analitycznej funkcji wysokości.

### 3. Metody poszukiwania jednowymiarowego (`zad10_6.m`, `zad10_12.m`)
* **Złoty Podział (Golden Search)**: Implementacja klasycznego algorytmu złotego podziału, który nie wymaga znajomości pochodnej funkcji.
* **Metoda Kwadratowa (Quadratic Search)**: Aproksymacja funkcji wielomianem drugiego stopnia (parabolą) w celu szybkiego przybliżenia położenia ekstremum.
* **Zastosowania**: Analiza dynamiki spadającego ciała i wyznaczanie ekstremalnych wartości sygnałów.

## Wykorzystane funkcje MATLAB

* `fminunc`: Minimalizacja funkcji wielu zmiennych bez ograniczeń.
* `fminbnd`: Minimalizacja funkcji jednej zmiennej w zadanym przedziale.
* `optimset` / `optimoptions`: Konfiguracja parametrów solvera, takich jak tolerancja błędu (`TolX`) czy wyświetlanie wyników iteracji.
* `surf`, `contour`, `quiver`: Zaawansowane narzędzia do wizualizacji kształtu funkcji celu oraz wektorów gradientu.

## Instrukcja uruchomienia

1. **Analiza funkcji Rosenbrocka**: Uruchom `zad10_1.m`, aby zobaczyć wykres 3D funkcji testowej i wyniki optymalizacji.
2. **Optymalizacja z gradientem**: Skrypt `zad10_9.m` pokazuje wpływ podania informacji o pochodnych na wydajność obliczeń.
3. **Zadania fizyczne**: Uruchom `zad10_5.m` (balistyka) lub `zad10_11.m` (skok bungee), aby zobaczyć praktyczne zastosowania optymalizacji w mechanice.
4. **Metody klasyczne**: Skrypty `zad10_6.m` i `zad10_12.m` zawierają samodzielne implementacje algorytmów poszukiwania minimum.

---
*Opracował: Kamil Przyczynek*