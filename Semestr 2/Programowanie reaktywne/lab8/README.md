# Programowanie Reaktywne - Laboratorium 8

## Opis projektu
Ósme laboratorium koncentrowało się na zaawansowanych aspektach biblioteki **ReactJS**. Głównym celem było przekształcenie statycznego quizu (z poprzednich zajęć) na architekturę komponentową, naukę przekazywania danych za pomocą **propsów**, zarządzanie stanem za pomocą **Hooków** oraz warunkowe renderowanie elementów interfejsu.

## Zawartość laboratorium

### 1. Architektura Komponentowa
* **Dekompozycja UI**: Podział aplikacji na mniejsze, reużywalne komponenty funkcyjne:
    * `QuizComponent.jsx` – główny kontener zarządzający logiką i stanem.
    * `Question.jsx` – wyświetlanie treści pytania i postępu.
    * `Answers.jsx` oraz `Table.jsx` – struktura listy odpowiedzi.
    * `TableRow.jsx` – pojedynczy wiersz odpowiedzi z własną logiką stylowania.
    * `Actions.jsx` – przyciski nawigacyjne (Next/Prev).
    * `Results.jsx` – wyświetlanie aktualnego wyniku punktowego.

### 2. Zarządzanie Stanem i Hooki (`useState`)
* **Dynamiczny stan**: Wykorzystanie hooka `useState` do zarządzania:
    * Indeksem bieżącego pytania (`currentIndex`).
    * Obiektem aktualnego pytania.
    * Liczbą zdobytych punktów (`currentPoints`).
    * Uprawnieniami do udzielenia odpowiedzi (`allowToChoose`).
    * Informacją o zaznaczonej odpowiedzi i jej wariancie kolorystycznym (`markedAnswer`).

### 3. Komunikacja między komponentami (Props)
* **Przekazywanie danych**: Przesyłanie informacji z komponentu nadrzędnego do podrzędnych (np. treść pytania do `Question`).
* **Przekazywanie funkcji**: Przesyłanie handlerów zdarzeń (np. `handleCheckAnswer`) w dół drzewa komponentów, co umożliwia reakcję głównego stanu na kliknięcia w głęboko zagnieżdżonych komponentach jak `TableRow`.

### 4. Logika Biznesowa i Stylowanie
* **Weryfikacja odpowiedzi**: Implementacja logiki sprawdzającej poprawność wyboru bezpośrednio w React.
* **Warunkowe klasy CSS**: Dynamiczne nadawanie klas Bootstrapa (`bg-success`, `bg-danger`) w zależności od tego, czy użytkownik wybrał poprawną opcję.
* **Inline Styles**: Wykorzystanie obiektów styli wewnątrz JSX do pozycjonowania kontenerów (np. `justifyContent: 'center'`).

### 5. Porównanie Komponentów
* Realizacja przykładów porównujących tradycyjne **komponenty klasowe** (`1-componentClass.jsx`) z nowoczesnymi **komponentami funkcyjnymi** wykorzystującymi hooki (`2-componentFunctional.jsx`).

## Technologie
* **ReactJS**: Functional Components, Hooks (useState), Props.
* **JSX**: Składnia łącząca HTML z logiką JavaScript.
* **Bootstrap 5**: Integracja biblioteki dla ostylowania list i przycisków.
* **JSON**: Przetwarzanie zewnętrznej bazy pytań.

## Instrukcja uruchomienia
1. Upewnij się, że masz zainstalowane zależności (`npm install`).
2. Dołącz bibliotekę Bootstrap w pliku `index.js`.
3. Uruchom projekt komendą:
   ```bash
   npm start