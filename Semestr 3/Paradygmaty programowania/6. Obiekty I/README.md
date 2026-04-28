# Paradygmaty Programowania – Laboratorium 06: Programowanie Obiektowe (OOP)

Repozytorium zawiera implementacje zadań z zakresu programowania obiektowego w języku Python. Główne zagadnienia obejmują tworzenie klas, zarządzanie stanem obiektu, przeciążanie operatorów (operator overloading) oraz implementację protokołu iteratora.

## Przegląd Zagadnień

Podczas laboratorium nacisk został położony na zrozumienie mechanizmów enkapsulacji, metod specjalnych oraz różnicy między metodami instancji, klasowymi i statycznymi.

### 1. Modelowanie Matematyczne (`ulamki.py`)
Klasa `Ulamki` demonstruje, jak stworzyć własny typ danych, który zachowuje się jak wbudowane typy numeryczne:
* **Przeciążanie Operatorów**: Implementacja metod takich jak `__add__`, `__sub__`, `__mul__` i `__truediv__` pozwala na wykonywanie operacji matematycznych na ułamkach za pomocą standardowych symboli `+`, `-`, `*`, `/`.
* **Enkapsulacja i Skracanie**: Prywatna metoda pomocnicza `_skroc` wykorzystuje algorytm NWD (Największy Wspólny Dzielnik), aby utrzymać ułamek w najprostszej postaci po każdej operacji.
* **Metody Statyczne i Klasowe**:
    * `@staticmethod get_counter()`: Zwraca liczbę utworzonych obiektów klasy (użycie pola prywatnego `__counter`).
    * `@classmethod from_decimal()`: Pozwala na alternatywny sposób tworzenia obiektu (tzw. factory method) na podstawie liczby dziesiętnej.

### 2. Protokół Iteratora (`iterator.py`)
Skrypt `iterator.py` zawiera implementację klasy `MyRange`, która odtwarza funkcjonalność generatora z poprzednich zajęć, ale w formie pełnej klasy iteratora:
* **`__iter__`**: Metoda inicjalizująca iterator (zwraca `self`).
* **`__next__`**: Metoda odpowiedzialna za zwracanie kolejnych wartości i rzucanie wyjątku `StopIteration` po osiągnięciu końca zakresu.
* **Obsługa Typów**: Iterator poprawnie obsługuje liczby całkowite oraz zmiennoprzecinkowe (`float`), a także ujemne kroki.

## Opis Programów

| Plik | Opis Funkcjonalności | Kluczowe Elementy |
| :--- | :--- | :--- |
| `ulamki.py` | Klasa do operacji na ułamkach zwykłych. | Przeciążanie operatorów, `@classmethod`, `@staticmethod`. |
| `iterator.py` | Własna implementacja `range` jako klasa-iterator. | Metody specjalne `__iter__` i `__next__`. |

## Przykłady Użycia

### Operacje na ułamkach
```python
u1 = Ulamki(1, 2)
u2 = Ulamki.from_decimal(0.75)  # Tworzy 3/4
wynik = u1 + u2
print(wynik)  # 5/4