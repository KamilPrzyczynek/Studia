# Laboratorium 2 - Arytmetyka Komputerowa i Błędy Obliczeniowe

Katalog zawiera skrypty MATLAB realizujące zadania z zakresu analizy błędów numerycznych, precyzji zmiennoprzecinkowej oraz stabilności algorytmów.

## Zakres materiału

* **Anulowanie (Cancellation)**: Badanie utraty cyfr znaczących przy odejmowaniu bliskich sobie liczb (Zadanie 2, 6, 8).
* **Precyzja maszynowa**: Wyznaczanie największej liczby naturalnej `m`, dla której $1 + 2^{-m} > 1$ oraz porównanie z `eps` (Zadanie 4).
* **Stabilność algorytmów**: 
    * Porównanie obliczania pochodnej dla malejącego kroku `h` (Zadanie 3).
    * Obliczanie wartości wielomianu w postaci rozwiniętej, schematem Hornera oraz w postaci potęgowej (Zadanie 7).
* **Przekroczenia zakresu**: Analiza `realmin` oraz `realmax` dla typu double (Zadanie 5).

## Opis kluczowych zjawisk

1. **Zadanie 2 & 8**: Pokazują, że kolejność wykonywania działań na bardzo dużych i małych liczbach ma znaczenie. Wynik `a + 0.1 - a` może dać `0` zamiast `0.1` z powodu ograniczonej mantysy.
2. **Zadanie 6**: Standardowy wzór na $(1-\cos(x))/x^2$ staje się skrajnie niestabilny dla bardzo małych $x$ (wyniki oscylują lub dają 0). Wzór oparty na funkcji `sin(x)/x` jest stabilny.
3. **Zadanie 7**: Ilustruje błąd zaokrągleń na wykresie. Postać $(x-1)^8$ jest gładka, podczas gdy postać rozwinięta generuje "szum numeryczny" w okolicach pierwiastka.

## Uruchomienie
Wszystkie zadania znajdują się w jednym skrypcie. Wykresy generowane są w oddzielnych oknach.