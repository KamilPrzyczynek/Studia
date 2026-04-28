# Paradygmaty Programowania – Laboratorium 09: Funkcje Wyższego Rzędu

Repozytorium zawiera rozwiązania zadań z zakresu programowania funkcyjnego. Głównym celem laboratorium było opanowanie technik przetwarzania kolekcji danych przy użyciu funkcji takich jak `map`, `filter` oraz `all`/`any`, a także wykorzystanie anonimowych funkcji lambda.

## Przegląd Zagadnień

Programowanie funkcyjne w Pythonie pozwala na tworzenie zwięzłego i czytelnego kodu poprzez deklaratywne podejście do operacji na listach i innych strukturach iterowalnych.

### 1. Przetwarzanie Potokowe (`map` i `filter`)
Większość zadań opiera się na łączeniu dwóch kluczowych operacji:
* **`filter(funkcja, sekwencja)`**: Wybiera elementy spełniające określony warunek.
* **`map(funkcja, sekwencja)`**: Transformuje każdy element sekwencji według zadanej reguły.
* **Przykład (`szescianywartoscinieparzystych.py`)**: Wyodrębnienie liczb nieparzystych, a następnie podniesienie ich do trzeciej potęgi.

### 2. Wyrażenia Lambda i Funkcje Anonimowe
Zamiast definiować pełne funkcje słowem kluczowym `def`, w wielu miejscach zastosowano składnię `lambda`. Jest to szczególnie użyteczne w krótkich predykatach logicznych:
* **`liczbypierwsze.py`**: Sprawdzanie pierwszości liczby za pomocą `all(num % x != 0 for x in range(2, num))`.
* **`dodajdolistyzparzysta.py`**: Użycie `any(x % 2 == 0 for x in lst)` do detekcji obecności liczb parzystych w zagnieżdżonych listach.

### 3. Zagnieżdżone Funkcje i Domknięcia (`bezsamoglosek.py`)
Skrypt demonstruje modularność kodu poprzez definicję funkcji pomocniczych wewnątrz funkcji głównej. Pozwala to na "ukrycie" logiki czyszczenia tekstu (usuwanie samogłosek) i aplikowanie jej do całej listy napisów za pomocą `map`.

## Opis Programów

| Plik | Opis Funkcjonalności | Zastosowane Mechanizmy |
| :--- | :--- | :--- |
| `bezsamoglosek.py` | Usuwa samogłoski z listy napisów. | `map`, `filter`, `join`. |
| `dodajdolistyzparzysta.py` | Filtruje listy zawierające liczby parzyste i dodaje do nich zadaną wartość. | `lambda`, `any`, `filter`, `map`. |
| `liczbypierwsze.py` | Generuje listę liczb pierwszych z zadanego zakresu. | `all`, `filter`, `lambda`. |
| `szescianywartoscinieparzystych.py` | Oblicza sześciany tylko dla nieparzystych elementów listy. | `generator expressions`, `map`, `filter`. |

## Przykłady Użycia

### Filtrowanie i Transformacja
W skrypcie `dodajdolistyzparzysta.py` funkcja modyfikuje tylko te podlisty, które posiadają co najmniej jeden element parzysty:
```python
# Wejście: 10, [[1, 3], [2, 4]]
# Proces: [1, 3] usunięte (brak parzystych), [2, 4] -> [10, 2, 4]
# Wynik: [[10, 2, 4]]