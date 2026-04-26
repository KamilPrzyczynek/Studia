# Programowanie w Javie – Laboratorium 06

Repozytorium zawiera implementację klasy służącej do zarządzania datami, wykorzystującej nowoczesne mechanizmy języka Java do manipulacji czasem.

## Zawartość laboratorium

### Zadanie: Klasa MojaData
Głównym celem laboratorium było stworzenie własnego obiektu daty, który enkapsuluje logikę biznesową związaną z kalendarzem.

* **Klasa MojaData**: Modeluje datę składającą się z roku, miesiąca oraz dnia.
    * **Pola**: Dane są przechowywane w prywatnych polach typu `int`.
    * **Integracja z java.time**: Klasa wykorzystuje systemową klasę `LocalDate` do precyzyjnego wykonywania operacji kalendarzowych, co eliminuje problemy związane z różną liczbą dni w miesiącach czy latami przestępnymi.
    * **Metody przesuwania czasu**:
        * `przestawTydzienWPrzod()`: Przesuwa aktualny stan obiektu o dokładnie 7 dni do przodu.
        * `przestawTydzienWTyl()`: Przesuwa aktualny stan obiektu o 7 dni wstecz.
    * **Prezentacja danych**: Nadpisana metoda `toString()` formatuje datę do standardu `RRRR-MM-DD` (np. `2023-04-21`) przy użyciu `String.format`.

### Klasa Main
Służy jako punkt wejściowy programu i demonstracja działania logiki:
* Tworzy instancję klasy `MojaData` z konkretną datą startową.
* Prezentuje wyniki operacji przesunięcia czasu w konsoli.

## Technologie i biblioteki
* **Język**: Java 17+
* **Biblioteka Standardowa**: `java.time.LocalDate` – wykorzystana do bezpiecznych obliczeń dat.

## Struktura plików
* `MojaData.java` – Definicja klasy bazowej z logiką manipulacji datą.
* `Main.java` – Klasa testowa z metodą `main`.

## Instrukcja uruchomienia
Aby skompilować i uruchomić zadanie, wykonaj poniższe komendy w terminalu:

```bash
# Kompilacja klas
javac MojaData.java Main.java

# Uruchomienie programu
java Main