# Programowanie w Javie – Laboratorium 09 (Operacje Wejścia/Wyjścia)

Repozytorium zawiera zestaw zadań dotyczących obsługi strumieni danych, pracy z plikami oraz komunikacji z użytkownikiem poprzez konsolę w języku Java.

## Zawartość laboratorium

### Zadanie 1: Odczyt Binarny (Sygnatura Pliku)
Program odczytuje pierwsze 4 bajty pliku i wypisuje je w formacie szesnastkowym (Hex). 
* **Zastosowanie**: Identyfikacja typu pliku na podstawie jego sygnatury (tzw. magic numbers).
* **Technologie**: `FileInputStream`, `BufferedInputStream`.
* **Obsługa zasobów**: Wykorzystanie konstrukcji `try-with-resources` do automatycznego zamykania strumieni.

### Zadanie 2: Odczyt Tekstowy (Linia po Linii)
Prosta implementacja wypisywania zawartości pliku tekstowego na standardowe wyjście.
* **Technologie**: `FileReader`, `BufferedReader` (metoda `readLine()`), `PrintWriter`.
* **Kluczowe cechy**: Wykorzystanie buforowania dla zwiększenia wydajności odczytu dużych plików.

### Zadanie 3: Interaktywne Wypisywanie Plików
Bardziej rozbudowany program pozwalający użytkownikowi na wielokrotne podawanie nazw plików do odczytu w pętli.
* **Funkcjonalność**: 
    * Pobieranie nazwy pliku od użytkownika (`System.in`).
    * Zabezpieczenie przed błędną nazwą pliku (obsługa `IOException`).
    * Możliwość zakończenia działania programu po wpisaniu frazy "koniec".

### Zadanie 4: Kopiowanie Strumieni (Echo)
Implementacja kopiowania danych między dowolnym obiektem typu `Reader` a `Writer`.
* **Metoda echo**: Przepisuje znaki jeden po drugim aż do napotkania końca strumienia (`-1`).
* **Parametry**: Nazwa pliku źródłowego i docelowego przekazywana przez argumenty wiersza poleceń (`args[]`).

## Wykorzystane Klasy Strumieni


| Klasa | Typ | Opis |
| :--- | :--- | :--- |
| `FileInputStream` | Bajtowy | Podstawowy odczyt surowych bajtów z pliku. |
| `BufferedInputStream` | Bajtowy | Dodaje buforowanie do strumieni bajtowych, poprawiając wydajność. |
| `FileReader` / `FileWriter` | Znakowy | Odczyt i zapis plików tekstowych z uwzględnieniem kodowania znaków. |
| `BufferedReader` | Znakowy | Umożliwia odczyt tekstowy całymi liniami (`readLine()`). |
| `PrintWriter` | Znakowy | Wygodne narzędzie do formatowania wyjścia tekstowego. |

## Obsługa Błędów
Wszystkie zadania kładą duży nacisk na bezpieczną obsługę operacji I/O:
* **Try-with-resources**: Zastosowane w Zad1 i Zad2 dla gwarancji zamknięcia plików.
* **Bloki try-finally**: Zastosowane w Zad4 jako alternatywna metoda zwalniania zasobów.
* **Komunikaty**: Programy informują użytkownika o braku pliku lub błędach uprawnień zamiast przerywania pracy nagłym błędem (crash).

## Instrukcja Uruchomienia

Kompilacja wszystkich zadań w pakiecie `pliki`:
```bash
javac pliki/*.java