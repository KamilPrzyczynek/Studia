# Paradygmaty Programowania – Laboratorium 05: Podprogramy i Generatory

Repozytorium zawiera implementacje własnych wersji funkcji zakresu (`range`), demonstrujące zaawansowane mechanizmy definiowania funkcji w Pythonie, obsługę wyjątków oraz paradygmat leniwej ewaluacji (lazy evaluation).

## Przegląd Zagadnień

Głównym celem laboratorium było zrozumienie, jak działają podprogramy przyjmujące zmienną liczbę argumentów oraz czym różni się zwracanie pełnej listy danych od generowania wartości "na żądanie".

### 1. Przeciążanie Funkcji przez `*args`
W Pythonie nie istnieje klasyczne przeciążanie funkcji znane z C++. Zamiast tego zastosowano mechanizm `*args`, który pozwala jednej funkcji obsłużyć różne scenariusze wywołania:
* `my_range(stop)` – domyślny start od 0.
* `my_range(start, stop)` – zakres od-do.
* `my_range(start, stop, krok)` – zakres z określoną inkrementacją/dekrementacją.

### 2. Implementacja Listowa vs Generatorowa
W repozytorium znajdują się dwa podejścia do tego samego problemu:
* **`range.py` (Podejście Eager)**: Funkcja buduje całą listę wyników w pamięci i zwraca ją jako gotowy obiekt. Jest to wydajne dla małych zbiorów danych, ale kosztowne pamięciowo przy dużych zakresach.
* **`rangejakogenerator.py` (Podejście Lazy)**: Wykorzystanie słowa kluczowego `yield`. Funkcja staje się generatorem, który zwraca kolejną wartość dopiero w momencie iteracji. Pozwala to na przetwarzanie teoretycznie nieskończonych lub bardzo dużych sekwencji przy minimalnym zużyciu pamięci RAM.

### 3. Logika i Obsługa Błędów
Implementacje zawierają rygorystyczną kontrolę poprawności danych:
* Sprawdzanie liczby przekazanych argumentów (rzucanie `ValueError` przy błędnej ilości).
* Zabezpieczenie przed nieskończoną pętlą (krok równy 0 jest niedozwolony).
* Obsługa liczb zmiennoprzecinkowych (`float`), co jest rozszerzeniem w stosunku do wbudowanej funkcji `range()`.

## Opis Programów

| Plik | Opis Funkcjonalności | Kluczowe techniki |
| :--- | :--- | :--- |
| `range.py` | Funkcja `my_range` zwracająca listę (`list`). | `*args`, `while`, `list.append()` |
| `rangejakogenerator.py` | Funkcja `my_range` będąca generatorem. | `yield`, iteratory, `next()` |

## Przykład użycia

Obie wersje wspierają elastyczne wywołania, w tym obsługę kroków ujemnych oraz liczb rzeczywistych:

```python
# Wywołanie z krokiem ujemnym
for x in my_range(2.2, 0.1, -0.5):
    print(x)

# Wynik: 2.2, 1.7, 1.2, 0.7