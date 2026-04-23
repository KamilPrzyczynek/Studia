# Podstawy Programowania w C - Laboratorium 13: Dynamiczna Alokacja Pamięci

Repozytorium zawiera rozwiązania zadań z trzynastego laboratorium, skupiające się na ręcznym zarządzaniu pamięcią przy użyciu funkcji z biblioteki `<stdlib.h>`.

## Kluczowe funkcje i pojęcia
* **`malloc`**: Alokacja bloku pamięci o określonym rozmiarze (zawiera przypadkowe dane).
* **`calloc`**: Alokacja pamięci dla tablicy z automatycznym zerowaniem wszystkich elementów.
* **`realloc`**: Zmiana rozmiaru wcześniej zaalokowanego bloku pamięci (powiększanie lub pomniejszanie).
* **`free`**: Zwalnianie zarezerwowanej pamięci (kluczowe dla uniknięcia wycieków pamięci – *memory leaks*).
* **Wskaźniki typu `void*`**: Rozumienie rzutowania wskaźników na konkretne typy danych.

## Spis zadań

### Zadanie 1: Podstawy Malloc, Calloc i Realloc
Praktyczne porównanie trzech metod alokacji pamięci. Program tworzy tablicę dynamiczną, wyświetla jej zawartość (widoczna różnica między `malloc` a wyzerowanym `calloc`), a następnie zmienia jej rozmiar za pomocą `realloc`.

### Zadanie 2: Zarządzanie zasobami
Krótka demonstracja wielokrotnego zmieniania rozmiaru bloku pamięci oraz poprawnego kończenia pracy z pamięcią dynamiczną poprzez funkcję `free`.

### Zadanie 3: Tablice wielowymiarowe na stercie
Implementacja macierzy (tablicy 2D) na dwa sposoby:
1. **Tablica wskaźników**: Alokacja tablicy wskaźników, gdzie każdy wskazuje na osobny wiersz (wymaga zwalniania pamięci w pętli).
2. **Płaska tablica**: Alokacja jednego ciągłego bloku pamięci i mapowanie indeksów $i \cdot kolumny + j$.

### Zadanie 4: Dynamiczne łańcuchy znaków
Program wczytuje tekst do bufora tymczasowego, a następnie rezerwuje dokładnie tyle pamięci, ile potrzeba na jego przechowanie. Wykorzystuje `realloc`, aby dopasować rozmiar tablicy przy wczytywaniu kolejnego zdania.

## Kompilacja i uruchomienie
```bash
gcc lab13.c -o lab13
./lab13