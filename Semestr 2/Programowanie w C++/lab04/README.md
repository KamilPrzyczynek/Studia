# Programowanie w C++ - Laboratorium 4

Czwarty zestaw zadań koncentruje się na **programowaniu obiektowym (OOP)** oraz zaawansowanym zarządzaniu strukturami danych. Programy demonstrują wykorzystanie klas, konstruktorów, hermetyzacji oraz interakcji między obiektami w celu modelowania rzeczywistych systemów.

## Zawartość laboratorium

Projekt obejmuje implementację paradygmatów obiektowych oraz zarządzanie dynamiczną pamięcią w kontekście struktur klasowych:

### 1. Modelowanie obiektowe i klasy (`kamil_Przyczynek_LC2_lab04_klasy.cpp`)
* **Hermetyzacja danych**: Wykorzystanie modyfikatorów dostępu (`private`, `public`) do zabezpieczenia pól klas i udostępniania interfejsu poprzez metody (gettery/settery).
* **Konstruktory i Destruktory**: Implementacja automatycznej inicjalizacji obiektów oraz bezpiecznego zwalniania zasobów przy usuwaniu instancji klasy.
* **Metody składowe**: Definiowanie logiki biznesowej wewnątrz klas, pozwalającej na manipulację stanem obiektu (np. obliczenia, zmiana parametrów).
* **Kompozycja**: Tworzenie złożonych systemów poprzez zawieranie obiektów jednych klas wewnątrz innych.

### 2. Zaawansowane zarządzanie tablicami obiektów (`kamil_Przyczynek_LC2_lab04_struktury.cpp`)
* **Dynamiczne tablice obiektów**: Alokacja pamięci dla zbiorów danych przy użyciu operatora `new` oraz zarządzanie nimi przez wskaźniki.
* **Przeszukiwanie i sortowanie**: Implementacja algorytmów operujących na atrybutach obiektów przechowywanych w kolekcjach.
* **Relacje między danymi**: Przetwarzanie powiązań między różnymi strukturami (np. przypisywanie pracowników do działów lub produktów do kategorii).

## Technologie i biblioteki

* **Język**: C++11 / C++14 / C++17
* **Standardowe wejście/wyjście**: `<iostream>`
* **Zarządzanie napisami**: `<string>`
* **Algorytmy i pomocnicze**: `<algorithm>`, `<vector>`

## Instrukcja kompilacji

Każdy z modułów można skompilować oddzielnie przy użyciu kompilatora `g++`:

```bash
# Kompilacja modułu klas
g++ kamil_Przyczynek_LC2_lab04_klasy.cpp -o lab04_klasy

# Kompilacja modułu struktur/obiektów
g++ kamil_Przyczynek_LC2_lab04_struktury.cpp -o lab04_struktury