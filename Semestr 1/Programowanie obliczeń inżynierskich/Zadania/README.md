# Programowanie Obliczeń Inżynierskich - Skrypty MATLAB

Repozytorium zawiera podstawowe skrypty napisane w środowisku MATLAB, realizujące zadania z zakresu logiki programowania, arytmetyki oraz geometrii konsolowej.

## Zawartość zadań

### Zadanie 1: Kalkulator Konsolowy
Interaktywny kalkulator obsługujący operacje matematyczne na podstawie wprowadzonego znaku.
* **Operacje**: Dodawanie (`+`), odejmowanie (`-`), mnożenie (`*`), dzielenie (`/`) z zabezpieczeniem przed dzieleniem przez zero.
* **Statystyka**: Obliczanie średniej arytmetycznej (`sa`) oraz średniej geometrycznej (`sg`) dla dwóch liczb.
* **Obsługa wejścia**: Skrypt dynamicznie prosi o odpowiednią liczbę argumentów w zależności od wybranego operatora.

### Zadanie 3: Geometria i Równania Kwadratowe
Skrypt łączący rysowanie kształtów oraz rozwiązywanie problemów algebraicznych.
* **Rysowanie kwadratu**: Wykorzystanie zagnieżdżonych pętli `for` do generowania ramki kwadratu z gwiazdek (`*`) o zadanym boku.
* **Funkcja kwadratowa**: Obliczanie wyróżnika wielomianu (delty) oraz wyznaczanie miejsc zerowych $x_1, x_2$ dla podanych współczynników $a, b, c$.

### Zadanie 4: Przetwarzanie Tablic
Wstępna implementacja obsługi dynamicznych struktur danych.
* Inicjalizacja tablicy o rozmiarze `n` zdefiniowanym przez użytkownika.

## Funkcje MATLAB wykorzystane w projekcie
* `input()` – pobieranie danych od użytkownika (liczbowych i tekstowych).
* `fprintf()` – sformatowane wyświetlanie wyników w oknie komend.
* `clc`, `clear` – czyszczenie pamięci i okna komend przed uruchomieniem algorytmu.
* `sqrt()` – obliczanie pierwiastka kwadratowego.

## Instrukcja uruchomienia
1. Otwórz plik skryptu `.m` w edytorze MATLAB.
2. Kliknij przycisk **Run** lub wpisz nazwę pliku w **Command Window**.
3. Postępuj zgodnie z instrukcjami pojawiającymi się w konsoli (podaj znak operacji lub wymiary figury).

---
> **Uwaga techniczna:** Skrypt w Zadaniu 3 zawiera przykładowe błędy logiczne w pętlach (np. `bok==1`) oraz literówki w nazwach zmiennych (`detla`), co służy do celów edukacyjnych i analizy błędów podczas zajęć laboratoryjnych.