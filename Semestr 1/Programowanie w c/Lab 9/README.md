# Podstawy Programowania w C - Laboratorium 9: Zaawansowane Funkcje i Mechanizm Referencji

Repozytorium zawiera rozwiązania zadań z dziewiątego laboratorium, koncentrujące się na wykorzystaniu wskaźników jako argumentów funkcji w celu modyfikacji zmiennych lokalnych oraz implementacji algorytmów sortowania.

## Kluczowe zagadnienia
* **Przekazywanie argumentów przez wskaźnik**: Modyfikacja wartości zmiennych zadeklarowanych wewnątrz `main` lub innych funkcji (zastąpienie zmiennych globalnych z poprzednich zajęć).
* **Zwracanie wielu wartości**: Wykorzystanie parametrów wskaźnikowych do "zwracania" przez funkcję więcej niż jednej wartości (np. suma, różnica i iloczyn jednocześnie).
* **Algorytmy sortowania**: Implementacja sortowania bąbelkowego (Bubble Sort) przy użyciu tablic pomocniczych.
* **Specyfikator `const`**: Zabezpieczanie danych przed przypadkową modyfikacją w funkcjach służących jedynie do odczytu/drukowania.

## Opis zadań

### Zadanie 1: Sortowanie trzech liczb
Program pobiera od użytkownika trzy liczby całkowite, a następnie:
1. Przekazuje je do funkcji `sortuj` poprzez wskaźniki.
2. Wykorzystuje algorytm bąbelkowy do uporządkowania liczb.
3. Nadpisuje oryginalne wartości pod adresami pamięci, dzięki czemu wynik jest dostępny w funkcji wywołującej.

### Zadanie 2: Rozbudowany kalkulator (Wskaźniki)
Ewolucja zadań z poprzednich laboratoriów. Funkcje operacji matematycznych nie korzystają już ze zmiennych globalnych. Wszystkie wyniki są zapisywane bezpośrednio do zmiennych lokalnych funkcji `zadanie2` za pomocą dereferencji wskaźników.

## Struktura Modularna
Program został podzielony na logiczne bloki:
* **Wczytywanie**: `wczytajz1`, `wczytajz2`
* **Przetwarzanie**: `sortuj`, `operacje_proste`, `operacje_zaawansowane`
* **Prezentacja**: `drukuj`, `wyniki`

## Kompilacja i uruchomienie
```bash
gcc lab9.c -o lab9
./lab9