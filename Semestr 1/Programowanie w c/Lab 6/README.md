# Podstawy Programowania w C - Instrukcje Warunkowe

Repozytorium zawiera rozwiązania zadań laboratoryjnych dotyczących wykorzystania instrukcji warunkowych `if`, `else if` oraz operacji matematycznych w języku C.

## Spis zadań

1. **Podzielność**: Sprawdzanie czy liczba jest podzielna przez 3, 5, obie te liczby lub żadną z nich.
2. **Sortowanie trzech liczb**: Proste sortowanie rosnące trzech wprowadzonych liczb całkowitych.
3. **Dzielenie większej przez mniejszą**: Program pobiera dwie liczby i dzieli większą przez mniejszą (z obsługą błędu dzielenia przez 0).
4. **Klasyfikacja kolorów (wartości)**: Przypisywanie kolorów (czarny, niebieski, żółty itp.) na podstawie przedziałów liczbowych.
5. **Model kolorów RGB**: Prosta symulacja rozpoznawania barw na podstawie składowych R, G, B (0 lub 1).
6. **Porównywanie par**: Logika porównywania dwóch liczb z uwzględnieniem dodatkowych warunków (x > 50 lub y < 23).
7. **Równanie kwadratowe**: Obliczanie delty i miejsc zerowych funkcji kwadratowej ($ax^2 + bx + c = 0$).
8. **Moduł i operacje wektorowe**: Obliczanie pierwiastka sumy kwadratów (długość wektora) i warunkowe modyfikowanie wyniku.

## Wymagania
* Kompilator C (np. GCC, MSVC)
* Biblioteka standardowa `stdio.h`
* Biblioteka matematyczna `math.h`

## Uruchomienie
Aby skompilować wybrany fragment kodu (po odkomentowaniu go w `main.c`):

```bash
gcc main.c -o program -lm
./program