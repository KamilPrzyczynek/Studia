# Narzędzia i Środowiska Programistyczne - Projekt Kotlin

Projekt realizowany w ramach zajęć z **Narzędzi i Środowisk Programistycznych**. Skupia się na praktycznym zastosowaniu programowania obiektowego (OOP) w języku Kotlin, wykorzystując mechanizmy klas, enkapsulacji oraz zarządzania kolekcjami obiektów.

## Zawartość Projektu

Repozytorium zawiera implementacje klas modelujących rzeczywiste obiekty oraz systemy zarządzania danymi.

### 1. Modelowanie Obiektowe - Klasa `Car`
Klasa demonstruje zasady hermetyzacji danych poprzez wykorzystanie modyfikatorów dostępu (`private`, `public`):
* **Pola prywatne**: Marka, kolor, prędkość oraz stan silnika (`engineStarted`).
* **Metody publiczne**:
    * `engineStart()` / `engineStop()`: Zarządzanie stanem pracy silnika.
    * `run()`: Zwiększanie prędkości pojazdu (tylko przy włączonym silniku).
    * `checkSpeed()`: Bezpieczny odczyt aktualnej prędkości.
* **Logika**: Prędkość może być zwiększana tylko wtedy, gdy silnik jest uruchomiony.

### 2. Zarządzanie Studentami - Klasa `ManageStudent`
Klasa służąca do operowania na listach studentów i ich wynikach naukowych:
* **Przechowywanie danych**: Obsługa ocen (`Float`) oraz statusu zaliczenia.
* **Funkcjonalności**:
    * `avg()`: Obliczanie średniej ocen studenta.
    * `failed()`: Weryfikacja statusu zaliczenia na podstawie progu punktowego (np. średnia >= 2.0).
    * `add()`: Metoda przygotowana do dodawania nowych rekordów do listy.

## Wykorzystane Mechanizmy Języka Kotlin

* **Properties**: Wykorzystanie `val` (tylko do odczytu) oraz `var` (zmienne).
* **Konstruktory**: Skrócona składnia definiowania pól klasy bezpośrednio w nagłówku.
* **Kolekcje**: Praca z `MutableList` do dynamicznego zarządzania zbiorami obiektów.
* **Modyfikatory dostępu**: Kontrola widoczności metod i pól w celu zapewnienia spójności stanu obiektów.

## Przykład użycia (Funkcja `main`)

W sekcji `fun main()` znajduje się kod testowy, który:
1. Inicjalizuje obiekty klasy `Car` (np. Audi, Tesla, BMW).
2. Demonstruje próby modyfikacji pól publicznych vs prywatnych.
3. Wykonuje symulację przyspieszania pojazdu i wypisuje aktualny stan licznika na konsolę.

```kotlin
fun main() {
    val audi = Car("Audi", "SILVER")
    audi.engineStart() // Uruchomienie silnika
    audi.run()         // Przyspieszenie
    println("Audi ma na liczniku ${audi.checkSpeed()} km/h")
}