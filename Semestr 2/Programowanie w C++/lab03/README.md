# Programowanie w C++ - Laboratorium 3

Trzeci zestaw zadań koncentruje się na mechanizmach trwałego przechowywania danych. Programy realizują operacje zapisu i odczytu danych przy użyciu plików tekstowych oraz binarnych, z wykorzystaniem biblioteki `<fstream>`.

## Zawartość laboratorium

Projekt obejmuje dwa główne podejścia do obsługi strumieni plikowych:

### 1. Operacje na plikach tekstowych (`kamil_Przyczynek_LC2_operacje_na_plikachv1.cpp`)
* **Zapis sformatowany**: Wykorzystanie klasy `fstream` do zapisu różnych typów danych (char, int, double, string) do pliku tekstowego `dane_testowe.txt`.
* **Przetwarzanie matematyczne**: Automatyczne obliczanie pierwiastków (`sqrt`) oraz potęg (`pow`) i zapisywanie wyników do pliku.
* **Obsługa tablic**: Implementacja zapisu tablic statycznych oraz dynamicznych (alokowanych przez `new`) w formie czytelnych ciągów znaków.
* **Odczyt danych**: Mechanizm otwierania pliku w trybie `ios::in` wraz z kontrolą błędów (`plik.good()`) i wyświetlaniem zawartości w konsoli.

### 2. Przetwarzanie plików binarnych (`kamil_Przyczynek_LC2_operacje_na_plikach_bin.cpp`)
* **Zapis binarny**: Wykorzystanie metody `.write()` do bezpośredniego zrzutu pamięci obiektów różnych typów (long long, short, float, double) do pliku `test.bin`.
* **Zalety formatu binarnego**: Praca na surowych danych, co zapewnia mniejszy rozmiar plików i szybszy dostęp w porównaniu do formatu tekstowego.
* **Odczyt binarny**: Implementacja metody `.read()` z rzutowaniem wskaźników na `(char*)`, co pozwala na precyzyjne odtworzenie struktury danych z pliku.
* **Dynamiczne struktury binarne**: Zapis i odczyt tablic o zmiennej długości, gdzie wielkość tablicy jest zapisywana jako nagłówek przed samymi danymi.

## Technologie i biblioteki

* **Język**: C++11/C++14
* **Strumienie plikowe**: `<fstream>` (`ifstream`, `ofstream`)
* **Matematyka**: `<cmath>`
* **Kontenery**: `<string>`, `<vector>`

## Instrukcja kompilacji

Każdy z modułów można skompilować oddzielnie:

```bash
# Kompilacja operacji tekstowych
g++ kamil_Przyczynek_LC2_operacje_na_plikachv1.cpp -o pliki_tekstowe

# Kompilacja operacji binarnych
g++ kamil_Przyczynek_LC2_operacje_na_plikach_bin.cpp -o pliki_binarne