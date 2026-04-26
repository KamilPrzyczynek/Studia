# Laboratorium 9: ReactJS - Cykl życia komponentu, Paginacja i Sortowanie

## Opis projektu
Projekt realizowany w ramach przedmiotu **Programowanie Reaktywne**. Głównym celem laboratorium było zapoznanie się z cyklem życia komponentów klasowych (metoda `componentDidMount`), obsługą zewnętrznych zapytań API (fetch) oraz implementacją zaawansowanych funkcjonalności tabeli, takich jak paginacja i dynamiczne sortowanie danych przy użyciu biblioteki `lodash`.

## Funkcjonalności
- **Pobieranie danych z API:** Automatyczne ładowanie wpisów (posts) z lokalnego serwera API (`http://localhost:3001/api/posts`).
- **Paginacja:** Podział danych na strony (domyślnie 4 wpisy na stronę) z interaktywnym paskiem nawigacji.
- **Sortowanie:** Możliwość sortowania danych w tabeli według kolumn (Tytuł, Treść) w porządku rosnącym i malejącym.
- **Dynamiczne Ikony:** Wyświetlanie ikon kierunku sortowania (`fa-sort-asc`, `fa-sort-desc`) dzięki integracji z Font Awesome.
- **Routing:** Obsługa nawigacji między stroną główną (`Home`), postami (`Posts`) oraz stroną błędu 404 (`NotFound`).
- **Usuwanie:** Możliwość lokalnego usuwania elementów z widoku tabeli.

## Struktura plików
- `src/components/posts.jsx` – główny komponent zarządzający stanem postów, paginacją i sortowaniem.
- `src/components/postsTable.jsx` – komponent odpowiedzialny za renderowanie struktury tabeli.
- `src/components/common/pagination.jsx` – generyczny komponent paginacji.
- `src/utils/paginate.js` – funkcja pomocnicza wykorzystująca `lodash` do wycinania odpowiednich fragmentów tablicy danych.
- `src/components/navbar.jsx` – nawigacja oparta o `react-router-dom`.

## Technologia
- **ReactJS** (komponenty klasowe i funkcyjne)
- **Bootstrap** (stylowanie i układ)
- **Lodash** (operacje na danych)
- **Font Awesome 4.7.0** (ikony)
- **React Router** (nawigacja)

## Instalacja i uruchomienie

1. **Klonowanie i instalacja zależności:**
   ```bash
   npm install