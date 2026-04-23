# Programowanie Obliczeń Inżynierskich - Kolokwium MATLAB

Repozytorium zawiera rozwiązania zadań z kolokwium, obejmujące obliczenia wektorowe, operacje na tablicach oraz wizualizację funkcji trygonometrycznych.

## Spis zadań

### Zadanie 1: Funkcja normy wektora
Implementacja własnej funkcji `norma(x)` służącej do obliczania normy euklidesowej wektora.
* **Metoda**: Wykorzystanie iloczynu skalarnego ($x \cdot x^T$) pod pierwiastkiem.

### Zadanie 2: Odległość między wektorami
Skrypt realizujący interaktywne obliczanie odległości euklidesowej między dwoma punktami w przestrzeni N-wymiarowej.
* **Funkcjonalność**: 
    * Pobieranie od użytkownika rozmiaru wektorów `N`.
    * Dynamiczne wypełnianie wektorów `x` oraz `y`.
    * Wykorzystanie zdefiniowanej wcześniej funkcji `norma` do obliczenia wyniku końcowego.

### Zadanie 3: Wykres funkcji cotangens
Generowanie czytelnego wykresu funkcji $y = \text{ctg}(x)$ w przedziale $(0, 2\pi)$.
* **Specyfikacja**:
    * Podział przedziału na dwa podzbiory (wykluczenie punktu osobliwego $\pi$), aby uniknąć pionowych linii łączących punkty dążące do nieskończoności.
    * Włączenie siatki pomocniczej (`grid on`) dla lepszej analizy wykresu.

## Wymagania
* Środowisko MATLAB (dowolna wersja obsługująca GUIDE/Skrypty).
* Funkcja `norma` musi być widoczna w ścieżce (Path) lub dołączona na końcu pliku skryptu.

## Instrukcja użycia
1. Uruchom skrypt w oknie Command Window.
2. Podaj wymagane dane (rozmiar i elementy wektorów).
3. Wynik odległości oraz wykres funkcji zostaną wyświetlone automatycznie.

---
*Zadania przygotowane w ramach laboratoriów z programowania obliczeń inżynierskich.*