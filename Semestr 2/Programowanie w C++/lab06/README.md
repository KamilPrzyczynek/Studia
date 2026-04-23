# Programowanie w C++ - Laboratorium 6

Szósty zestaw zadań koncentruje się na mechanizmach **polimorfizmu statycznego**, a w szczególności na przeciążaniu funkcji (overloading), stosowaniu argumentów domyślnych oraz zaawansowanym przeciążaniu operatorów dla obiektów matematycznych.

## Zawartość laboratorium

Projekt demonstruje elastyczność języka C++ w definiowaniu interfejsów funkcji oraz operacji na całych strukturach danych:

### 1. Przeciążanie funkcji i argumenty domyślne (`kamil_Przyczynek_LC2_przeciążanie_funkcji.cpp`)
* **Argumenty domyślne**: Implementacja funkcji `F`, która pozwala na wywołanie z różną liczbą parametrów dzięki predefiniowanym wartościom (int, float, bool, string).
* **Przeciążanie sygnatur**: Wykorzystanie tej samej nazwy funkcji `Srednia` dla różnych typów danych (`int`, `float`, `char`), co pozwala na logiczne ujednolicenie operacji matematycznych.
* **Priorytety wywołań**: Praktyczne sprawdzenie, jak kompilator dopasowuje typy argumentów do odpowiedniej definicji funkcji.

### 2. Algebra macierzy i operatory (klasa `Macierz`)
* **Przeciążanie operatora dodawania (`operator+`)**: Implementacja intuicyjnego dodawania dwóch obiektów klasy `Macierz` (suma elementów na odpowiadających sobie pozycjach).
* **Przeciążanie operatora mnożenia (`operator*`)**: Realizacja algorytmu mnożenia macierzy (wiersz przez kolumnę) wewnątrz przeciążonego operatora.
* **Inicjalizacja i wizualizacja**: Zastosowanie konstruktorów do zerowania macierzy oraz metod pomocniczych (`Drukuj`) do prezentacji wyników w konsoli.

## Technologie i biblioteki

* **Język**: C++11 / C++14 / C++17
* **Standardowe wejście/wyjście**: `<iostream>`
* **Zarządzanie napisami**: `<string>`

## Instrukcja kompilacji

Programy można skompilować przy użyciu kompilatora `g++`:

```bash
# Kompilacja modułu przeciążania funkcji i macierzy
g++ kamil_Przyczynek_LC2_przeciążanie_funkcji.cpp -o lab06_przeciazanie

# Kompilacja głównego pliku programu (jeśli zawiera oddzielne testy)
g++ main.cpp -o lab06_main