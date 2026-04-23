# Podstawy Programowania w C - Laboratorium 12: Struktury i Operacje Bitowe

Repozytorium zawiera zaawansowane zagadnienia z języka C, podzielone na dwie główne sekcje: modelowanie danych za pomocą struktur oraz niskopoziomową manipulację bitami.

## Część A: Struktury i Typy Definiowane (`struct` & `typedef`)

Ta sekcja skupia się na tworzeniu własnych złożonych typów danych.

### Kluczowe zagadnienia:
* **Definiowanie struktur**: Łączenie różnych typów danych w jedną jednostkę (np. współrzędne, dane osobowe).
* **Słowo kluczowe `typedef`**: Tworzenie aliasów dla istniejących typów, co poprawia czytelność kodu (np. `temperatura` jako tablica 365 elementów).
* **Memory Padding**: Eksperymentalne sprawdzenie, jak kolejność pól w strukturze wpływa na jej rozmiar w pamięci (`sizeof`).
* **Wskaźniki do struktur**: Wykorzystanie operatora strzałki `->` oraz wyłuskania `(*p).a` do modyfikacji danych w funkcjach.

### Przykłady implementacji:
1. **Kalkulator Prostokąta**: Funkcje obliczające pole, obwód i przekątną przy użyciu biblioteki `math.h`.
2. **Rejestry danych**: Przechowywanie dystansu, temperatury rocznej i danych osobowych.

---

## Część B: Operacje Bitowe

Sekcja poświęcona bezpośredniej manipulacji binarną reprezentacją liczb.

### Kluczowe operacje:
* **Przesunięcia bitowe**: W lewo `<<` (mnożenie przez potęgi 2) oraz w prawo `>>` (dzielenie całkowite).
* **Maska bitowa**: Wycinanie określonych bitów z liczby za pomocą operatora `&` (AND).
* **Logika bitowa**: Wykorzystanie alternatywy wykluczającej `^` (XOR) oraz negacji.
* **Symulacje logiczne**: Implementacja bramek logicznych (AND, OR, XOR) przy użyciu alternatywnych operatorów.

### Zadania algorytmiczne:
* **Gra w zgadywanie bitów**: Interaktywny program, który odejmuje bity od wylosowanej liczby, dopóki nie osiągnie ona zera.
* **Badanie podzielności**: Wykorzystanie operatora XOR do sprawdzania specyficznych warunków logicznych podzielności przez 3 i 5.

## Instrukcja kompilacji
Programy wymagają linkowania biblioteki matematycznej:

```bash
gcc lab12.c -o lab12 -lm
./lab12