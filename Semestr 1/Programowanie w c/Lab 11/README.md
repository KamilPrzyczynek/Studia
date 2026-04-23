# Podstawy Programowania w C - Laboratorium 11: Operacje na Łańcuchach Znaków (Strings)

Repozytorium zawiera rozwiązania zadań z jedenastego laboratorium, koncentrujące się na przetwarzaniu tekstów, manipulacji wielkością liter oraz konwersji typów.

## Poruszane zagadnienia
* **Biblioteka `<string.h>`**: Wykorzystanie funkcji `strtok` do tokenizacji (dzielenia) tekstu oraz `strlen` do sprawdzania długości.
* **Biblioteka `<ctype.h>`**: Walidacja i transformacja znaków (`tolower`, `toupper`, `isalpha`, `isdigit`).
* **Przeszukiwanie tekstów**: Implementacja algorytmów zliczających wystąpienia znaków bez względu na wielkość liter.
* **Konwersja typów**: Ręczna implementacja mechanizmu `atoi` (zamiana ciągu znaków na liczbę całkowitą).

## Spis zadań

### Zadanie 1: Licznik wystąpień znaku
Funkcja `wyszukanielitery` przeszukuje tablicę znaków i zlicza, ile razy wystąpił wybrany przez użytkownika znak. Zastosowano `tolower()`, dzięki czemu wyszukiwanie jest niewrażliwe na wielkość liter (Case-insensitive).

### Zadanie 2: Tokenizacja tekstu
Wykorzystanie funkcji `strtok` do podziału zdania na poszczególne wyrazy. Program wypisuje każdy wyraz w nowej linii wraz z informacją o liczbie jego znaków.

### Zadanie 3: Transformacja wielkości liter
Program oferuje trzy tryby modyfikacji tekstu na podstawie wyboru użytkownika:
1. Zamiana wszystkich liter na duże.
2. Zamiana wszystkich liter na małe.
3. Odwrócenie wielkości liter (Toggle case).

### Zadanie 4: Własna funkcja konwersji (String to Int)
Implementacja algorytmu zamieniającego tekst (np. "-1234") na zmienną typu `int`. Program obsługuje liczby ujemne oraz zawiera mechanizm walidacji, który wykrywa znaki niebędące cyframi.

## Kompilacja i uruchomienie
```bash
gcc lab11.c -o lab11
./lab11