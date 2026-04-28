# Paradygmaty Programowania – Laboratorium 12: Currying i Częściowa Aplikacja

Repozytorium zawiera implementacje zadań dotyczących zaawansowanych technik funkcyjnych w języku Python. Głównym celem laboratorium było zrozumienie mechanizmów wiązania argumentów funkcji oraz transformacji funkcji wieloargumentowych w ciągi funkcji jednoargumentowych.

## Przegląd Zagadnień

W tej sekcji laboratorium zgłębiono techniki, które pozwalają na większą modularność kodu i tworzenie specjalistycznych funkcji na bazie rozwiązań ogólnych.

### 1. Częściowa Aplikacja (`functools.partial`)
Mechanizm ten pozwala na "zamrożenie" części argumentów funkcji, tworząc nowy obiekt funkcyjny o mniejszej liczbie parametrów.
* **Przykład (`potega.py`)**: Wykorzystanie funkcji ogólnej `power(n, x)` do stworzenia dedykowanych funkcji `sq2` (kwadrat), `cube2` (sześcian) oraz `sqrt2` (pierwiastek) poprzez trwałe przypisanie wartości wykładnika.
* **Zastosowanie w matematyce (`normalizacjawektora.py`)**: Wykorzystanie `partial` wraz z operatorem mnożenia (`mul`) do znormalizowania wektora przez odwrotność jego długości.

### 2. Currying (Rozwijanie Funkcji)
Currying to proces transformacji funkcji przyjmującej wiele argumentów w serię funkcji, z których każda przyjmuje dokładnie jeden argument.
* **Implementacja ręczna**: Stworzenie dekoratorów/wrapperów `curry_l` (za pomocą lambd) oraz `curry_d` (za pomocą zagnieżdżonych definicji), które zmieniają sposób wywoływania standardowych operacji.
* **Przykład (`rozwijaniefunkcjicurrying.py`)**: Przekształcenie operatora dodawania w taki sposób, aby wywołanie `c_add(3)(5)` było możliwe i poprawne.

### 3. Kompozycja i Operatory logiczne
Zastosowanie technik funkcyjnych do budowania filtrów i transformacji:
* **Inkrementacja**: Stworzenie funkcji `inc(x)` jako specjalizacji dodawania `c_add(1)`.
* **Filtrowanie**: Wykorzystanie rozwiniętego operatora większości (`gt`) do stworzenia predykatu `c_less(3)`, który filtruje listy w poszukiwaniu elementów spełniających warunek logiczny.

## Opis Programów

| Plik | Opis Funkcjonalności | Kluczowe Techniki |
| :--- | :--- | :--- |
| `potega.py` | Tworzenie funkcji potęgujących na trzy różne sposoby. | `partial`, `lambda`, factory functions. |
| `normalizacjawektora.py` | Obliczanie długości wektora i jego normalizacja. | `partial`, `map`, `curry`, `operator.mul`. |
| `rozwijaniefunkcjicurrying.py` | Implementacja mechanizmów curringu dla operatorów. | `partial`, `lambda` nesting, `operator.add/gt`. |

## Przykłady Działania

### Normalizacja Wektora
Dla wektora $[1, 2, 3, 4, 5]$, program oblicza jego długość $L$, a następnie mapuje każdy element $x$ na $x \cdot \frac{1}{L}$ przy użyciu częściowej aplikacji operatora mnożenia.

### Specjalizacja Funkcji
```python
# Funkcja ogólna
def power(n, x): return x ** n

# Częściowa aplikacja (Power of 2)
sq2 = partial(power, 2)
print(sq2(25)) # 625