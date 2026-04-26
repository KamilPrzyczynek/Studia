# Programowanie w Javie – Laboratorium 07

Repozytorium zawiera zaawansowaną implementację klasy `ulamek`, wzbogaconą o mechanizmy sortowania, obsługę kolekcji oraz interfejsy porównujące.

## Zakres laboratorium

Głównym celem laboratorium było wykorzystanie struktur danych z biblioteki standardowej Java oraz implementacja mechanizmów pozwalających na automatyczne sortowanie obiektów własnych.

### 1. Interfejs Comparable i sortowanie
Klasa `ulamek` implementuje interfejs `Comparable<ulamek>`, co pozwala na definiowanie naturalnego porządku obiektów.
* **Metoda compareTo()**: Została zaimplementowana w sposób precyzyjny – porównuje wartości ułamków sprowadzając je do wspólnego mianownika lub wykorzystując wynik dzielenia zmiennoprzecinkowego.
* **Arrays.sort() oraz Collections.sort()**: Dzięki implementacji interfejsu, tablice oraz listy ułamków są sortowane automatycznie od wartości najmniejszej do największej.

### 2. Kolekcje i Tablice
W programie zademonstrowano dwa podejścia do przechowywania danych:
* **Tablica statyczna (`ulamek[]`)**: Wykorzystanie standardowych tablic i metody `Arrays.sort()`.
* **Lista dynamiczna (`ArrayList<ulamek>`)**: Wykorzystanie kolekcji z pakietu `java.util` wraz z metodą `Collections.sort()`.

### 3. Obsługa wyjątków i hermetyzacja
Kontynuacja dobrych praktyk z poprzednich laboratoriów:
* **ZeroDenominator**: Autorski wyjątek rzucany w przypadku próby utworzenia ułamka z zerem w mianowniku.
* **Skracanie ułamków**: Metoda `skroc()` wykorzystująca algorytm Euklidesa (NWD) zapewnia, że każdy ułamek (np. wynikowy) jest przechowywany w najprostszej postaci.

## Struktura projektu
* `ulamek.java` – Klasa modelu z implementacją `Comparable`, operacjami arytmetycznymi (`dodaj`, `odejmij`) oraz metodą `dzielenie()` zwracającą wynik jako `double`.
* `ZeroDenominator.java` – Definicja wyjątku dla błędnych danych wejściowych.
* `Main.java` – Demonstracja tworzenia list i tablic, ich wyświetlania oraz procesu sortowania.

## Instrukcja uruchomienia

Program znajduje się w pakiecie `com.company`. Aby go uruchomić:

```bash
# Kompilacja
javac com/company/*.java

# Uruchomienie
java com.company.Main