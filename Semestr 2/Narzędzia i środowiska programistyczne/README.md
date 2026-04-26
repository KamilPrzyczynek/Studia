# Narzędzia i Środowiska Programistyczne - Język Kotlin

Repozytorium zawiera zbiór zadań laboratoryjnych realizowanych w języku **Kotlin**. Projekt dokumentuje proces nauki od podstawowej składni i operacji wejścia/wyjścia, aż po zaawansowane wzorce programowania obiektowego (OOP) oraz systemy zarządzania danymi (CRUD).

## Przegląd Laboratoriów

### 1. Podstawy Składni i Typy Danych (`lab01`, `lab02`)
* **Zmienne**: Praca z typami `Int`, `String`, `Float` oraz różnica między `val` a `var`.
* **Instrukcje sterujące**: Wykorzystanie wyrażeń `if-else` oraz potężnej konstrukcji `when` do sterowania przepływem programu.
* **Interpolacja**: Dynamiczne budowanie ciągów znaków przy użyciu składni `$variable` i `${expression}`.

### 2. Interakcja i Bezpieczeństwo (`lab03`, `kotlin03.kt`)
* **Obsługa Wejścia**: Pobieranie danych od użytkownika za pomocą `readLine()` i konwersja typów (`toInt`).
* **Null-Safety**: Praktyczne zastosowanie operatora *Elvis* (`?:`) oraz bezpiecznych wywołań (`?.`) w celu unikania błędów `NullPointerException`.
* **Kontrola Wyjątków**: Implementacja bloków `try-catch` do bezpiecznej obsługi błędów indeksowania i formatowania.

### 3. Programowanie Obiektowe - Podstawy (`lab04`, `Main.kt`)
* **Klasy i Właściwości**: Definiowanie klas z konstruktorami głównymi i zarządzanie ich stanem.
* **Hermetyzacja**: Ograniczanie dostępu do pól klasy za pomocą modyfikatora `private` (np. prędkość pojazdu w klasie `Car`).
* **Logika Obiektu**: Implementacja metod publicznych (interfejsu) komunikujących się z prywatną logiką wewnętrzną.

### 4. Zaawansowane Systemy Obiektowe (`lab05`)
* **Zarządzanie Kolekcjami**: Praca z `MutableList` do przechowywania zbiorów obiektów klasy `Student`.
* **System CRUD**: Implementacja pełnej logiki zarządzania danymi:
    * **Dodawanie/Usuwanie**: Wstawianie nowych rekordów i usuwanie na podstawie ID/Indeksu.
    * **Aktualizacja**: Modyfikacja danych istniejących obiektów wewnątrz listy.
    * **Przetwarzanie**: Obliczanie średniej ocen (`avg`) oraz filtrowanie studentów niespełniających wymogów zaliczenia (`failed`).
* **Reprezentacja Danych**: Nadpisywanie metody `toString()` dla czytelnej wizualizacji stanu obiektów w konsoli.

## Kluczowe Technologie

* **Język**: Kotlin (JVM).
* **Paradygmat**: Programowanie Obiektowe (OOP).
* **Środowisko**: IntelliJ IDEA / Kompilator Kotlina.

## Instrukcja Użytkowania

1. Każdy plik `labXX.kt` jest autonomicznym programem testowym.
2. Aby przetestować konkretną funkcjonalność, należy uruchomić funkcję `main()` zawartą w danym pliku.
3. Systemy zarządzania studentami (Lab 5) pozwalają na interaktywne testowanie operacji na listach bezpośrednio w terminalu.

---
*Opracował: Kamil Przyczynek*