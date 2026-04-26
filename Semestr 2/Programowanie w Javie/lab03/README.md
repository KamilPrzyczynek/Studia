# Programowanie w Javie - Laboratorium 03

Repozytorium zawiera rozwiązania zadań z trzeciego laboratorium języka Java, koncentrujące się na programowaniu obiektowym, enkapsulacji danych oraz implementacji logiki matematycznej.

## Zawartość laboratorium

### Zadanie 1: Rozwiązywanie równań kwadratowych
Implementacja algorytmu obliczania pierwiastków rzeczywistych równania kwadratowego postaci $ax^2 + bx + c = 0$.

* **Klasa RownanieKwadratowe**: Serce logiki matematycznej.
    * Przechowuje współczynniki `a`, `b`, `c` przekazywane w konstruktorze.
    * Metoda `obliczPierwiastki()` wylicza wyróżnik (deltę) i zwraca obiekt wynikowy lub `null` w przypadku braku rozwiązań.
* **Klasa Result**: Klasa typu POJO (Plain Old Java Object) służąca jako kontener dla wyników `x1` i `x2`.
* **Klasa Main**: Klasa testowa, która inicjalizuje równanie z określonymi parametrami i wyświetla wyniki w konsoli.

### Zadanie 2: Klasa Ulamek
Implementacja klasy reprezentującej ułamek zwykły wraz z operacjami arytmetycznymi i automatycznym skracaniem.

* **Klasa Ulamek**: Model matematyczny ułamka.
    * **Pola**: Enkapsulowane pola `licznik` oraz `mianownik` z dostępem przez gettery i settery.
    * **Operacje**: Implementacja metod `dodaj(Ulamek u)` oraz `odejmij(Ulamek u)`.
    * **Skracanie**: Prywatna metoda `skroc()` wykorzystująca algorytm Euklidesa (NWD) do optymalizacji postaci ułamka po każdej operacji.
    * **Formatowanie**: Nadpisana metoda `toString()` pozwalająca na czytelne wyświetlanie ułamka w formie `licznik/mianownik`.
* **Klasa Main1**: Zawiera przykładowe użycie klasy `Ulamek`, demonstrując dodawanie i odejmowanie ułamków o różnych mianownikach.

## Technologie
* **Język**: Java 17+
* **Paradygmat**: Programowanie zorientowane obiektowo (OOP)

## Struktura plików
* `RownanieKwadratowe.java` – Logika obliczeń równania kwadratowego.
* `Result.java` – Model danych dla pierwiastków równania.
* `Ulamek.java` – Klasa ułamka zwykłego z metodami matematycznymi.
* `Main.java` – Punkt wejściowy dla Zadania 1.
* `Main1.java` – Punkt wejściowy dla Zadania 2.

## Instrukcja uruchomienia

Wszystkie pliki znajdują się w pakiecie `com.company`. Aby skompilować i uruchomić zadania z poziomu terminala, przejdź do katalogu głównego projektu i wykonaj:

```bash
# Kompilacja wszystkich plików
javac com/company/*.java

# Uruchomienie Zadania 1 (Równania Kwadratowe)
java com.company.Main

# Uruchomienie Zadania 2 (Ułamki)
java com.company.Main1