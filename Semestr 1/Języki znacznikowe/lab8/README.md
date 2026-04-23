# Języki Znacznikowe - Laboratorium 8: Semantyka HTML5, Multimedia i Układ Strony

Ósme laboratorium poświęcone jest tworzeniu nowoczesnej struktury witryny internetowej przy użyciu znaczników semantycznych HTML5 oraz wprowadzaniu multimediów (audio/wideo). Skupiono się również na zaawansowanym pozycjonowaniu elementów za pomocą stylów CSS.

## Zakres materiału

* **Semantyczne znaczniki HTML5**: Podział strony na logiczne sekcje, co poprawia dostępność i SEO:
    * `<header>`: Nagłówek strony zawierający tytuł i nawigację.
    * `<nav>`: Sekcja przeznaczona na linki nawigacyjne.
    * `<main>`: Główna treść dokumentu (powinna występować raz na stronę).
    * `<section>` & `<article>`: Organizacja treści wewnątrz kontenera głównego.
    * `<aside>`: Panel boczny (pasek boczny) na treści uzupełniające.
    * `<footer>`: Stopka strony.
* **Multimedia w HTML5**:
    * `<audio>`: Osadzanie plików dźwiękowych z interfejsem sterowania (`controls`).
    * `<video>`: Osadzanie plików wideo z możliwością dopasowania szerokości i kontroli odtwarzania.
* **Stylizacja CSS (Internal Stylesheet)**:
    * Wykorzystanie selektora uniwersalnego `*` do resetowania marginesów i dopełnień.
    * Pozycjonowanie elementów przy użyciu właściwości `float` (np. podział na `main` 70% i `aside` 30%).
    * Zarządzanie przepływem dokumentu za pomocą `clear: both` w stopce.
    * Definiowanie kolorów tła (`background-color`) oraz wymiarów elementów.

## Struktura wizualna projektu

Plik `lab08.html` implementuje klasyczny układ kolumnowy:
* **Góra**: Nagłówek z zagnieżdżoną nawigacją.
* **Środek**: 
    * Lewa kolumna (`main`): Zawiera artykuły tekstowe oraz odtwarzacz audio.
    * Prawa kolumna (`aside`): Zawiera odtwarzacz wideo z wywiadem pomeczowym.
* **Dół**: Pełnowymiarowa stopka strony.

## Instrukcja uruchomienia

1. Upewnij się, że w folderze z projektem znajdują się pliki multimedialne:
    * `Ludwig Van Beethoven - V Symfonia.mp3`
    * `MESSI PO MECZU Z POLSKĄ.mp4`
2. Otwórz plik `lab08.html` w przeglądarce.
3. Zaobserwuj, jak zmiana szerokości okna wpływa na układ kolumn (dzięki zastosowaniu wartości procentowych).

---