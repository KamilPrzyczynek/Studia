# Programowanie w C++ - Laboratorium 12

Dwunasty zestaw zadań poświęcony jest zaawansowanym kontenerom biblioteki **STL (Standard Template Library)**. Programy demonstrują różnice między kontenerami sekwencyjnymi a asocjacyjnymi oraz uczą, jak zarządzać kolekcjami obiektów własnych klas przy użyciu iteratorów i komparatorów.

## Zawartość laboratorium

Projekt koncentruje się na efektywnym wykorzystaniu struktur danych do przechowywania i manipulowania obiektami klasy `Zadania`:

### 1. Kontenery sekwencyjne (`std::array`, `std::list`)
* **`std::array`**: Wykorzystanie statycznej tablicy o stałym rozmiarze, która łączy wydajność surowych tablic C z bezpieczeństwem i interfejsem STL.
* **`std::list`**: Implementacja listy dwukierunkowej, demonstrująca dynamiczne dodawanie elementów (`push_back`) oraz sekwencyjny dostęp do danych.
* **Iteracja**: Zastosowanie nowoczesnej pętli `for (const auto& obj : kontener)` do czytelnego przeglądania zawartości kolekcji.

### 2. Kontenery asocjacyjne i sortowanie (`std::set`)
* **`std::set`**: Wykorzystanie zbioru do przechowywania unikalnych elementów. W programie zademonstrowano, jak `std::set` automatycznie dba o porządek przechowywanych obiektów.
* **Własny Komparator**: Implementacja struktury `Komparator` z przeciążonym `operator()`, która definiuje niestandardowe kryterium sortowania obiektów na podstawie wyliczonej zmiennej średniej (`zmienno`).
* **Relacje zaprzyjaźnione**: Użycie deklaracji `friend struct Komparator` wewnątrz klasy, aby umożliwić zewnętrznej strukturze dostęp do prywatnych pól niezbędnych do sortowania.

### 3. Logika klasy `Zadania`
* **Automatyczne obliczanie stanu**: Konstruktor klasy automatycznie wylicza średnią z trzech przekazanych parametrów całkowitych, przypisując wynik do pola zmiennoprzecinkowego.
* **Konstruktory**: Implementacja konstruktora parametrycznego oraz domyślnego dla zapewnienia kompatybilności z różnymi kontenerami.

## Technologie i biblioteki

* **Język**: C++11 / C++14 / C++17
* **Biblioteki STL**: `<array>`, `<list>`, `<set>`, `<string>`
* **Standardowe wejście/wyjście**: `<iostream>`

## Instrukcja kompilacji

Program można skompilować za pomocą kompilatora `g++`:

```bash
# Kompilacja modułu zaawansowanych kontenerów STL
g++ kamil_Przyczynek_LC2_lab12.cpp -o lab12_kontenery

# Uruchomienie programu
./lab12_kontenery