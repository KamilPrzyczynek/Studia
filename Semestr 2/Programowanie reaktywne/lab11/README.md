# Programowanie reaktywne - kolokwium 2 - Grupa 3


## 1. Instalacja i uruchomienie projektu


## 2. Dodanie komponentu "home"

W tym zadaniu należy zbudować komponent Home, który będzie będzie służyć jako strona główna aplikacji.
Strona ta powinna wyświetlać element div z miejscem na 2 kontrolki i przycisk (zadanie 6).

## 3. Routing  

W zadaniu należy dodać routing do aplikacji. Strona główna powinna przekierowywać na komponent HOME.

Ścieżka 'posts' powinna przekierowywać na komponent z postami.

## 4. Dodanie nawigacji.

W tym zadaniu należy dodać nawigację - komponent klasowy XYnavbar.jsx (XY - inicjały).
Komponent będzie zawierał menu, za pomocą którego będzie można przechodzić pomiędzy komponetnami posts oraz XYhome.
Menu powinno być widoczne w każdym widoku.

## 5. Wyświetlenie danych pobranych w komponencie posts. Dodanie komponentu Post

W tym zadaniu należy wyświetlić dane w elemencie Card - bootstrap.
W komponencie posts przygotowany jest element card. Zadaniem jest wyświetlenie podpisu grafiki oraz tekstu w tym komponencie w odpowiednich znacznikach.
Np. w img - item.image

Następnie kod odpowiedzialny za wyświetlenie postów (Card) należy przenieść do nowego komponentu Post, który otrzyma dane jako props i zostanie wywołaby tyle razy, ile postów zostanie pobranych.

## 6. Obsłużenie akcji

W komponencie HOME należy dodać dwie kontrolki typu number oraz przycisk - policz.

Po wpisyaniu w obie kontrolki liczb i kliknięciu przycisku pojawi się obok wynik dodawania.
