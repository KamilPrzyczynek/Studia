# Programowanie w Javie – Laboratorium 10 (Persystencja Danych)

Repozytorium zawiera implementację zadań dotyczących integracji logiki biznesowej z systemem plików. Głównym celem laboratorium było stworzenie mechanizmów zapisu i odczytu stanu obiektów (persystencji) przy użyciu strumieni znakowych.

## Zawartość laboratorium

### 1. Klasa MojaData (Model Danych)
Rozbudowany model daty, który wykorzystuje bibliotekę standardową Java do bezpiecznych obliczeń kalendarzowych.
* **Integracja z java.time.LocalDate**: Obliczenia przesunięć czasowych realizowane są poprzez konwersję pól obiektu na typ `LocalDate`.
* **Metody przesuwania czasu**:
    * `przestawTydzienWPrzod()`: Zwiększa datę o 7 dni.
    * `przestawTydzienWTyl()`: Zmniejsza datę o 7 dni.
* **Formatowanie**: Nadpisana metoda `toString()` zapewnia ujednolicony format zapisu `RRRR-MM-DD` przy użyciu `String.format`.

### 2. Mechanizmy Zapisu i Odczytu (I/O)
W projekcie zaimplementowano dedykowane klasy oraz metody do obsługi plików tekstowych:
* **Klasa zapiszDoPliku**: Wykorzystuje `BufferedWriter` i `FileWriter` do utrwalenia reprezentacji tekstowej obiektu w pliku.
* **Klasa odczytajZPliku**: Implementuje logikę odwrotną – odczytuje linię z pliku, dokonuje parsowania (podziału ciągu znaków metodą `split("-")`) i na tej podstawie rekonstruuje obiekt klasy `MojaData`.
* **Automatyczne zarządzanie zasobami**: Zastosowanie konstrukcji `try-with-resources` gwarantuje poprawne zamknięcie strumieni nawet w przypadku wystąpienia błędów.

### 3. Klasa Main (Demonstracja)
Główny punkt wejściowy programu integruje wszystkie komponenty:
1. Inicjalizuje datę startową.
2. Wykonuje operacje modyfikacji daty i wyświetla je w konsoli.
3. Zapisuje stan obiektu do pliku `plik.txt`.
4. Odczytuje dane z pliku i tworzy nowy obiekt, weryfikując poprawność procesu zapisu i odczytu.

## Struktura plików
* `MojaData.java` – Klasa modelu z logiką operacji na datach.
* `zapiszDoPliku.java` – Statyczna metoda do eksportu danych do pliku.
* `odczytajZPliku.java` – Statyczna metoda do importu danych z pliku.
* `Main.java` – Scenariusz testowy programu.
* `plik.txt` – Plik tekstowy przechowujący stan obiektu.

## Instrukcja uruchomienia

Aby skompilować i uruchomić zadanie:

```bash
# Kompilacja wszystkich plików
javac *.java

# Uruchomienie programu
java Main