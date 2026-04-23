# Laboratorium 5 - Instrukcje sterujące i algorytmy sortowania

Katalog zawiera implementacje podstawowych algorytmów w środowisku MATLAB, skupiając się na wykorzystaniu instrukcji warunkowych, pętli oraz operacji na tablicach.

## Spis zadań

### 1. Kalkulator wielofunkcyjny
Prosty kalkulator obsługujący 6 działań dla dwóch liczb wprowadzonych przez użytkownika:
* Dodawanie, odejmowanie, mnożenie, dzielenie.
* Średnia arytmetyczna oraz średnia geometryczna.
* **Technologia**: Wykorzystanie struktury `switch-case` oraz `if-else` do obsługi dzielenia przez zero i wyników zespolonych.

### 2. Rozwiązywanie równania kwadratowego
Algorytm wyznaczający pierwiastki równania $ax^2 + bx + c = 0$.
* **Zakres**: Rozwiązania w zbiorze liczb rzeczywistych oraz zespolonych (obsługa $\Delta < 0$).
* **Funkcje**: Zastosowanie funkcji `complex()` oraz `sqrt()` do obsługi części urojonej.

### 3. Generowanie figur (Kwadrat)
Rysowanie ramki kwadratu o boku $N$ w oknie Command Window.
* **Algorytm**: Zagnieżdżone pętle `for` z warunkami logicznymi sprawdzającymi krawędzie figury.
* **Wyjście**: Znaki gwiazdki `*` dla krawędzi i spacje dla wnętrza.

### 4. Sortowanie bąbelkowe (Bubble Sort)
Implementacja klasycznego algorytmu sortowania tablicy o rozmiarze $N$.
* **Dane**: Elementy tablicy są generowane losowo (`randi`).
* **Algorytm**: Iteracyjne porównywanie sąsiednich elementów i ich zamiana miejscami (swap) aż do uzyskania pełnego uporządkowania.

## Instrukcja uruchomienia
1. Otwórz skrypt `lab5.m` w programie MATLAB.
2. Uruchom skrypt przyciskiem **Run**.
3. Reaguj na monity w oknie Command Window, wprowadzając dane wejściowe.

---
*Zadania wykonane w ramach przedmiotu Programowanie Obliczeń Inżynierskich.*