# Programowanie Reaktywne - Laboratorium 7

## Opis projektu
Siódme laboratorium stanowiło wprowadzenie do tworzenia nowoczesnych interfejsów użytkownika przy użyciu biblioteki **ReactJS**. Celem zajęć było zapoznanie się ze strukturą projektu React, mechanizmem komponentów klasowych oraz zarządzaniem stanem aplikacji (`state`). W ramach ćwiczeń stworzono aplikację licznika, która reaguje na akcje użytkownika w sposób reaktywny.

## Zawartość laboratorium

### 1. Konfiguracja środowiska i struktura projektu
* **Inicjalizacja**: Uruchomienie pierwszej aplikacji React przy użyciu menedżera pakietów `npm` (`npm install`, `npm start`).
* **Analiza struktury**: Zrozumienie roli kluczowych plików:
    * `index.js` – punkt wejścia aplikacji, renderowanie głównego komponentu w drzewie DOM.
    * `App.js` – główny komponent kontenerowy.
    * `package.json` – zarządzanie zależnościami i skryptami projektu.

### 2. Tworzenie Komponentów (`Counter.jsx`)
* **Komponenty klasowe**: Implementacja komponentu `Counter` rozszerzającego `React.Component`.
* **Renderowanie**: Wykorzystanie metody `render()` do definiowania struktury interfejsu przy użyciu składni JSX.
* **Integracja z Bootstrap**: Wykorzystanie klas CSS (np. `.badge`, `.btn`, `.primary-2`) do stylowania elementów licznika.

### 3. Logika Reaktywna i Zarządzanie Stanem
* **State Management**: Definicja obiektu `state` przechowującego wartość licznika (`count`).
* **Metody obsługi zdarzeń**:
    * `incrementNumber` – zwiększanie wartości licznika przy użyciu `this.setState`.
    * `resetCount` – przywracanie wartości początkowej (0).
* **Dynamiczne wyświetlanie**: Implementacja metody `currentCount()`, która zmienia sposób prezentacji liczby (np. wyświetlanie słowa "Zero", gdy licznik wynosi 0).

### 4. Interakcja z DOM
* **Event Binding**: Podpięcie metod pod zdarzenia `onClick` w przyciskach HTML.
* **Wstrzykiwanie komponentów**: Rejestracja i wywołanie nowo stworzonego komponentu `Counter` w głównym pliku `index.js`.

## Technologie
* **ReactJS**: Komponenty, JSX, State i Props.
* **JavaScript (ES6)**: Klasy, funkcje strzałkowe.
* **npm**: Zarządzanie pakietami i uruchamianie serwera deweloperskiego.
* **Bootstrap 5**: Szybkie stylowanie komponentów UI.

## Instrukcja uruchomienia
1. Przejdź do folderu projektu w terminalu.
2. Zainstaluj niezbędne biblioteki:
   ```bash
   npm install