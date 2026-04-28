# Paradygmaty Programowania – Laboratorium 10: Redukcja Danych

Repozytorium zawiera implementacje zadań skupiających się na wykorzystaniu funkcji `reduce` z modułu `functools`. Laboratorium miało na celu opanowanie techniki agregacji danych, transformacji struktur oraz implementacji złożonej logiki biznesowej bez użycia jawnych pętli.

## Przegląd Zagadnień

Funkcja `reduce(funkcja, sekwencja[, inicjalizator])` stosuje operację binarną do elementów sekwencji w sposób skumulowany, sprowadzając ją do pojedynczej wartości lub nowej, przetworzonej struktury.

### 1. Agregacja i Statystyka (`reduce.py`)
W skrypcie zaprezentowano klasyczne zastosowania redukcji:
* **Średnia Arytmetyczna**: Wykorzystanie `reduce` do zsumowania elementów, a następnie podzielenie przez długość listy.
* **Znajdowanie Ekstremów**: Implementacja wyszukiwania największego elementu poprzez porównywanie par wartości: `lambda x, y: x if x > y else y`.
* **Metryki Matematyczne**: Obliczanie odległości Manhattan pomiędzy dwoma wektorami przy użyciu `zip` i `reduce` z inicjalizatorem równym 0.

### 2. Transformacje Struktur i Akumulatory
Redukcja została wykorzystana nie tylko do wyliczania liczb, ale również do operacji na listach:
* **Spłaszczanie list**: Łączenie listy list w jedną strukturę (`reduce(lambda x, y: x + y, lista_list, [])`).
* **Odwracanie Kolejności**: Budowanie nowej listy poprzez doklejanie elementów na początek akumulatora: `lambda acc, el: [el] + acc`.

### 3. Logika Warunkowa w Redukcji (`usuwaniepowtorzen.py`)
Skrypt `usuwaniepowtorzen.py` demonstruje zaawansowane wykorzystanie akumulatora do filtrowania danych "w locie":
* **Algorytm**: Funkcja sprawdza, czy akumulator jest pusty lub czy jego ostatni element jest inny niż aktualnie przetwarzany.
* **Cel**: Usunięcie sąsiadujących duplikatów z listy (np. `[1, 1, 2, 1]` -> `[1, 2, 1]`).

## Opis Programów

| Plik | Opis Funkcjonalności | Kluczowe Operacje |
| :--- | :--- | :--- |
| `reduce.py` | Zbiór funkcji agregujących (średnia, max, spłaszczanie, Manhattan). | `reduce`, `lambda`, `zip`. |
| `usuwaniepowtorzen.py` | Inteligentne usuwanie powtarzających się obok siebie wartości. | `reduce` z akumulatorem listowym. |

## Przykłady Użycia

### Odległość Manhattan
Obliczanie sumy bezwzględnych różnic współrzędnych:
```python
vec1 = (1, 2, 3)
vec2 = (5, 6, 7)
# Wynik: |1-5| + |2-6| + |3-7| = 12