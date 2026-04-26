# Programowanie Reaktywne - Laboratorium 5

## Opis projektu
Piąte laboratorium poświęcone było zaawansowanym operacjom na obiekcie **DOM** oraz kompleksowej obsłudze zdarzeń w JavaScript. Głównym zadaniem było stworzenie interaktywnej aplikacji **Quiz**, która dynamicznie przetwarza dane z obiektów JSON, zarządza stanem punktowym użytkownika oraz pozwala na wielokrotne podejście do testu.

## Zawartość laboratorium

### 1. Dynamiczne Zarządzanie Treścią (`quiz.html`, `pytania.js`)
* **Baza pytań**: Wykorzystanie predefiniowanej tablicy obiektów w pliku `pytania.js`, zawierającej pytania, zestaw odpowiedzi oraz wskazanie poprawnej opcji.
* **Renderowanie pytań**: Implementacja funkcji `setQuestion(index)`, która aktualizuje treść pytania, listę odpowiedzi oraz numer bieżącego pytania w interfejsie użytkownika.
* **Obsługa różnych typów pytań**: Skrypt automatycznie ukrywa puste pola odpowiedzi, jeśli pytanie zawiera tylko dwie opcje (np. prawda/fałsz).

### 2. Logika Gry i Interakcja (`script.js`)
* **Nawigacja**: Obsługa przycisków "Next" i "Previous", pozwalająca użytkownikowi na swobodne przemieszczanie się między pytaniami.
* **Weryfikacja odpowiedzi**: 
    * Implementacja funkcji sprawdzającej poprawność wybranej opcji.
    * Wizualne oznaczanie wyników: kolor zielony (`.correct`) dla poprawnej odpowiedzi i czerwony (`.incorrect`) dla błędnej.
    * Blokowanie możliwości zmiany zdania po dokonaniu wyboru (`removeEventListener`).
* **System Punktacji**: Dynamiczne zliczanie punktów i aktualizacja wyniku na żywo w trakcie trwania quizu.

### 3. Podsumowanie i Persystencja Danych
* **Ekran wyników**: Po zakończeniu ostatniego pytania, widok quizu jest ukrywany, a wyświetlane jest podsumowanie z tabelą wyników.
* **Zarządzanie stanem (localStorage)**: 
    * Wykorzystanie Web Storage API do przechowywania wyników.
    * Zastosowanie `JSON.stringify()` oraz `JSON.parse()` do zapisywania i odczytywania bardziej złożonych danych o wynikach.
* **Resetowanie Quizu**: Funkcja restartu, która zeruje liczniki, czyści klasy CSS i przywraca stan początkowy gry bez konieczności odświeżania całej strony.

### 4. Warstwa Wizualna (`style.css`)
* **Bootstrap Integration**: Wykorzystanie klas Bootstrapa do stylowania kontenerów, list odpowiedzi (`list-group`) oraz przycisków.
* **Custom Styles**: Własne reguły CSS dla stanów `.correct` i `.incorrect` oraz specyficzne stylowanie stopki i tabeli wyników.

## Technologie
* **HTML5 / CSS3**: Struktura dokumentu i stylowanie interaktywne.
* **JavaScript (Vanilla JS)**: Zaawansowana manipulacja drzewem DOM, obsługa tablic obiektów, logika warunkowa.
* **LocalStorage**: Trwałe przechowywanie postępów użytkownika.

## Instrukcja uruchomienia
1. Otwórz plik `quiz.html` w przeglądarce.
2. Odpowiadaj na pytania, klikając w wybrane odpowiedzi (system od razu pokaże, czy masz rację).
3. Używaj przycisku "Next", aby przejść do kolejnych zadań.
4. Na końcu zobaczysz swój wynik z możliwością ponownego podejścia do quizu.

---
*Opracował: Kamil Przyczynek*