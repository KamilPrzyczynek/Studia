# Programowanie Reaktywne - Laboratorium 10

## Opis projektu
Dziesiąte laboratorium stanowiło rozwinięcie aplikacji opartej na bibliotece **ReactJS**. Głównym celem była refaktoryzacja kodu w celu utworzenia reużywalnych komponentów tabeli oraz implementacja dynamicznego routingu pozwalającego na wyświetlanie szczegółowych informacji o postach. Projekt kładzie nacisk na czystość kodu (DRY - Don't Repeat Yourself) oraz zaawansowaną obsługę nawigacji.

## Zawartość laboratorium

### 1. Reużywalna Tabela (`postsTable.jsx`)
* **Abstrakcja nagłówków**: Przeniesienie definicji kolumn do tablicy obiektów, co pozwala na łatwe dodawanie nowych danych bez modyfikacji struktury renderującej.
* **Komponenty potomne**: Rozbicie tabeli na mniejsze logiczne części: `TableHeader` (nagłówek z obsługą sortowania) oraz `TableBody` (renderowanie wierszy).
* **Integracja z Linkami**: Wykorzystanie komponentu `<Link>` z `react-router-dom`, aby tytuły postów prowadziły do ich indywidualnych stron szczegółów.

### 2. Zaawansowany Routing i Parametry
* **Dynamiczne ścieżki**: Konfiguracja routingu w `App.js` obsługująca parametry w adresie URL (np. `/posts/:id`).
* **Komponent PostDetails**: Stworzenie widoku wyświetlającego szczegóły konkretnego posta na podstawie przekazanego identyfikatora.
* **Programowe przejścia**: Wykorzystanie obiektu `history` do nawigacji użytkownika po wykonaniu określonych akcji (np. powrót do listy po zapisaniu formularza).

### 3. Paginacja i Logika Danych (`pagination.jsx`, `paginate.js`)
* **Dynamiczne dzielenie danych**: Wykorzystanie biblioteki `lodash` do precyzyjnego wycinania fragmentów tablicy postów na podstawie aktualnej strony (`currentPage`) i rozmiaru strony (`pageSize`).
* **Obsługa zdarzeń**: Przekazywanie funkcji `onPageChange` z komponentu nadrzędnego do nawigacji, zapewniając reaktywną zmianę widoku.

### 4. Obsługa Błędów i Strona 404 (`notFound.jsx`)
* **Fallback Route**: Implementacja mechanizmu przechwytującego nieistniejące adresy URL i przekierowującego użytkownika do dedykowanego komponentu "Not Found".

## Technologie
* **ReactJS**: Komponenty klasowe i funkcyjne, zaawansowane Props.
* **React Router DOM**: Dynamic Routing, Link, Switch, Redirect.
* **Lodash**: Zaawansowana manipulacja kolekcjami danych.
* **Bootstrap 5**: Stylowanie tabel i elementów nawigacyjnych.

## Instrukcja uruchomienia
1. Upewnij się, że masz zainstalowane wszystkie zależności:
   ```bash
   npm install