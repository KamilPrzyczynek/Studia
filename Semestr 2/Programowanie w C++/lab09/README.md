# Programowanie w C++ - Laboratorium 9

Dziewiąty zestaw zadań poświęcony jest **polimorfizmowi dynamicznemu** oraz zaawansowanym mechanizmom kontroli hierarchii klas wprowadzonym w standardzie C++11, takim jak słowa kluczowe `virtual`, `override` oraz `final`.

## Zawartość laboratorium

Projekt demonstruje zachowanie obiektów w czasie wykonywania programu (runtime) oraz mechanizmy bezpiecznego projektowania hierarchii klas:

### 1. Polimorfizm i Funkcje Wirtualne (`kamil_Przyczynek_LC2_lab09_poprawka.cpp`)
* **Wirtualne Destruktory**: Zastosowanie `virtual ~cBazowa()`, co jest kluczowe dla poprawnego zwalniania pamięci przy usuwaniu obiektów klas pochodnych poprzez wskaźnik na klasę bazową.
* **Metody Wirtualne i Nadpisywanie**: Wykorzystanie słowa kluczowego `override` przy metodzie `Pistolecik()`, co zapewnia kontrolę kompilatora nad poprawnością polimorfizmu.
* **Wskaźniki klas bazowych**: Demonstracja wywoływania metod specyficznych dla klas pochodnych (`cAmunicja`, `cZgon`) przy użyciu wskaźnika typu `cPistolet*`.

### 2. Mechanizmy Blokady i Finalizacji
* **Metody Finalne**: Użycie specyfikatora `final` przy metodzie `metodaFinalowaVirtualna()`, co uniemożliwia jej dalsze nadpisywanie w klasach potomnych.
* **Klasy Finalne**: Implementacja klasy `cBazowa2` oznaczonej jako `final`, co całkowicie blokuje możliwość dziedziczenia po tej klasie.
* **Obsługa błędów kompilacji**: W kodzie zawarto zakomentowane sekcje obrazujące sytuacje, w których naruszenie reguł `final` powoduje błędy na etapie budowania programu.

## Technologie i biblioteki

* **Język**: C++11 / C++14 / C++17 (wymagany standard C++11 dla `final` i `override`)
* **Standardowe wejście/wyjście**: `<iostream>`
* **Zarządzanie pamięcią**: Dynamiczna alokacja `new` / `delete`

## Instrukcja kompilacji

Program można skompilować przy użyciu kompilatora `g++` (pamiętając o fladze standardu):

```bash
# Kompilacja modułu polimorfizmu
g++ -std=c++11 kamil_Przyczynek_LC2_lab09_poprawka.cpp -o lab09_polimorfizm

# Uruchomienie programu
./lab09_polimorfizm