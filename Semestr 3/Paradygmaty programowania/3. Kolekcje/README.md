# Paradygmaty Programowania – Laboratorium 3: Kolekcje w Pythonie

Repozytorium zawiera implementację zadań demonstrujących wykorzystanie wbudowanych struktur danych (kolekcji) języka Python do rozwiązywania problemów mapowania, filtrowania oraz przechowywania złożonych informacji.

## Przegląd Zastosowanych Struktur

W paradygmacie strukturalnym kolekcje służą do organizowania danych w sposób umożliwiający ich wydajne przetwarzanie za pomocą pętli i instrukcji warunkowych.

### 1. Słowniki (`dict`) – Mapowanie Klucz-Wartość
Słowniki zostały wykorzystane do szybkiego wyszukiwania powiązań między danymi:
* **Tłumaczenie znaków**: Skrypt `cyfryslownie.py` wykorzystuje słownik do zamiany cyfr tekstowych na ich słowne odpowiedniki w języku polskim.
* **Konwersja systemów liczbowych**: W skrypcie `rzymskienaarabskie.py` słownik mapuje rzymskie symbole tekstowe (`I`, `V`, `X` itd.) na ich wartości całkowite.
* **Klucze złożone**: Skrypt `spiskontakow.py` prezentuje zaawansowane użycie słownika, gdzie kluczem jest krotka (tuple) zawierająca imię i nazwisko, co pozwala na unikalne identyfikowanie osób.


### 2. Listy (`list`) i List Comprehension
Listy służą do przechowywania sekwencji danych, a ich tworzenie zostało zoptymalizowane za pomocą mechanizmu *List Comprehension*:
* **Dynamiczne filtrowanie**: Skrypt `lataprzestepne.py` generuje listę lat przestępnych w podanym przedziale za pomocą jednej linii kodu, łącząc pętlę `for` z rozbudowanym warunkiem logicznym (podzielność przez 4, 100 i 400).

### 3. Krotki (`tuple`) – Niemutowalne Kolekcje
Krotki wykorzystano tam, gdzie struktura danych powinna pozostać stała i niezmienna:
* **Złożone identyfikatory**: Użycie krotek jako kluczy w słowniku `kontakty` pozwala na grupowanie powiązanych ze sobą danych (Imię + Nazwisko), które wspólnie wskazują na konkretną wartość (numer telefonu).

## Analiza Algorytmów

* **Przetwarzanie sekwencji**: Skrypt `cyfryslownie.py` iteruje po napisie wejściowym, sprawdzając metodą `isdigit()`, czy dany znak jest cyfrą, zanim pobierze jego opis ze słownika.
* **Algorytm rzymski**: Skrypt `rzymskienaarabskie.py` implementuje algorytm konwersji poprzez iterację wsteczną (slicing `[::-1]`), gdzie wartość jest dodawana lub odejmowana od wyniku w zależności od relacji z poprzednio przetworzoną cyfrą.
* **Przeszukiwanie zbiorów**: W `spiskontakow.py` zastosowano dekompozycję kluczy podczas iteracji (`for imie, nazwisko in kontakty`), co umożliwia filtrowanie kontaktów po samym nazwisku.

## Zawartość Plików
* `cyfryslownie.py` – Zamiana liczb na format tekstowy.
* `lataprzestepne.py` – Wyznaczanie lat przestępnych z użyciem *list comprehension*.
* `rzymskienaarabskie.py` – Konwerter liczb rzymskich na arabskie.
* `spiskontakow.py` – Prosta baza danych kontaktowych oparta na słowniku i krotkach.

## Instrukcja Uruchomienia
Skrypty można uruchomić za pomocą interpretera Python:

```bash
python nazwa_pliku.py