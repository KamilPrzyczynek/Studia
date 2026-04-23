# Podstawy Programowania w C - Laboratorium 14: Operacje na Plikach

Repozytorium zawiera rozwiązania zadań z ostatniego laboratorium, skupiającego się na trwałym przechowywaniu danych poprzez odczyt i zapis do plików zewnętrznych.

## Poruszane zagadnienia
* **Struktura `FILE`**: Wykorzystanie wskaźników do plików w celu nawiązania połączenia ze strumieniem danych.
* **Tryby otwarcia pliku**:
    * `"w"` (write) – tworzenie nowego pliku lub nadpisywanie istniejącego.
    * `"r"` (read) – otwieranie pliku wyłącznie do odczytu.
* **Funkcje formatowane**: Użycie `fprintf` do zapisu danych w sposób czytelny dla człowieka (podobnie do `printf`).
* **Funkcje binarne**: Wykorzystanie `fread` do szybkiego odczytu bloków danych (np. całych tablic) bezpośrednio z pliku.
* **Zarządzanie zasobami**: Obsługa błędów otwarcia pliku (`NULL`) oraz obowiązkowe zamykanie strumieni za pomocą `fclose`.

## Spis zadań

### Zadanie 1: Zapis sformatowany do pliku tekstowego
Program zbiera od użytkownika zestaw danych o różnych typach (`int`, `float`, `char`, `string`), a następnie zapisuje je do pliku `wynik.txt`. Zadanie demonstruje, jak przechowywać dane strukturalne w plikach płaskich.

### Zadanie 2: Odczyt binarny
Demonstracja niskopoziomowego odczytu danych z pliku `odczyt.txt` przy użyciu funkcji `fread`. Program próbuje wczytać 10 liczb całkowitych bezpośrednio do tablicy, co jest znacznie wydajniejsze niż odczyt formatowany przy dużych zbiorach danych.

## Kompilacja i uruchomienie
```bash
gcc lab14.c -o lab14
./lab14