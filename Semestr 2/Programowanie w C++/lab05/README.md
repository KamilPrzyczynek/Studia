# Programowanie w C++ - Laboratorium 5

Piąty zestaw zadań koncentruje się na zaawansowanych relacjach między klasami oraz mechanizmie **przeciążania operatorów**. Programy demonstrują wykorzystanie funkcji i klas zaprzyjaźnionych do uzyskiwania dostępu do prywatnych składowych, a także implementację głębokiego kopiowania danych.

## Zawartość laboratorium

Projekt obejmuje dwa główne zagadnienia związane z architekturą obiektową:

### 1. Mechanizm Przyjaźni (`kamil_Przyczynek_LC2_przyjaznie.cpp`, `main.cpp`)
* **Funkcje zaprzyjaźnione**: Implementacja zewnętrznych funkcji (np. `Kolizja`), które posiadają uprawnienia do odczytu prywatnych współrzędnych i wymiarów obiektów klasy `cProstokat`.
* **Klasy zaprzyjaźnione**: Wykorzystanie deklaracji `friend` do umożliwienia interakcji między klasami `cPunkt` a `cProstokat`, co pozwala na precyzyjne sprawdzanie relacji geometrycznych.
* **Hermetyzacja a dostęp**: Praktyczne zastosowanie wyjątków od zasady hermetyzacji w celu optymalizacji wydajności i czytelności kodu.

### 2. Przeciążanie operatorów i Zarządzanie Pamięcią
* **Operator przypisania (`operator=`)**: Implementacja bezpiecznego kopiowania obiektów zawierających dynamicznie alokowaną pamięć (klasa `Dynamicznatablica`).
* **Głęboka kopia**: Mechanizm zwalniania starej pamięci i alokowania nowego bufora, co zapobiega wyciekom pamięci oraz błędom typu *double free*.
* **Konstruktory i Destruktory**: Zarządzanie cyklem życia obiektów posiadających wskaźniki (`int* arr`) jako pola składowe.

## Technologie i biblioteki

* **Język**: C++11 / C++14 / C++17
* **Standardowe wejście/wyjście**: `<iostream>`
* **Zarządzanie pamięcią**: Operatory `new` oraz `delete[]`

## Instrukcja kompilacji

Moduły można skompilować przy użyciu kompilatora `g++`:

```bash
# Kompilacja zadania z mechanizmem przyjaźni
g++ kamil_Przyczynek_LC2_przyjaznie.cpp -o przyjaznie

# Kompilacja głównego programu testowego
g++ main.cpp -o test_kolizji