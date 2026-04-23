# Podstawy Programowania w C - Laboratorium 8: Wskaźniki i Adresowanie Pamięci

Repozytorium zawiera ćwiczenia z ósmego laboratorium, poświęconego mechanizmom bezpośredniego dostępu do pamięci za pomocą wskaźników.

## Tematyka zajęć
* **Deklaracja wskaźników**: Tworzenie zmiennych przechowujących adresy innych zmiennych (np. `int *ptr`).
* **Operator adresu (`&`)**: Pobieranie adresu komórki pamięci, w której znajduje się zmienna.
* **Dereferencja**: Dostęp do wartości przechowywanej pod konkretnym adresem.
* **Rozmiary typów danych**: Analiza zajętości pamięci przez zmienne różnych typów oraz przez same wskaźniki przy użyciu `sizeof()`.

## Spis zadań

### Zadanie 1: Interakcja ze wskaźnikami
Program demonstruje sposób wczytywania danych bezpośrednio do pamięci poprzez wskaźniki przekazywane do funkcji `scanf()`. Obsługuje różne typy danych:
* `char`, `short`, `int`, `long long`, `float`, `double`.

### Zadanie 2: Architektura pamięci i rozmiary
Analiza porównawcza zajętości pamięci. Program wypisuje w formie tabeli:
1. **Adres** zmiennej w pamięci RAM.
2. **Rozmiar zmiennej** (zależny od typu danych).
3. **Rozmiar wskaźnika** (stały dla danej architektury procesora, np. 4 bajty dla x86 lub 8 bajtów dla x64).

## Wymagania techniczne
* Kompilator wspierający standard C99 lub nowszy.
* Biblioteka `stdio.h`.

## Kompilacja