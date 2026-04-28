# Paradygmaty Programowania – Laboratorium 04: Struktury Danych, Funkcje i Logika

Repozytorium zawiera rozwiązania zadań z czwartego laboratorium, koncentrujące się na wykorzystaniu zaawansowanych struktur danych języka Python (słowniki, krotki, listy) oraz implementacji funkcji do obliczeń matematycznych i statystycznych.

## Przegląd Zagadnień

W tej sekcji laboratorium nacisk położono na modularność kodu, wykorzystanie funkcji jako argumentów oraz efektywne operowanie na strukturach danych.

### 1. Funkcje i Obliczenia Matematyczne
* **Pochodna Funkcji**: Skrypt `pochodna.py` implementuje numeryczne obliczanie pochodnej przy użyciu definicji różnicowej. Pokazuje on również mechanizm **funkcji wyższego rzędu**, gdzie funkcje takie jak `math.sin` są przekazywane jako argumenty.
* **Statystyka**: Skrypt `wariancja.py` zawiera funkcję obliczającą średnią arytmetyczną oraz wariancję z próby (z zastosowaniem poprawki Bessela – dzielenie przez $n-1$).

### 2. Słowniki i Mapowanie Danych
Słowniki zostały wykorzystane jako wydajne tablice asocjacyjne do szybkiego tłumaczenia danych:
* **Translacja cyfr**: Skrypt `cyfryslownie.py` zamienia znaki numeryczne na ich tekstowe odpowiedniki.
* **System Rzymski**: Skrypt `rzymskienaarabskie.py` mapuje symbole rzymskie na wartości całkowite, implementując algorytm konwersji (analiza wsteczna).

### 3. Zaawansowane Struktury i Filtrowanie
* **Krotki jako Klucze**: W `spiskontakow.py` imiona i nazwiska tworzą niemutowalne klucze słownika, co umożliwia szybki dostęp do danych kontaktowych.
* **Listy Składane (List Comprehensions)**: Skrypt `lataprzestepne.py` wykorzystuje zwięzłą składnię do filtrowania lat przestępnych z podanego zakresu zgodnie z algorytmem kalendarza gregoriańskiego.

## Opis Programów

| Plik | Opis Funkcjonalności |
| :--- | :--- |
| `pochodna.py` | Numeryczne wyznaczanie pochodnej funkcji w punkcie. |
| `wariancja.py` | Obliczanie średniej i wariancji dla danych wprowadzonych przez użytkownika. |
| `cyfryslownie.py` | Zamiana ciągu cyfr na ich polskie nazwy (np. "123" -> "jeden dwa trzy"). |
| `lataprzestepne.py` | Generowanie listy lat przestępnych w zadanym przedziale czasowym. |
| `rzymskienaarabskie.py` | Konwersja liczb zapisanych w systemie rzymskim na system dziesiętny. |
| `spiskontakow.py` | Zarządzanie prostą bazą kontaktów przy użyciu złożonych kluczy (krotek). |

## Instrukcja Uruchomienia

Programy wymagają zainstalowanego interpretera Python w wersji 3.x.

```bash
# Obliczanie pochodnej
python pochodna.py

# Obliczanie statystyk (średnia i wariancja)
python wariancja.py

# Konwersja liczb rzymskich
python rzymskienaarabskie.py