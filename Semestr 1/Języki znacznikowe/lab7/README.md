# Języki Znacznikowe - Laboratorium 7: Formularze HTML

Siódme laboratorium poświęcone jest tworzeniu interaktywnych formularzy oraz poznaniu różnych typów pól wejściowych, które pozwalają na zbieranie danych od użytkownika w standardzie HTML5.

## Zakres materiału

* **Struktura formularza**: Wykorzystanie znacznika `<form>` jako kontenera dla elementów interaktywnych.
* **Typy pól tekstowych**: 
    * `text`: Standardowe pole tekstowe.
    * `password`: Pole maskujące wpisywane znaki (hasło).
* **Pola numeryczne**: Użycie `input type="number"` z atrybutami `min` oraz `max` do walidacji wieku lub zakresu liczb.
* **Wybór opcji (Selection)**:
    * `checkbox`: Pola wielokrotnego wyboru (np. akceptacja regulaminów).
    * `radio`: Pola jednokrotnego wyboru w obrębie grupy (np. wybór płci).
    * `select` (Combo-box): Rozwijana lista opcji z przypisanymi wartościami (`value`).
* **Pola wieloliniowe**: Wykorzystanie znacznika `<textarea>` do wprowadzania dłuższych tekstów (np. komentarzy).
* **Etykiety (Labels)**: Prawidłowe wiązanie opisów z polami za pomocą znacznika `<label>`, co poprawia dostępność i użyteczność formularza.
* **Przyciski**: 
    * `submit`: Przycisk wysyłający dane.
    * `reset`: Przycisk czyszczący zawartość pól formularza.

## Opis elementów projektu

W pliku `lab07.html` zaimplementowano sekcje demonstrujące:
1. **Rejestrację**: Dane logowania (login/hasło).
2. **Profil użytkownika**: Wiek oraz płeć (wykorzystanie pól typu radio).
3. **Zgody**: Checkboxy do polityki prywatności i regulaminu.
4. **Karierę**: Listę rozwijaną z wyborem stanowiska programistycznego.
5. **Opinię**: Obszar tekstowy na komentarze.

## Instrukcja uruchomienia

1. Otwórz plik `lab07.html` w przeglądarce.
2. Przetestuj działanie poszczególnych pól (np. ograniczenie min/max w polu wieku).
3. Sprawdź, czy przycisk "Wyczyść" poprawnie resetuje wprowadzone dane.

---
*Zadania realizowane w ramach przedmiotu Języki Znacznikowe.*