# Narzędzia i Środowiska Programistyczne - Laboratorium 3 (Kotlin)

Trzecie laboratorium poświęcone jest nauce podstawowej składni języka **Kotlin**, ze szczególnym uwzględnieniem interakcji z użytkownikiem, bezpiecznej obsługi wartości opcjonalnych (null-safety) oraz kontroli błędów.

## Zawartość laboratorium

Projekt zawiera kilka wariantów funkcji `main`, z których każdy demonstruje inne zagadnienie programistyczne:

### 1. Analiza ciągu znaków i zliczanie znaków
* **Interakcja**: Pobieranie imienia/tekstu od użytkownika za pomocą `readLine()`.
* **Null-safety**: Użycie operatora *Elvis* (`?:`), aby zapewnić domyślną wartość pustego ciągu w przypadku wystąpienia `null`.
* **Algorytm**: Pętla `for` przechodząca przez każdy znak napisu i zliczająca znaki niebędące spacjami ani tabulatorami (`m != ' ' && m != '\t'`).

### 2. Podstawowe operacje matematyczne i konwersja typów
* **Konwersja**: Zamiana danych wejściowych typu `String?` na typ `Int` przy użyciu `toInt()`.
* **Suma**: Prosta implementacja kalkulatora dodającego dwie liczby podane przez użytkownika.
* **Bezpieczeństwo**: Zastosowanie `?.` i `?:0` w celu uniknięcia błędów przy próbie konwersji niepoprawnych danych.

### 3. Obsługa wyjątków (Try-Catch)
* **Mechanizm**: Wykorzystanie bloku `try-catch` do przechwytywania błędu `StringIndexOutOfBoundsException`.
* **Przykład**: Próba pobrania konkretnego znaku z ciągu (indeks 2) i obsługa sytuacji, w której ciąg jest zbyt krótki.
* **Logowanie błędów**: Wyświetlanie komunikatu o błędzie oraz szczegółów wyjątku w konsoli.

## Kluczowe konstrukcje w Kotlinie

* **`readLine()`**: Standardowa funkcja do odczytu danych z konsoli.
* **Operator Elvis (`?:`)**: Skrócona forma sprawdzania warunku `null`.
* **Interpolacja Stringów**: Wygodne wyświetlanie zmiennych wewnątrz tekstów za pomocą znaku `$`, np. `println("Wynik: $wynik")`.
* **Bezpieczne rzutowanie**: Stosowanie metod takich jak `toInt()` z obsługą błędów.

## Instrukcja uruchomienia

1. Skopiuj wybrany fragment kodu funkcji `main` z pliku `kotlin03.kt`.
2. Uruchom kod w dowolnym środowisku obsługującym Kotlina (np. IntelliJ IDEA, Android Studio lub kompilator online).
3. Postępuj zgodnie z instrukcjami wyświetlanymi w konsoli (podaj imię lub liczby).

---
*Opracował: Kamil Przyczynek*