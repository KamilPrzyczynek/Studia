# Narzędzia i Środowiska Programistyczne - Laboratorium 5 (Kotlin)

Piąte laboratorium skupia się na praktycznym zastosowaniu programowania obiektowego (OOP) do budowy prostych systemów zarządzania danymi oraz zaawansowanej interakcji między klasami.

## Zawartość laboratorium

Projekt składa się z dwóch głównych modułów tematycznych:

### 1. Modelowanie zachowań i stanu (`Klasa Car`)
Klasa `Car` demonstruje mechanizm hermetyzacji oraz kontroli dostępu do właściwości obiektu.
* **Stan**: Prywatne pola `speed` oraz `engineStarted` (silnik).
* **Metody**:
    * `engineStart()` / `engineStop()` – kontrola stanu silnika.
    * `run()` – wywołuje wewnętrzną, prywatną metodę `incSpeed()`.
    * **Logika**: Prędkość może rosnąć tylko wtedy, gdy silnik jest uruchomiony. Zatrzymanie silnika automatycznie zeruje prędkość.

### 2. System zarządzania studentami (`ManageStudent`)
Kompleksowy system operujący na liście obiektów klasy `Student` (zawierającej pola: `idx`, `firstName`, `lastName`, `mark`).

* **Analiza danych**:
    * `avg()` – obliczanie średniej ocen wszystkich studentów w kolekcji.
    * `failed()` – filtrowanie listy i zwracanie obiektów studentów, którzy nie uzyskali zaliczenia (ocena < 2.0).
* **Operacje na kolekcji (CRUD)**:
    * **Dodawanie (`add`)**: Wstawianie nowych obiektów do listy.
    * **Aktualizacja (`update`)**: Modyfikacja danych istniejącego studenta na podstawie numeru indeksu.
    * **Usuwanie (`remove`)**: Usuwanie studenta z listy na podstawie ID.

## Wykorzystane mechanizmy języka Kotlin

* **Data Management**: Użycie `MutableList` do dynamicznego zarządzania zbiorami obiektów.
* **Przeciążanie metod**: Implementacja `override fun toString()` w klasie `Student`, co pozwala na czytelne wypisywanie danych obiektu w konsoli.
* **Pętle i Filtrowanie**: Wykorzystanie pętli `for` oraz warunków logicznych do przetwarzania kolekcji.
* **String Interpolation**: Zaawansowane formatowanie komunikatów wyjściowych (np. `"${student.firstName} ${student.lastName}"`).

## Przykład użycia

W funkcji `main` przeprowadzany jest pełny test scenariusza:
1. Inicjalizacja listy studentów.
2. Obliczenie średniej i wyświetlenie osób z oceną niedostateczną.
3. Dodanie nowego studenta i aktualizacja danych istniejącego.
4. Usunięcie rekordu i weryfikacja końcowej listy.

---
*Opracował: Kamil Przyczynek*