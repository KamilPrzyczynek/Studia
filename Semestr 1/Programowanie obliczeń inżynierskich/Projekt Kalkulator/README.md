# Projekt Kalkulator Naukowy - MATLAB GUIDE

Kompletny projekt interaktywnego kalkulatora naukowego stworzony w środowisku MATLAB przy użyciu narzędzia **GUIDE** (Graphical User Interface Development Environment).

## 🚀 Funkcje projektu

Kalkulator oferuje szeroki zakres operacji inżynierskich i programistycznych:

### Podstawowe operacje arytmetyczne
* Dodawanie (`+`), odejmowanie (`-`), mnożenie (`*`), dzielenie (`/`).
* Obliczanie potęg (`^`) oraz pierwiastkowanie (`sqrt`).
* Obsługa priorytetów działań za pomocą nawiasów `(` `)`.

### Funkcje naukowe i inżynierskie
* **Trygonometria**: Obliczanie funkcji `sin`, `cos`, `tan` (z automatyczną konwersją stopni na radiany: `pi/180*x`).
* **Stałe**: Szybki dostęp do liczby $\pi$.
* **Logarytmy**: Obsługa operacji logarytmicznych.
* **Procenty**: Przetwarzanie operacji procentowych.

### Konwerter systemów liczbowych
Kalkulator posiada wbudowane funkcje dla programistów:
* **DEC 2 HEX**: Konwersja liczb dziesiętnych na szesnastkowe.
* **DEC 2 BIN**: Konwersja liczb dziesiętnych na binarne.
* **BIN 2 DEC**: Konwersja liczb binarnych na dziesiętne.
* *Automatyczna blokada klawiatury numerycznej przy wyborze trybów konwersji (np. blokada cyfr 2-9 przy trybie binarnym).*

## 🛠 Struktura Techniczna

Projekt opiera się na mechanizmie **Callbacks** (funkcji zwrotnych), które dynamicznie budują wyrażenie tekstowe wyświetlane w polu `txthasil`.

* **Silnik obliczeniowy**: Wykorzystanie funkcji `eval()`, która interpretuje zbudowany ciąg znaków jako wyrażenie matematyczne MATLAB.
* **Zarządzanie interfejsem**: Dynamiczne włączanie/wyłączanie przycisków (`set(handles.button, 'enable', 'off')`) w zależności od wybranego trybu pracy.
* **Globalne zmienne**: Użycie zmiennej globalnej `jj` do zarządzania formatowaniem liczb (np. obsługa kropki dziesiętnej).

##  Zawartość projektu
* `kalulatorfinish.m` - Główny kod źródłowy obsługujący logikę kalkulatora.
* `kalulatorfinish.fig` - Plik graficzny interfejsu użytkownika (GUI).

##  Instrukcja uruchomienia
1. Pobierz oba pliki (`.m` oraz `.fig`) do jednego folderu.
2. Otwórz środowisko MATLAB.
3. Wpisz w oknie komend:
   ```matlab
   kalulatorfinish