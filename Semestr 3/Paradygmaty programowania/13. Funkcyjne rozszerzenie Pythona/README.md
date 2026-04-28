# Paradygmaty Programowania – Laboratorium 13: Funkcyjne Rozszerzenie Pythona

Repozytorium zawiera implementację zaawansowanej klasy `Haskell`, która wprowadza do Pythona natywne wsparcie dla automatycznego curringu (rozwijania funkcji) oraz operatora składania funkcji. Celem laboratorium było zbliżenie składni Pythona do paradygmatu czysto funkcyjnego.

## Przegląd Zagadnień

Głównym osiągnięciem tego etapu jest stworzenie wrappera, który zmienia sposób interakcji z funkcjami, pozwalając na ich elastyczne łączenie i częściową aplikację.

### 1. Klasa `Haskell` – Serce Rozszerzenia
Klasa ta redefiniuje dwa kluczowe operatory:
* **`__call__` (Automatyczny Currying)**: Funkcja opakowana w `Haskell` nie wymaga podania wszystkich argumentów od razu. Jeśli podamy ich zbyt mało, funkcja nie wykona się, lecz zwróci nową instancję klasy `Haskell` z częściowo zaaplikowanymi danymi.
* **`__pow__` (Składanie Funkcji)**: Wykorzystanie operatora potęgowania `**` do reprezentacji matematycznego składania funkcji $(f \circ g)(x)$. Dzięki temu zapis `(f ** g)(x)` odpowiada wywołaniu `f(g(x))`.

### 2. Zaawansowane Operacje Funkcyjne
* **Funkcja `flip`**: Pozwala na zamianę kolejności argumentów w funkcjach dwuargumentowych. Jest to szczególnie przydatne przy funkcjach takich jak dzielenie, gdzie chcemy częściowo zaaplikować dzielnik zamiast dzielnej.
* **Składanie Potokowe**: Przykłady w `Normalizacjawektora2.py` pokazują, jak za pomocą operatora `**` budować złożone rurociągi obliczeniowe, np. obliczanie długości wektora jako złożenie pierwiastkowania, sumowania i mapowania kwadratów.

### 3. Dekoratory i Przeciążanie
Skrypt `skladaniefunkcji.py` pokazuje wykorzystanie klasy `Haskell` jako dekoratora `@Haskell`, co pozwala na natychmiastowe nadanie standardowym funkcjom Pythona cech funkcyjnych.

## Opis Programów

| Plik | Opis Funkcjonalności | Kluczowe Techniki |
| :--- | :--- | :--- |
| `czescaplikacjaklasahaskell.py` | Implementacja klasy bazowej i tworzenie funkcji potęgujących. | `__call__`, currying. |
| `skladaniefunkcji.py` | Demonstracja składania prostych operacji (`+1`, `/2`) oraz użycie `@Haskell`. | `__pow__`, `flip`. |
| `dzielipodziel.py` | Zastosowanie składania funkcji w połączeniu z mapowaniem na listach. | `map_`, `truediv_`. |
| `Normalizacjawektora2.py` | Pełny proces normalizacji wektora z użyciem złożonych operatorów. | Pipelines, `sum_`, `mul_`. |

## Przykłady Składni

### Automatyczny Currying
```python
power = Haskell(lambda n, x: x ** n)
sq = power(2)  # Zwraca nową funkcję czekającą na x
print(sq(5))   # Wynik: 25