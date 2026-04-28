# Paradygmaty Programowania – Podsumowanie Kursu

Repozytorium stanowi kompleksowy przegląd ewolucji podejść do tworzenia oprogramowania: od niskopoziomowych skoków w języku C, przez programowanie obiektowe (OOP), aż po zaawansowane techniki funkcyjne inspirowane językiem Haskell.

##  Przegląd Paradygmatów

### 1. Od Spaghetti Code do Struktury (Lab 1-4)
Początek kursu skupiał się na przejściu z programowania niestrukturalnego (instrukcje `goto` w C) do paradygmatu strukturalnego i proceduralnego.
* **Kluczowe zagadnienia**: Instrukcje sterujące, pętle, modularność, wskaźniki i efekty uboczne.
* **Python Basics**: Wykorzystanie kolekcji (`list`, `dict`, `tuple`) oraz mechanizmu *list comprehension* do wydajnego przetwarzania danych.

### 2. Programowanie Obiektowe – OOP (Lab 5-8)
Druga sekcja wprowadziła zasady czystego programowania obiektowego w Pythonie.
* **Enkapsulacja i Właściwości**: Użycie dekoratorów `@property` oraz prywatnych pól (`__pole`).
* **Dziedziczenie i Polimorfizm**: Tworzenie hierarchii figur geometrycznych i brył.
* **Abstrakcja**: Klasy bazowe z wykorzystaniem modułu `abc` (`Abstract Base Class`).
* **Iteratory i Generatory**: Implementacja własnej klasy `MyRange` (protokół iteratora) oraz słowa kluczowego `yield`.

### 3. Paradygmat Funkcyjny (Lab 9-14)
Najbardziej zaawansowana część kursu, skupiająca się na deklaratywnym podejściu do problemów.
* **Rekurencja**: Implementacja sumowania i wariancji w sposób rekurencyjny (w tym rekurencja ogonowa).
* **High-Order Functions**: Praktyczne zastosowanie `map`, `filter` oraz `reduce`.
* **Currying i Partial Application**: Rozwijanie funkcji wieloargumentowych i częściowe wiązanie parametrów za pomocą `functools.partial`.
* **Lifting**: Bezpieczna obsługa wartości opcjonalnych (`None`) w potokach danych.
* **Functional Extension**: Budowa własnej klasy `Haskell`, wprowadzającej operator składania funkcji (`**`) oraz automatyczny currying do Pythona.

---

##  Kluczowe Komponenty Systemu

### Klasa `Haskell` (Functional DSL)
Sercem zaawansowanych zadań była autorska klasa `Haskell`, która pozwala na zapisywanie logiki w formie matematycznych potoków:
```python
# Przykład: Potok kodujący Szyfru Cezara
pipeline = kod_ascii ** mod_(127) ** add_(shift) ** ascii_kod