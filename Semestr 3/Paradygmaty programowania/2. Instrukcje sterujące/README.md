# Paradygmaty Programowania – Laboratorium 2: Instrukcje Sterujące w Pythonie

Repozytorium zawiera zbiór skryptów demonstrujących praktyczne zastosowanie instrukcji sterujących przepływem programu w języku Python. Przykłady koncentrują się na pętlach iteracyjnych oraz rozgałęzieniach warunkowych.

## Przegląd Zastosowanych Mechanizmów

W paradygmacie strukturalnym przepływ logiki realizowany jest poprzez trzy główne rodzaje instrukcji sterujących: sekwencję, wybór (instrukcje warunkowe) oraz iterację (pętle).

### 1. Pętle Iteracyjne (`for`, `range`, `enumerate`)
Programy wykorzystują różne techniki iteracji w zależności od potrzeb:
* **Iteracja po sekwencji**: Skrypt `szukaniea.py` przechodzi bezpośrednio po każdym znaku w ciągu tekstowym, aby zliczyć wystąpienia litery 'a'.
* **Iteracja z indeksem**: Skrypt `szukaneaindeksy.py` wykorzystuje funkcję `enumerate()`, która pozwala na jednoczesny dostęp do wartości elementu oraz jego pozycji (indeksu) w ciągu.
* **Pętle zakresowe**: W skrypcie `chonikawpythonie.py` pętla `range(1, wysokosc + 1)` steruje liczbą poziomów generowanego kształtu.


### 2. Rozgałęzienia Warunkowe (`if`, `elif`, `else`)
Instrukcje warunkowe pozwalają programowi na podejmowanie decyzji w czasie rzeczywistym:
* **Logika binarna**: Sprawdzanie parzystości wysokości w celu dobrania odpowiedniego znaku graficznego (`*` lub `#`).
* **Wielopoziomowe porównania**: Skrypt `zgadujzgadula.py` wykorzystuje zagnieżdżone instrukcje `if-else` do informowania gracza, czy podana liczba jest za mała, czy za duża.
* **Walidacja danych**: Sprawdzanie, czy wprowadzone dane mieszczą się w wymaganym zakresie (1-7) przed wykonaniem głównej logiki.

### 3. Zaawansowane Sterowanie Przepływem
* **Pętla `for-else`**: Skrypt `zgadujzgadula.py` implementuje unikalną dla Pythona konstrukcję `else` po pętli `for`. Blok ten wykonuje się tylko wtedy, gdy pętla zakończy się naturalnie (nie zostanie przerwana instrukcją `break`), co służy do obsługi przegranej gracza po wykorzystaniu wszystkich prób.
* **Przerywanie pętli (`break`)**: Natychmiastowe zakończenie gry po poprawnym odgadnięciu liczby.

## Zawartość Plików
* `szukaniea.py` – Zliczanie wystąpień konkretnych znaków w tekście.
* `szukaneaindeksy.py` – Wypisywanie pozycji (indeksów) znalezionych znaków.
* `chonikawpythonie.py` – Generowanie wzorów tekstowych z wykorzystaniem arytmetyki stringów i pętli.
* `zgadujzgadula.py` – Interaktywna gra logiczna z wykorzystaniem modułu `random` i instrukcji wyjścia.

## Instrukcja Uruchomienia
Skrypty wymagają interpretera Python w wersji 3.x. Można je uruchomić komendą:

```bash
python nazwa_pliku.py