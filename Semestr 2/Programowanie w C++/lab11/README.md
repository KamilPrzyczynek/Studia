# Programowanie w C++ - Laboratorium 11

Jedenasty zestaw zadań koncentruje się na praktycznym wykorzystaniu biblioteki **STL (Standard Template Library)**. Programy demonstrują sposób przechowywania obiektów własnych klas w strukturach danych typu **stos (stack)** oraz **kolejka (queue)**, a także realizują zaawansowaną logikę matematyczną wewnątrz obiektów.

## Zawartość laboratorium

Projekt obejmuje modelowanie figur geometrycznych oraz zarządzanie ich kolekcjami przy użyciu standardowych kontenerów C++:

### 1. Modelowanie geometryczne (Klasa `cTrojkat`)
* **Weryfikacja warunków**: Implementacja metody `czyWarunekTrojkata()`, sprawdzającej czy z podanych boków można zbudować trójkąt.
* **Automatyczne obliczenia**: Wykorzystanie wzoru Herona do obliczania pola powierzchni oraz wyliczanie obwodu figury bezpośrednio przy inicjalizacji (konstruktor).
* **Hermetyzacja**: Ukrycie wewnętrznych mechanizmów obliczeniowych (metody `private`) i udostępnienie wyników poprzez publiczny interfejs.

### 2. Kontenery STL i struktury danych
* **Stos (`std::stack`)**: Prezentacja mechanizmu LIFO (*Last-In, First-Out*). Dodawanie obiektów `cTrojkat` na stos i ich procesowanie aż do opróżnienia kontenera.
* **Kolejka (`std::queue`)**: Prezentacja mechanizmu FIFO (*First-In, First-Out*). Zarządzanie kolejnością przetwarzania figur.
* **Operacje na kontenerach**: Wykorzystanie metod `.push()`, `.pop()`, `.top()`, `.front()` oraz `.empty()` do manipulacji danymi.

### 3. Zaawansowane mechanizmy STL (Zadanie dodatkowe)
* **Priorytetyzacja**: Wykorzystanie kolejki priorytetowej (`priority_queue`) do automatycznego sortowania obiektów.
* **Funktory porównawcze**: Implementacja struktury `Compar`, która definiuje kryterium sortowania trójkątów na podstawie ich pola powierzchni (użycie przeciążonego `operator()`).

## Technologie i biblioteki

* **Język**: C++11 / C++14 / C++17
* **Kontenery STL**: `<stack>`, `<queue>`
* **Matematyka**: `<cmath>` (funkcja `sqrt`)
* **Standardowe wejście/wyjście**: `<iostream>`

## Instrukcja kompilacji

Program wykorzystujący kontenery STL można skompilować za pomocą kompilatora `g++`:

```bash
# Kompilacja modułu STL i geometrii
g++ kamil_Przyczynek_LC2_lab11.cpp -o lab11_stl

# Uruchomienie programu
./lab11_stl