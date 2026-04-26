# Narzędzia i Środowiska Programistyczne - Laboratorium 4 (Kotlin)

Czwarte laboratorium koncentruje się na zaawansowanych aspektach **programowania obiektowego** w języku Kotlin. Celem zajęć jest zrozumienie zasad hermetyzacji (encapsulation), pracy z konstruktorami oraz zarządzania stanem obiektów.

## Zawartość laboratorium

Projekt skupia się na implementacji klas modelujących rzeczywiste obiekty oraz systemy zarządzania danymi.

### 1. Zaawansowane modelowanie obiektów (`Main.kt`)
* **Hermetyzacja danych**: Wykorzystanie modyfikatorów `private` do ukrywania wewnętrznych stanów (np. `speed`, `engineStarted`) i wystawianie publicznych interfejsów (metody `run()`, `checkSpeed()`).
* **Logika biznesowa**: 
    * Implementacja warunków sprawdzających – np. przyspieszanie pojazdu (`incSpeed`) jest możliwe tylko przy uruchomionym silniku.
    * Zarządzanie cyklem życia obiektu poprzez metody `engineStart()` i `engineStop()`.
* **Interakcja**: Testowanie obiektów w funkcji `main`, symulowanie ruchu pojazdów różnych marek (Audi, Tesla, BMW).

### 2. Praca z kolekcjami i modelowanie logiki (`ManageStudent`)
* **Obiekty złożone**: Klasa zarządzająca listą studentów (`MutableList<ManageStudent>`).
* **Przetwarzanie danych**:
    * Obliczanie średniej ocen (`avg`).
    * Logika warunkowa – wyznaczanie statusu zaliczenia (`failed`) na podstawie progów punktowych.
* **Typy danych**: Praca z typami zmiennoprzecinkowymi (`Float`) do precyzyjnego modelowania ocen.

## Kluczowe pojęcia OOP w Kotlinie

* **Konstruktory**: Wykorzystanie konstruktorów głównych do szybkiej inicjalizacji właściwości klas.
* **Modyfikatory dostępu**:
    * `private`: Blokuje dostęp do pól spoza klasy, chroniąc dane przed niepożądaną modyfikacją.
    * `public`: (Domyślny) Pozwala na interakcję z obiektem przez inne części programu.
* **Metody (Funkcje członkowskie)**: Definiowanie zachowań obiektów.
* **Interpolacja napisów**: dynamiczne budowanie komunikatów o stanie obiektów za pomocą składni `${obiekt.metoda()}`.

## Instrukcja uruchomienia

1. Otwórz plik `Main.kt` w środowisku **IntelliJ IDEA** lub innym kompilatorze Kotlina.
2. Skompiluj projekt.
3. Uruchom funkcję `main`, aby zaobserwować proces tworzenia obiektów, uruchamiania silników oraz zmiany prędkości pojazdów widoczne w konsoli systemowej.

---
*Opracował: Kamil Przyczynek*