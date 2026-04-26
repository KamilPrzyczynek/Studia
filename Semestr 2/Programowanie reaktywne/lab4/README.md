# Programowanie Reaktywne - Laboratorium 4

## Opis projektu
Czwarte laboratorium stanowiło podsumowanie zdobytej wiedzy z zakresu **HTML5**, **CSS3** oraz **JavaScript**. Celem zajęć było stworzenie w pełni funkcjonalnej gry logicznej typu **Memory (Gra w pamięć)**. Projekt wymagał zaawansowanej manipulacji strukturą DOM, obsługi zdarzeń (Event Listeners) oraz zarządzania stanem gry w czasie rzeczywistym.

## Zawartość laboratorium

### 1. Mechanika Gry (`script.js`)
* **Losowanie układu**: Implementacja algorytmu losującego kolory kart przy każdym rozpoczęciu gry za pomocą `Math.random()` i metody `splice()`.
* **Logika dopasowań**: 
    * System zapamiętywania aktualnie odkrytych kart w tablicy.
    * Sprawdzanie warunku zwycięstwa (porównywanie klas CSS wybranych elementów).
    * Blokowanie możliwości kliknięcia więcej niż dwóch kart jednocześnie.
* **Zarządzanie czasem**: Wykorzystanie obiektu `new Date().getTime()` do precyzyjnego pomiaru czasu rozgrywki.
* **Persistence (localStorage)**: Zapisywanie najlepszego wyniku (czasu rozwiązania) w pamięci przeglądarki, dzięki czemu wynik jest dostępny nawet po odświeżeniu strony.

### 2. Layout i Responsywność (`style.css`, `index.html`)
* **Dynamiczny Grid**: Wykorzystanie **Flexbox** z właściwością `flex-wrap: wrap`, aby karty automatycznie dopasowywały się do szerokości ekranu.
* **Media Queries**: Implementacja responsywności – zmiana układu kart w zależności od orientacji urządzenia (`portrait` vs `landscape`).
* **Stany wizualne**: Wykorzystanie klas CSS (`.hidden`, `.off`) do kontrolowania widoczności kolorów oraz oznaczania kart już odgadniętych.

### 3. Interfejs Użytkownika (UI)
* **Ekran startowy**: Implementacja okna modalnego/sekcji `.pop` z przyciskiem startu, która znika po rozpoczęciu gry.
* **Dynamiczne komunikaty**: Wyświetlanie najlepszego wyniku pobranego z `localStorage`.
* **Interakcja**: Wykorzystanie zdarzeń `click` do odkrywania kart oraz funkcji `setTimeout` do opóźnienia zakrycia błędnie wybranych par.

## Technologie
* **HTML5**: Semantyczna struktura gry.
* **CSS3**: Flexbox, Media Queries, pozycjonowanie elementów UI.
* **JavaScript (ES6)**: Tablice, operacje na czasie, obsługa zdarzeń, lokalna pamięć przeglądarki (Web Storage API).

## Instrukcja uruchomienia
1. Otwórz plik `index.html` w przeglądarce.
2. Kliknij przycisk "Rozpocznij grę!".
3. Znajdź wszystkie pary kolorów w jak najkrótszym czasie.
4. Twój najlepszy wynik zostanie zapisany i wyświetlony przy kolejnej próbie.

---
*Opracował: Kamil Przyczynek*