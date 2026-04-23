# Podstawy Programowania w C - Laboratorium 7: Funkcje i Zakres Zmiennych

Repozytorium zawiera kod z siódmego laboratorium, którego celem było przećwiczenie dekompozycji programu na mniejsze moduły (funkcje) oraz zrozumienie działania zmiennych globalnych.

## Poruszane zagadnienia
* **Definiowanie funkcji**: Tworzenie własnych procedur typu `void`.
* **Zmienne globalne**: Wykorzystanie zmiennych dostępnych dla wszystkich funkcji w pliku.
* **Struktura programu**: Podział logiczny na sekcje: wczytywanie danych, obliczenia i prezentacja wyników.
* **Pętle**: Wykorzystanie pętli `for` do powtarzania określonych komunikatów.

## Struktura Funkcji w Programie

| Funkcja | Opis działania |
| :--- | :--- |
| `zadanie1()` | Wyświetla 100 razy komunikat tekstowy. |
| `wczytaj()` | Pobiera od użytkownika dwie liczby całkowite i zapisuje je w zmiennych globalnych. |
| `operacje_proste()` | Wykonuje dodawanie, odejmowanie i mnożenie. |
| `operacje_zaawansowane()` | Wykonuje dzielenie oraz oblicza średnią arytmetyczną. |
| `wyniki()` | Wyświetla sformatowane rezultaty wszystkich obliczeń. |

## Zmienne Globalne
W programie zastosowano zmienne globalne (z przedrostkiem `g_`), co pozwala na przekazywanie danych między funkcjami bez użycia argumentów i wartości zwracanych (tzw. podejście proceduralne).

## Kompilacja i uruchomienie
```bash
gcc lab7.c -o lab7
./lab7