# Programowanie w C++ - Laboratorium 10

Dziesiąty zestaw zadań poświęcony jest **szablonom (templates)** w języku C++. Programy demonstrują potęgę programowania generycznego, pozwalającego na tworzenie funkcji i klas działających na wielu typach danych bez konieczności powielania kodu.

## Zawartość laboratorium

Projekt obejmuje implementację szablonów funkcji oraz szablonów klas wraz z analizą typów parametrów:

### 1. Szablony funkcji i RTTI (`kamil_Przyczynek_LC2_lab10.cpp`)
* **Szablony z wieloma parametrami**: Implementacja funkcji `suma`, która przyjmuje trzy argumenty różnych typów (`T1`, `T2`, `T3`) i oblicza ich średnią arytmetyczną.
* **Identyfikacja typów (`typeid`)**: Wykorzystanie operatora `typeid` do pobierania nazw typów przekazanych do funkcji oraz sprawdzania ich zgodności.
* **Logika porównawcza typów**: Funkcja `suma2`, która sprawdza, czy dwa przekazane parametry są tego samego typu, co pozwala na warunkowe sterowanie logiką programu w zależności od danych wejściowych.

### 2. Szablony klas (Generyczna klasa `cpunkt`)
* **Uogólnione struktury danych**: Klasa `cpunkt<T>` umożliwiająca przechowywanie tablicy 10 elementów dowolnego typu numerycznego (`int`, `float`, `double`).
* **Algorytmy generyczne**: Implementacja metody `oblicz()`, która w sposób uniwersalny znajduje wartość minimalną (`min`) oraz maksymalną (`max`) wewnątrz kolekcji, niezależnie od typu danych.
* **Przeciążanie konstruktorów w szablonach**: Obsługa inicjalizacji klasy zarówno poprzez listę argumentów, jak i poprzez przekazanie gotowej tablicy.

## Technologie i biblioteki

* **Język**: C++11 / C++14 / C++17
* **Biblioteka RTTI**: `<type_traits>` oraz operator `typeid`
* **Standardowe wejście/wyjście**: `<iostream>`
* **Zarządzanie napisami**: `<string>`

## Instrukcja kompilacji

Program demonstrujący działanie szablonów można skompilować za pomocą kompilatora `g++`:

```bash
# Kompilacja modułu szablonów
g++ kamil_Przyczynek_LC2_lab10.cpp -o lab10_szablony

# Uruchomienie programu
./lab10_szablony