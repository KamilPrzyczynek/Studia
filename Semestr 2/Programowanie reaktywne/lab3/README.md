# Programowanie Reaktywne - Laboratorium 3

## Opis projektu
Trzecie laboratorium skupiało się na optymalizacji struktury serwisu internetowego poprzez wprowadzenie dynamicznego generowania elementów wspólnych oraz naukę podstaw manipulacji obiektem **DOM (Document Object Model)** przy użyciu języka **JavaScript**. Kluczowym celem było wyeliminowanie powtarzalności kodu nawigacji na wielu podstronach.

## Zawartość laboratorium

### 1. Semantyczna Stopka (`footer`)
* **Struktura**: Dodanie do wszystkich plików (`index.html`, `map.html`, `contact.html`) znacznika `<footer>` zawierającego informacje o prawach autorskich.
* **Stylowanie**: Wykorzystanie modelu **Flexbox** (`display: flex; justify-content: center;`) w pliku `style.css` w celu idealnego wyśrodkowania treści stopki.
* **Dobre praktyki**: Użycie znacznika `<span>` wewnątrz stopki dla lepszej kontroli nad formatowaniem tekstu.

### 2. Dynamiczna Nawigacja (`navbar.js`)
* **Problem redundancji**: Rozwiązanie problemu kopiowania tego samego kodu menu HTML na każdą podstronę.
* **Implementacja JS**:
    * Stworzenie zmiennej przechowującej strukturę menu w formacie HTML (z wykorzystaniem klas Bootstrapa).
    * Wykorzystanie metody `document.querySelector(".navbar")` do odnalezienia kontenera w dokumencie.
    * Dynamiczne wstrzyknięcie zawartości za pomocą właściwości `.innerHTML`.
* **Zaleta**: Zmiana w jednym pliku JavaScript (`navbar.js`) powoduje automatyczną aktualizację menu na wszystkich podstronach serwisu.

### 3. Logika i Algorytmika w JS (`test.js`)
* **Pętle zagnieżdżone**: Implementacja skryptu generującego tabliczkę mnożenia w konsoli przeglądarki.
* **Formatowanie tekstu**: Wykorzystanie pętli `for` oraz `while` do odpowiedniego wyrównania kolumn (odstępy zależne od długości liczb), aby tabliczka była czytelna.

### 4. Integracja z Bootstrap 5
* **Komponenty**: Wykorzystanie klas `.nav`, `.nav-tabs` oraz `.nav-item` do stworzenia estetycznego menu w formie kart (tabs).
* **Responsywność**: Wykorzystanie klas pomocniczych (np. `.flex-fill` w formularzach) do lepszego zarządzania przestrzenią.

## Technologie
* **HTML5**: Semantyka (header, footer, section).
* **CSS3**: Zaawansowany Flexbox, stylowanie komponentów Bootstrap.
* **JavaScript (Vanilla JS)**: Manipulacja DOM, operacje na ciągach znaków, pętle i logika sterująca.

## Instrukcja uruchomienia
1. Pobierz pliki projektu, zachowując strukturę katalogów.
2. Skrypt `navbar.js` musi być dołączony w każdym pliku HTML przed zamknięciem znacznika `</body>`.
3. Otwórz `index.html` w przeglądarce.
4. Sprawdź konsolę deweloperską (F12), aby zobaczyć wynik działania skryptu `test.js` (tabliczka mnożenia).

---
*Opracował: Kamil Przyczynek*