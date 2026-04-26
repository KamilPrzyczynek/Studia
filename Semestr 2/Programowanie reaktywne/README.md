# Programowanie Reaktywne - Podsumowanie Laboratoriów

Niniejsze repozytorium zawiera kompletny zestaw ćwiczeń realizowanych w ramach przedmiotu **Programowanie Reaktywne**. Projekt dokumentuje proces nauki od podstaw tworzenia struktury dokumentów HTML, przez zaawansowane stylowanie CSS, aż po programowanie logiczne w języku JavaScript i budowę nowoczesnych aplikacji w bibliotece ReactJS.

## Przegląd Laboratoriów

### Część I: Fundamenty Web Developmentu (HTML/CSS)
* **Laboratorium 1-2**: Wprowadzenie do struktury dokumentu HTML5 i kaskadowych arkuszy stylów (CSS). [cite_start]Nauka pracy z tekstem, grafiką oraz tworzenia formularzy kontaktowych z walidacją pól (email, radio, select)[cite: 7, 25, 82].
* **Laboratorium 3**: Optymalizacja struktury strony. Wprowadzenie do manipulacji obiektem DOM za pomocą JavaScript w celu dynamicznego generowania nawigacji (navbar) na wielu podstronach jednocześnie.

### Część II: Logika i Algorytmika (JavaScript)
* **Laboratorium 4 (Gra Memory)**: Praktyczne zastosowanie JavaScript w tworzeniu interaktywnej gry. Obsługa zdarzeń (Event Listeners), mierzenie czasu rozgrywki oraz wykorzystanie `localStorage` do zapisywania rekordów gracza.
* **Laboratorium 5 (Quiz)**: Budowa aplikacji testowej opartej na obiektach JSON. Zarządzanie stanem punktowym, dynamiczne renderowanie pytań i obsługa nawigacji "Dalej/Wstecz" bez przeładowywania strony.

### Część III: Nowoczesne interfejsy w ReactJS
* **Laboratorium 7-8**: Przejście na architekturę komponentową. Implementacja pierwszych komponentów klasowych i funkcyjnych. Zarządzanie stanem aplikacji za pomocą Hooków (`useState`) oraz przekazywanie danych przez `props`.
* **Laboratorium 9-10**: Zaawansowane funkcjonalności aplikacji typu Single Page (SPA). 
    * Pobieranie danych z zewnętrznych serwerów API.
    * Implementacja dynamicznej paginacji (dzielenie danych na strony).
    * Mechanizmy sortowania tabel przy użyciu biblioteki `lodash`.
    * Wykorzystanie `react-router-dom` do nawigacji pomiędzy widokami oraz obsługi parametrów w adresie URL.

## Wykorzystane Technologie i Biblioteki

* **Frontend**: HTML5, CSS3, JavaScript (ES6+).
* **Framework**: ReactJS (Komponenty funkcyjne, Hooks, Router).
* **Stylowanie**: Bootstrap 5 (Layout, UI components), Font Awesome (Ikony).
* **Narzędzia**: Lodash (manipulacja danymi), Web Storage API (trwałość danych).

## Struktura Projektu
Każde laboratorium zawiera dedykowane pliki źródłowe oraz arkusze stylów. Aby uruchomić projekty oparte na React, wymagane jest środowisko Node.js.

1. Pobierz repozytorium.
2. W folderach React (Lab 7-10) wykonaj komendę `npm install`.
3. Uruchom aplikację komendą `npm start`.

---
*Autor: Kamil Przyczynek*