# Programowanie w C++ - Laboratorium

Repozytorium zawiera implementację zadań z podstaw programowania w języku C++. Kod obejmuje operacje na strumieniach wejścia/wyjścia, manipulację tablicami jednowymiarowymi i dwuwymiarowymi, wykorzystanie struktur oraz operacje arytmetyczne.

## Zawartość zadań

Program został podzielony na funkcje realizujące konkretne zagadnienia informatyczne:

### 1. Podstawowe operacje i pętle (`zad1`)
* **Średnia arytmetyczna**: Pobieranie trzech liczb zmiennoprzecinkowych i obliczanie ich średniej.
* **Przetwarzanie tekstu**: Wczytywanie całych linii tekstu za pomocą `getline` i zliczanie znaków.
* **Formatowanie wyjścia**: Generowanie potęg liczby 10 z wykorzystaniem funkcji `pow` oraz formatowanie szerokości pola (`cout.width`).

### 2. Operacje na tablicach (`zad2`)
* **Automatyczne wypełnianie**: Inicjalizacja 100-elementowej tablicy liczb całkowitych ciągiem arytmetycznym (początek: 10, krok: 5).
* **Drukowanie danych**: Iteracja przez tablicę i wyświetlanie jej zawartości w konsoli.

### 3. Struktury i wskaźniki (`zad3`)
* **Model danych**: Implementacja struktury `Struktura` przechowującej liczby wejściowe oraz wyniki obliczeń (suma, iloczyn, średnia).
* **Przekazywanie przez wskaźnik**: Funkcje wczytujące i obliczeniowe operują na wskaźnikach (`Struktura* s`), co pozwala na bezpośrednią modyfikację obiektu.
* **Przekazywanie przez stałą**: Funkcja drukująca wykorzystuje `const Struktura s` w celu optymalizacji i ochrony danych przed zmianą.

### 4. Algorytmy macierzowe (`zad4`)
* **Macierz wzorcowa**: Generowanie tablicy dwuwymiarowej o rozmiarze 16x16.
* **Logika dystansu**: Implementacja algorytmu wypełniającego macierz wartościami zależnymi od odległości danego punktu od krawędzi (efekt "ramki" lub piramidy).

## Technologie i kompilacja

* **Język**: C++ (standard C++11 lub nowszy)
* **Biblioteki standardowe**: 
    * `iostream` – obsługa wejścia/wyjścia.
    * `string` – zaawansowane operacje na tekście.
    * `cmath` – funkcje matematyczne (np. potęgowanie).
    * `cctype` – klasyfikacja znaków.

### Kompilacja i uruchomienie
Aby skompilować program przy użyciu kompilatora GCC (g++), użyj komendy:
```bash
g++ main.cpp -o program
./program