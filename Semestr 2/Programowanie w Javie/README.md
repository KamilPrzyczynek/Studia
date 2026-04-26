# Podsumowanie Kursu Programowania w Javie (Laboratoria 02-11)

Niniejsze repozytorium to kompleksowy przegląd kompetencji zdobytych podczas kursu Javy, obejmujący drogę od prostych algorytmów konsolowych po zaawansowane mechanizmy programowania obiektowego i operacji na plikach.

##  Kluczowe Kompetencje i Zagadnienia

### 1. Fundamenty i Algorytmika (Lab 02-03)
* **Interakcja**: Obsługa wejścia za pomocą `Scanner` oraz `BufferedReader`.
* **Matematyka**: Implementacja rozwiązywania równań kwadratowych oraz rozkładu liczb na czynniki pierwsze.

### 2. Programowanie Obiektowe i Hermetyzacja (Lab 03-08)
* **Modelowanie**: Tworzenie klas reprezentujących obiekty rzeczywiste i matematyczne (`Ulamek`, `Rectangle`, `MojaData`).
* **Hermetyzacja**: Ścisłe stosowanie modyfikatorów dostępu (`private`) oraz metod dostępowych (`getters/setters`).
* **Metody Statyczne**: Wykorzystanie metod `static` do operacji niezależnych od instancji obiektu.

### 3. Obsługa Wyjątków (Lab 05-09)
* **Własne Wyjątki**: Definiowanie klas wyjątków niekontrolowanych (np. `ZeroDenominator` rozszerzający `RuntimeException`).
* **Defensywne Programowanie**: Rzucanie wyjątków (`throw`) w konstruktorach i setterach w celu ochrony spójności danych.
* **Bloki Try-Catch-Finally**: Zarządzanie przepływem programu w sytuacjach błędnych.

### 4. Systemy Dat i Czasu (Lab 06, 10)
* **API java.time**: Wykorzystanie klasy `LocalDate` do bezpiecznych operacji kalendarzowych (lata przestępne, przesunięcia tygodniowe).

### 5. Strumienie i Pliki I/O (Lab 09-10)
* **Strumienie Znakowe i Bajtowe**: Praca z `FileReader`, `BufferedReader`, `BufferedInputStream` oraz `PrintWriter`.
* **Persystencja**: Zapisywanie stanu obiektów do plików tekstowych i ich późniejsza rekonstrukcja (deserializacja).
* **Try-with-resources**: Nowoczesne zarządzanie zasobami gwarantujące zamknięcie plików.

### 6. Kolekcje i Sortowanie (Lab 07, 11)
* **Interfejs Comparable**: Implementacja naturalnego porządku obiektów poprzez metodę `compareTo`.
* **Struktury Danych**: Wykorzystanie tablic statycznych oraz list dynamicznych `ArrayList`.
* **Algorytmy Sortowania**: Użycie `Arrays.sort()` oraz `Collections.sort()` wraz z komparatorami odwracającymi kolejność (`reverseOrder`).

##  Struktura Projektu (Główne Klasy)
| Moduł | Klasy Kluczowe | Główne Zadanie |
| :--- | :--- | :--- |
| **Matematyka** | `Ulamek`, `RownanieKwadratowe` | Arytmetyka, skracanie ułamków (NWD), pierwiastki. |
| **Geometria** | `Rectangle` | Pole, obwód, dokumentacja Javadoc. |
| **Czas** | `MojaData` | Manipulacja datami, formatowanie ISO. |
| **I/O** | `Zad1` - `Zad4` | Obsługa plików, kopiowanie strumieni, interakcja. |

##  Jak Korzystać z Repozytorium
Każde laboratorium jest autonomicznym modułem. Aby przetestować konkretną funkcjonalność, należy przejść do odpowiedniego folderu i skompilować plik `Main.java` przypisany do danego zadania.

```bash
javac *.java
java Main
