# Programowanie w C++ - Laboratorium 2

Drugi zestaw zadań skupia się na zaawansowanych mechanizmach języka C++, takich jak zarządzanie pamięcią, wykorzystanie referencji w przekazywaniu argumentów do funkcji oraz praca z dynamicznymi strukturami danych z biblioteki STL.

## Zawartość laboratorium

Projekt składa się z dwóch głównych modułów implementacyjnych:

### 1. Mechanizmy referencji i dynamiczne tablice (`kamil_Przyczynek_LC2_Referencja.cpp`)
* **Przekazywanie przez referencję**: Wykorzystanie typu `int&` oraz `string&` do modyfikacji zmiennych lokalnych wewnątrz funkcji `ustaw`.
* **Dynamiczna alokacja pamięci**: Implementacja zadań z użyciem operatorów `new` oraz `delete[]` do tworzenia tablic o rozmiarze definiowanym przez użytkownika w czasie wykonywania programu.
* **Realokacja tablicy**: Logika zmiany rozmiaru tablicy dynamicznej z zachowaniem istniejących danych (zmniejszanie i powiększanie bufora).
* **Struktury i unikanie kopii**: Praca ze strukturą `Dane` przekazywaną przez referencję (`&d`) w celu optymalizacji wydajności i umożliwienia zapisu wyników obliczeń.

### 2. Kontener std::vector i algorytmy (`kamil_Przyczynek_LC2_vektor.cpp`)
* **Dynamiczne kontenery**: Wykorzystanie klasy `std::vector` jako nowoczesnej alternatywy dla tablic statycznych.
* **Metody wektora**: Praktyczne zastosowanie funkcji składowych:
    * `push_back()` / `insert()` – dodawanie elementów w określone miejsca.
    * `erase()` – usuwanie elementów na podstawie indeksu/iteratora.
    * `size()` – dynamiczne sprawdzanie liczby elementów.
* **Biblioteka <algorithm>**: Wykorzystanie funkcji `minmax_element` do jednoczesnego znalezienia najmniejszej i największej wartości w kontenerze.
* **Iteratory**: Praca z iteratorami (`v.begin()`) przy modyfikacji zawartości wektora.

## Technologie

* **Język**: C++11/C++14
* **Biblioteka Standardowa (STL)**: `iostream`, `vector`,