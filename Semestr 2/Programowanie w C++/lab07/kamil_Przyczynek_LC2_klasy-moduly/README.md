# Programowanie w C++ - Laboratorium 7

Siódmy zestaw zadań koncentruje się na **modularyzacji kodu** oraz separacji interfejsu od implementacji. Projekt demonstruje, jak zarządzać większą strukturą programu poprzez podział na pliki nagłówkowe (`.h`) i źródłowe (`.cpp`), a także realizuje logikę zarządzania kolekcją obiektów.

## Zawartość laboratorium

Projekt realizuje system zarządzania punktami geometrycznymi, podzielony na logiczne moduły:

### 1. Moduł Punkt (`punkt.h`, `punkt.cpp`)
* **Klasa `Punkt`**: Podstawowa jednostka przechowująca współrzędne `x` oraz `y`.
* **Metody dostępu**: Wykorzystanie getterów (`GetX`, `GetY`) oraz setterów (`SetX`, `SetY`) do zachowania hermetyzacji danych.
* **Inicjalizacja**: Zastosowanie konstruktora z wartościami domyślnymi.

### 2. Zarządzanie kolekcją (`kolekcja_punktow.h`, `kolekcja_punktow.cpp`)
* **Klasa `KolekcjaPunktow`**: Agregacja obiektów klasy `Punkt` wewnątrz statycznej tablicy o zdefiniowanym rozmiarze (`MAX_PUNKTOW`).
* **Interakcja z użytkownikiem**: Metoda `ustawPunktyRecznie()` pozwalająca na wprowadzanie danych z klawiatury.
* **Automatyzacja**: Metoda `ustawPunktyLosowo()` wykorzystująca funkcję `rand()` do generowania współrzędnych.
* **Obliczenia geometryczne**: Implementacja metody `obliczOdleglosci()`, która wylicza dystans między sąsiednimi punktami w kolekcji przy użyciu twierdzenia Pitagorasa.

### 3. Program główny (`main.cpp`)
* **Integracja modułów**: Koordynacja działań pomiędzy klasami, demonstracja cyklu życia kolekcji (wprowadzanie, obliczenia, wyświetlanie wyników).

## Technologie i biblioteki

* **Język**: C++11 / C++14 / C++17
* **Biblioteki standardowe**: `<iostream>`, `<cmath>` (do funkcji `sqrt`), `<cstdlib>` (do `rand`)
* **Struktura projektu**: Podział na pliki `.h` (deklaracje) oraz `.cpp` (definicje).

## Instrukcja kompilacji

Z uwagi na podział na wiele plików, należy skompilować wszystkie moduły jednocześnie i połączyć je w jeden plik wykonywalny:

```bash
# Kompilacja wszystkich plików źródłowych
g++ main.cpp punkt.cpp kolekcja_punktow.cpp -o lab07_kolekcja

# Uruchomienie programu
./lab07_kolekcja