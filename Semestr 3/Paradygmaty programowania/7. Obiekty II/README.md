# Paradygmaty Programowania – Laboratorium 07: Programowanie Obiektowe II

Repozytorium zawiera zaawansowane przykłady zastosowania paradygmatu obiektowego w Pythonie. Skoncentrowano się na modelowaniu hierarchii figur geometrycznych oraz brył 3D z wykorzystaniem klas abstrakcyjnych i wielodziedziczenia (Mixins).

## Przegląd Zagadnień

Laboratorium realizuje zaawansowane wzorce projektowe, które pozwalają na tworzenie elastycznego i reużywalnego kodu.

### 1. Klasy Abstrakcyjne i Polimorfizm (`figury.py`)
Głównym elementem jest klasa bazowa `Figura`, która definiuje wspólny interfejs dla wszystkich kształtów:
* **`ABC` (Abstract Base Class)**: Klasa `Figura` dziedziczy po `ABC`, co uniemożliwia stworzenie jej instancji i wymusza na klasach pochodnych implementację metody `pole()`.
* **Dekorator `@abstractmethod`**: Gwarantuje, że każda figura (Koło, Trójkąt, Prostokąt) będzie posiadać własną logikę obliczania pola powierzchni.
* **Właściwości (`@property`)**: Użycie dekoratora `property` do zarządzania dostępem do prywatnych atrybutów, takich jak nazwa figury.

### 2. Dziedziczenie Wielopoziomowe
W kodzie zaprezentowano, jak klasy specjalistyczne mogą dziedziczyć po bardziej ogólnych:
* `Kwadrat` dziedziczy po `Prostokąt`.
* `TrojkatRownoboczny` dziedziczy po `Trojkat`.
Dzięki temu unikamy duplikacji kodu, redefiniując jedynie niezbędne parametry w konstruktorze `__init__` za pomocą `super()`.

### 3. Mechanizm Mixin i Modelowanie Brył (`bryly.py`)
Skrypt `bryly.py` rozszerza model o obiekty trójwymiarowe, wprowadzając nowatorskie podejście do obliczania pola powierzchni całkowitej:
* **`BrylyMixin`**: Klasa pomocnicza, która nie jest samodzielną figurą, ale dostarcza funkcjonalność obliczania sumy pól ścian. 
* **Kompozycja**: Bryły (Czworościan, Sześcian, Piramida) przechowują listę obiektów klas `Figura` (ścian), co pozwala na dynamiczne obliczanie pola powierzchni bryły poprzez iterację po jej składowych.
* **Wielodziedziczenie**: Klasy brył dziedziczą jednocześnie po `BrylyMixin` (logika obliczeń) oraz `Figura` (tożsamość obiektu).

## Opis Programów

| Plik | Opis Funkcjonalności | Kluczowe Techniki |
| :--- | :--- | :--- |
| `figury.py` | Hierarchia dwuwymiarowych figur geometrycznych. | `ABC`, `@abstractmethod`, `super()`. |
| `bryly.py` | Modelowanie brył 3D jako zbioru figur płaskich. | `Mixins`, Kompozycja, Wielodziedziczenie. |

## Przykłady Struktur

### Hierarchia Figur
```python
figury = [
    Kolo("Duże koło", 5),
    Kwadrat("Mały kwadrat", 2),
    TrojkatRownoboczny("Trójkąt", 4)
]

for f in figury:
    print(f"{f.nazwa}: pole = {f.pole():.2f}")