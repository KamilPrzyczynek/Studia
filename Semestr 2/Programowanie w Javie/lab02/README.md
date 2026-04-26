# Programowanie w Javie – Laboratorium 02

Repozytorium zawiera rozwiązania zadań z drugiego laboratorium, skupiające się na obsłudze wejścia/wyjścia, wykorzystaniu argumentów wiersza poleceń oraz implementacji algorytmu rozkładu liczby na czynniki pierwsze.

## Zawartość laboratorium

### 1. Obsługa Argumentów Wiersza Poleceń
Program demonstruje sposób odbierania i wyświetlania danych przekazanych do aplikacji w momencie jej uruchomienia.
* **Mechanizm**: Wykorzystanie tablicy `String[] args` w metodzie `main`.
* **Działanie**: Iteracja przez wszystkie przekazane parametry i wypisanie ich w konsoli.

### 2. Interakcja z Użytkownikiem (Dwa Podejścia)
W projekcie zaimplementowano dwa różne sposoby pobierania danych od użytkownika w trakcie działania programu:
* **Klasa BufferedReader**: Klasyczne podejście wykorzystujące strumień `InputStreamReader` połączony z `System.in`. Wymaga parsowania ciągów znaków na liczby (np. `Integer.parseInt`).
* **Klasa Scanner**: Nowocześniejszy i wygodniejszy sposób pobierania danych, pozwalający na bezpośrednie odczytywanie typów liczbowych za pomocą metody `nextInt()`.

### 3. Algorytm Rozkładu na Czynniki Pierwsze
Zaimplementowano metodę statyczną `rozklad(int x)`, która dokonuje faktoryzacji podanej liczby.
* **Logika**: Program szuka dzielników liczby zaczynając od 2, wykonując dzielenie dopóki liczba jest podzielna przez dany czynnik, a następnie zwiększa dzielnik.
* **Wyjście**: Wynik prezentowany jest w formacie `liczba:dzielnik` dla każdego kroku operacji.

## Struktura plików
* `Main.java` – Główna klasa programu zawierająca logikę pobierania danych, sumowania liczb oraz algorytm rozkładu.

## Technologie
* **Język**: Java 17+
* **Biblioteki**: `java.io` (BufferedReader), `java.util.Scanner`.

## Instrukcja uruchomienia

Program można uruchomić przekazując opcjonalne argumenty wiersza poleceń:

```bash
# Kompilacja
javac com/company/Main.java

# Uruchomienie z przykładowymi argumentami
java com.company.Main Argument1 Test123