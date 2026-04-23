# Programowanie w C++ - Laboratorium 8

Ósmy zestaw zadań koncentruje się na mechanizmie **dziedziczenia** (inheritance) oraz zarządzaniu prawami dostępu do składowych klas w hierarchii obiektowej. Programy demonstrują różnice między dostępem publicznym, chronionym i prywatnym oraz sposoby rozszerzania funkcjonalności klas bazowych.

## Zawartość laboratorium

Projekt obejmuje implementację wielopoziomowej struktury klas i analizę przepływu danych:

### 1. Hierarchia klas i dziedziczenie (`kamil_Przyczynek_LC2_klasy-dziedziczenie.cpp`)
* **Klasa Bazowa (`Bazowa`)**: Definiuje podstawowe pola danych (prywatne i chronione) oraz metody operujące na liczbach (obliczanie średniej).
* **Klasa Pochodna (`Pochodna`)**: Dziedziczy publicznie po klasie bazowej, rozszerzając ją o nowe metody (`Drukuj`, `UstawZmiennaChroniona`) oraz demonstrując dostęp do pól typu `protected`.
* **Klasa Nadpochodna (`Nadpochodna`)**: Wykorzystuje **dziedziczenie prywatne** (`private Pochodna`), co pozwala na ukrycie interfejsu klas wyższych przed światem zewnętrznym, przy zachowaniu dostępu dla własnych metod.

### 2. Zarządzanie dostępem i polimorfizm statyczny
* **Specyfikatory dostępu**: Praktyczne wykorzystanie `public`, `protected` oraz `private` w celu enkapsulacji logiki biznesowej.
* **Przesłanianie metod**: Implementacja własnych wersji metod w klasach pochodnych (np. metody `Drukuj`), które wywołują specyficzne zachowania dla danego poziomu hierarchii.
* **Wykorzystanie `this` i zakresów**: Użycie operatora zakresu `::` (np. `Bazowa::Drukuj()`) do precyzyjnego wywoływania metod z konkretnych klas w drzewie dziedziczenia.

## Technologie i biblioteki

* **Język**: C++11 / C++14 / C++17
* **Standardowe wejście/wyjście**: `<iostream>`
* **Matematyka i napisy**: `<cmath>`, `<string>`

## Instrukcja kompilacji

Program można skompilować przy użyciu kompilatora `g++`:

```bash
# Kompilacja modułu dziedziczenia
g++ kamil_Przyczynek_LC2_klasy-dziedziczenie.cpp -o lab08_dziedziczenie

# Uruchomienie programu
./lab08_dziedziczenie