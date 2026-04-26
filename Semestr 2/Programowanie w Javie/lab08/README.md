# Programowanie w Javie – Laboratorium 08

Repozytorium zawiera rozwiązania zadań z ósmego laboratorium, koncentrujące się na modelowaniu obiektowym figur geometrycznych, enkapsulacji oraz dobrych praktykach dokumentowania kodu.

## Zawartość laboratorium

### 1. Klasa Rectangle (Prostokąt)
Wprowadzono nową klasę reprezentującą figurę geometryczną w przestrzeni dwuwymiarowej.
* **Pola prywatne**: Szerokość (`width`) oraz wysokość (`height`) typu `double`.
* **Metody obliczeniowe**: 
    * `getArea()`: Oblicza pole powierzchni prostokąta ($width \times height$).
    * `getPerimeter()`: Oblicza obwód figury ($2 \times (width + height)$).
* **Dokumentacja Javadoc**: Kod został opatrzony profesjonalnymi komentarzami dokumentacyjnymi opisującymi parametry metod i ich wartości zwracane.

### 2. Klasa ulamek i ZeroDenominator
Kontynuacja pracy nad modelem matematycznym ułamka zwykłego:
* **Obsługa błędów**: Wykorzystanie niestandardowego wyjątku `ZeroDenominator` (dziedziczącego po `RuntimeException`) do blokowania operacji z zerem w mianowniku.
* **Arytmetyka**: Metody `dodaj` oraz `odejmij` wykonują działania na ułamkach, automatycznie zwracając wynik w postaci skróconej dzięki algorytmowi Euklidesa.

### 3. Klasa Main
Demonstracja działania zaimplementowanych klas:
* Inicjalizacja obiektu `Rectangle` z konkretnymi wymiarami.
* Testowanie mechanizmów `getterów` i `setterów` poprzez zmianę wymiarów figury w trakcie działania programu.
* Wypisanie parametrów geometrycznych (pole, obwód) do konsoli.

## Struktura plików
* `Rectangle.java` – Model prostokąta z metodami geometrycznymi.
* `ulamek.java` – Klasa ułamka zwykłego z logiką skracania i arytmetyką.
* `ZeroDenominator.java` – Klasa wyjątku niekontrolowanego dla błędnego mianownika.
* `Main.java` – Punkt wejściowy programu testujący klasę `Rectangle`.

## Technologie
* **Język**: Java 17+
* **Standard dokumentacji**: Javadoc

## Instrukcja uruchomienia
Program znajduje się w pakiecie `com.company`. Aby skompilować i uruchomić zadania z poziomu terminala:

```bash
# Kompilacja wszystkich plików w pakiecie
javac com/company/*.java

# Uruchomienie programu testowego
java com.company.Main