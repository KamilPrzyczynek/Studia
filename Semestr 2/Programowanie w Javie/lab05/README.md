# Programowanie w Javie – Laboratorium 05

Repozytorium zawiera implementację zadań dotyczących programowania obiektowego, koncentrując się na zaawansowanej obsłudze wyjątków, hermetyzacji oraz implementacji logiki matematycznej w klasach.

## Zakres zadań

### Zadanie 3a: Obsługa Wyjątków (ZeroDenominator)
W celu zabezpieczenia programu przed błędnymi operacjami matematycznymi, zaimplementowano własną obsługę wyjątków:
* **Klasa ZeroDenominator**: Rozszerza `RuntimeException`, tworząc wyjątek niekontrolowany rzucany przy próbie ustawienia mianownika na 0.
* **Walidacja w konstruktorze**: Podczas tworzenia obiektu klasy `Ulamek` sprawdzany jest warunek `mianownik == 0`.
* **Walidacja w setterach**: Metoda `setMianownik` również chroni obiekt przed ustawieniem nieprawidłowej wartości.

### Zadanie 4: Rozszerzona Klasa Ulamek
Klasa reprezentująca ułamek zwykły została wzbogacona o następujące funkcjonalności:
* **Przeładowanie metody toString()**: Zapewnia czytelną prezentację obiektu w formacie `licznik/mianownik`.
* **Operacje arytmetyczne**: Implementacja metod `dodaj(Ulamek u)` oraz `odejmij(Ulamek u)`.
* **Automatyczne skracanie**: Po każdej operacji matematycznej ułamek jest skracany przy pomocy prywatnej metody `skroc`, wykorzystującej algorytm Euklidesa do wyznaczenia Największego Wspólnego Dzielnika (NWD).

## Struktura Plików
* `ulamek.java` – Zawiera definicję wyjątku `ZeroDenominator` oraz pełną implementację klasy `Ulamek`.
* `Main.java` – Klasa startowa demonstrująca działanie programu, w tym mechanizm `try-catch` do przechwytywania błędów mianownika.

## Instrukcja uruchomienia

Program wykorzystuje strukturę pakietów (`package com.company`). Aby skompilować i uruchomić projekt z linii komend:

```bash
# Kompilacja (z folderu nadrzędnego wobec com/)
javac com/company/*.java

# Uruchomienie programu
java com.company.Main