# Kolokwium – Programowanie w Javie (Semestr 2)

Repozytorium zawiera rozwiązania zadań z kolokwium zaliczeniowego. Projekty demonstrują praktyczne zastosowanie programowania obiektowego, obsługi kolekcji, operacji na plikach oraz systemów obsługi błędów (wyjątków).

## Struktura Projektu

Projekty zostały podzielone na katalogi odpowiadające poszczególnym zadaniom:

### 1. Zadanie: Liczba Zespolona (`zad1`)
Implementacja modelu matematycznego liczby zespolonej wraz z mechanizmem porównywania.
* **Klasa LiczbaZespolona**: 
    * Reprezentuje liczby w formacie $a + bi$.
    * Metoda `pokazModul()`: Oblicza moduł liczby zespolonej ($\sqrt{a^2 + b^2}$).
    * **Interfejs Comparable**: Umożliwia naturalne sortowanie liczb na podstawie ich modułu.
* **Operacje I/O**: Klasa `Main` zawiera mechanizmy zapisu posortowanej listy liczb do pliku `dane.txt` oraz ich odczytu.

### 2. Zadanie: System Student-Przedmiot (`zad2`)
Złożony system zarządzania ocenami studentów z wykorzystaniem autorskich wyjątków.
* **Klasa Student**: Zarządza listą przedmiotów, umożliwia dodawanie/usuwanie ocen oraz wyliczanie średniej.
* **Klasa Przedmiot**: Przechowuje nazwę, typ zajęć oraz ocenę (z walidacją zakresu 2.0 - 5.0).
* **Obsługa Wyjątków (EmptyName)**: Autorski wyjątek rzucany w przypadku błędnych danych wejściowych (brak nazwy lub nieprawidłowa ocena).
* **Sortowanie**: Studenci są sortowani według numeru albumu (rzutowanie `String` na `Integer` w `compareTo`).

### 3. Zadanie: Grupa i Persystencja Danych (`zad3` / `zad4`)
Zarządzanie grupą studentów z wykorzystaniem dynamicznego wczytywania danych i zapisu do pliku.
* **Klasa Grupa**: Odpowiada za przyjmowanie danych od użytkownika poprzez `Scanner` i przechowywanie ich w strukturze `List<Student>`.
* **Klasa BrakDanych**: Wyjątek typu `RuntimeException` obsługujący sytuacje braku kluczowych informacji (imię, nazwisko, album).
* **Automatyczne Sortowanie**: Studenci są sortowani wewnątrz grupy przy każdym dodaniu nowego rekordu.
* **Obsługa Plików**: Klasa `Main` implementuje odczyt danych z pliku `dane.txt` za pomocą `BufferedReader` z obsługą `FileNotFoundException`.

## Wykorzystane Technologie i Mechanizmy

* **Kolekcje**: `ArrayList`, `List` – dynamiczne zarządzanie danymi.
* **Sortowanie**: 
    * `Collections.sort()` oraz `lista.sort()`.
    * Implementacja interfejsu `Comparable<T>`.
* **Obsługa Plików (I/O)**:
    * `BufferedWriter` / `FileWriter` (Zapis).
    * `BufferedReader` / `FileReader` (Odczyt).
* **Wyjątki**:
    * Własne klasy: `EmptyName` (Checked) oraz `BrakDanych` (Unchecked).
    * Bloki `try-catch` oraz `try-with-resources`.

## Instrukcja Uruchomienia

Każde zadanie posiada własną klasę `Main`. Przykładowa kompilacja (dla zad2):

```bash
cd zad2
javac *.java
java Main