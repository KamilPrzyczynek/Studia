# Programowanie Systemów Mobilnych – Projekt Kalkulator

Repozytorium zawiera implementację w pełni funkcjonalnego kalkulatora mobilnego na platformę Android. Projekt skupia się na zaawansowanej obsłudze cyklu życia aktywności oraz parsowaniu wyrażeń matematycznych.

##  Funkcjonalności Aplikacji

### 1. Interfejs Użytkownika (UI/UX)
* **Dual Layout**: Osobne definicje wyglądu dla trybu portretowego (`portrait`) oraz poziomego (`landscape`), zapewniające optymalne wykorzystanie przestrzeni ekranu.
* **Material Design**: Kolorystyka dobrana zgodnie z wytycznymi Google Material Color, zapewniająca wysoką estetykę i czytelność.
* **Personalizacja**: Dostosowana ikona aplikacji, unikalny font oraz dopracowane detale wizualne przycisków.

### 2. Zaawansowana Logika Obliczeń
* **Wielodziałaniowość**: Aplikacja pozwala na wprowadzanie złożonych wyrażeń (np. `2+2*2`) zamiast prostych operacji dwuargumentowych.
* **Biblioteka mXparser**: Wykorzystanie silnika `org.mariuszgromada.math` do precyzyjnego parsowania i obliczania ciągów znaków jako wyrażeń matematycznych.

### 3. Zarządzanie Stanem (Lifecycle)
* **Zachowanie danych**: Pełna implementacja mechanizmów `onSaveInstanceState` oraz `onRestoreInstanceState`. 
* **Rotacja ekranu**: Zmiana orientacji urządzenia z pionowej na poziomą nie powoduje czyszczenia ekranu ani utraty aktualnie wpisanego wyrażenia lub wyniku.

---

##  Technologie i Biblioteki

* **Język**: Java / Android SDK
* **Parsowanie matematyczne**: mXparser (org.mariuszgromada.math)
* **Layout**: XML (Resources: layout-port, layout-land)
* **Zarządzanie stanem**: Bundle (outState, savedInstanceState)

---

##  Konfiguracja i Instalacja

### Dodawanie biblioteki mXparser
Aby silnik obliczeniowy działał poprawnie, w pliku `build.gradle` (Module: app) dodano odpowiednią zależność.

### Przykład użycia w kodzie:
```java
Expression e = new Expression(wpisanyTekst);
double wynik = e.calculate();