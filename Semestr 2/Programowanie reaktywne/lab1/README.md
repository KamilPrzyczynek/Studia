# Programowanie Reaktywne - Laboratorium 1

Pierwsze laboratorium stanowi wprowadzenie do tworzenia struktur stron internetowych przy użyciu języka **HTML** oraz ich stylowania za pomocą arkuszy **CSS**. Celem zajęć było zapoznanie się z podstawowymi znacznikami, strukturą dokumentu HTML5 oraz osadzaniem zewnętrznych zasobów.

## Zawartość laboratorium

Projekt zawiera zestaw ćwiczeń realizujących proces od stworzenia prostego pliku tekstowego do budowy wielostronicowego serwisu z nawigacją i mapą.

### 1. Pierwsze kroki w HTML (`pierwsza_strona.html`)
* **Tworzenie struktury**: Budowa poprawnego dokumentu HTML zawierającego sekcje `<head>` oraz `<body>` [cite: 74-80].
* **Znaczniki treści**: Wykorzystanie znacznika akapitu `<p>` do wyświetlania tekstu na stronie[cite: 78].
* **Kodowanie**: Ustawienie kodowania znaków na **UTF-8**, aby zapewnić poprawne wyświetlanie polskich liter[cite: 28, 56].

### 2. Praca z tekstem i grafiką (`smoki.html`, `style1.css`)
* **Formatowanie tekstu**: Zastosowanie nagłówków `<h1>` oraz `<h3>` do hierarchizacji treści[cite: 217].
* **Osadzanie obrazów**: Wykorzystanie znacznika `<img>` wraz z atrybutami `src` (źródło) oraz `alt` (tekst alternatywny) [cite: 232-234].
* **Stylowanie wizualne**: 
    * Zmiana koloru tła za pomocą właściwości `background-color`[cite: 193].
    * Formatowanie rozmiaru obrazka i zastosowanie opływania tekstu (`float: left`).

### 3. Nawigacja i Menu (`index.html`, `style6.css`)
* **Listy nieuporządkowane**: Stworzenie menu nawigacyjnego przy użyciu znaczników `<ul>` i `<li>`[cite: 244].
* **Linki**: Wykorzystanie znacznika `<a>` do tworzenia hiperłączy między podstronami[cite: 280].
* **Pozycjonowanie poziome**: Zmiana sposobu wyświetlania elementów listy na poziomy za pomocą reguły `display: inline` w CSS[cite: 248, 286].

### 4. Osadzanie map i zaawansowane layouty (`map.html`, `style7.css`)
* **Integracja Google Maps**: Osadzenie interaktywnej mapy przy użyciu znacznika `<iframe>`[cite: 411].
* **Rozmiary niestandardowe**: Konfiguracja mapy do wymiarów 800x300 i rozciągnięcie jej na szerokość strony za pomocą CSS (`width: 100%`).
* **Box Model**: Zastosowanie marginesów wewnętrznych (`padding`) oraz ustawienie tła dla sekcji adresowej.

## Wykorzystane technologie

* **HTML5**: Semantyka i struktura strony.
* **CSS3**: Kaskadowe arkusze stylów (kolory, pozycjonowanie, layout).
* **IntelliJ IDEA**: Wykorzystane środowisko programistyczne do edycji kodu[cite: 86].

## Instrukcja uruchomienia

1. Pobierz wszystkie pliki `.html` oraz `.css` do jednego folderu.
2. Uruchom plik `index.html` w dowolnej przeglądarce internetowej (najlepiej dwukrotnie klikając lewym przyciskiem myszy)[cite: 155].
3. Skorzystaj z menu na górze strony, aby nawigować między podstronami "Home" i "Mapa".

---
*Opracował: Kamil Przyczynek*