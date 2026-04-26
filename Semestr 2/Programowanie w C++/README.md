# Programowanie w C++ - Podsumowanie Kursu (Semestr 2)

Repozytorium stanowi kompleksowy zapis postępów w nauce języka C++, obejmujący przejście od podstawowych operacji wejścia/wyjścia po zaawansowane mechanizmy programowania obiektowego, zarządzanie pamięcią oraz pracę z systemem plików.

## Przegląd tematyczny laboratoriów

### 1. Fundamenty, Tablice i Struktury (Lab 1)
* **Podstawy składni**: Obsługa strumieni `cin`/`cout`, formatowanie wyjścia (`cout.width`) oraz manipulacja ciągami znaków `std::string`.
* **Algorytmy macierzowe**: Implementacja algorytmów wypełniania tablic dwuwymiarowych (np. generowanie wzorów na podstawie dystansu od krawędzi).
* **Struktury danych**: Wykorzystanie typu `struct` do grupowania danych oraz operacje na wskaźnikach struktur.

### 2. Zarządzanie pamięcią i Kontenery STL (Lab 2)
* **Referencje i Wskaźniki**: Wykorzystanie przekazywania argumentów przez referencję (`&`) w celu optymalizacji wydajności i modyfikacji danych.
* **Dynamiczna alokacja**: Praca z operatorami `new` i `delete[]` przy tworzeniu tablic o rozmiarze ustalanym w czasie wykonywania programu.
* **Kontener std::vector**: Wprowadzenie do nowoczesnych struktur danych z biblioteki STL, wykorzystanie metod `push_back`, `erase` oraz algorytmu `minmax_element`.

### 3. Trwałość danych - Przetwarzanie plików (Lab 3-4)
* **Pliki tekstowe**: Zapis i odczyt sformatowanych danych (np. raportów matematycznych) w formacie `.txt`.
* **Serializacja binarna**: Niskopoziomowy zapis surowych bloków pamięci do plików `.bin` przy użyciu metod `.write()` i `.read()`.
* **Zarządzanie nagłówkami**: Implementacja mechanizmu zapisywania rozmiaru struktur dynamicznych przed samymi danymi w celu ich poprawnej rekonstrukcji.

### 4. Programowanie Obiektowe - OOP (Lab 5)
* **Hermetyzacja**: Organizacja kodu w klasy z wykorzystaniem sekcji dostępu `private`, `protected` i `public`.
* **Mechanizm przyjaźni**: Implementacja funkcji i klas zaprzyjaźnionych (`friend`) w celu kontrolowanego dostępu do prywatnych składowych obiektu.
* **Modelowanie zachowań**: Tworzenie metod składowych realizujących logikę biznesową bezpośrednio na atrybutach klas.

## Kluczowe technologie i biblioteki
* **Język**: C++11 / C++14.
* **Biblioteka Standardowa (STL)**: `<iostream>`, `<vector>`, `<string>`, `<fstream>`, `<algorithm>`, `<cmath>`.
* **Narzędzia**: Kompilator GCC (g++).

## Słownik pojęć technicznych
| Pojęcie | Opis |
| :--- | :--- |
| **Serializacja** | Proces zamiany obiektów z pamięci RAM na format binarny lub tekstowy możliwy do zapisu. |
| **Referencja** | Bezpieczny alias do istniejącej zmiennej, zapobiegający niepotrzebnemu kopiowaniu danych. |
| **Przyjaźń (Friend)** | Wyjątek od hermetyzacji, pozwalający wybranej funkcji na dostęp do prywatnych pól klasy. |
| **Dynamiczna alokacja** | Zarządzanie pamięcią na stercie (heap), wymagające ręcznego zwalniania pamięci. |

---
*Kamil Przyczynek - Archiwum Studiów*