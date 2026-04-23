# Podstawy Programowania w C - Algorytmy i Kolokwium Zaliczeniowe

Repozytorium zawiera zbiór zadań przygotowawczych oraz rozwiązania z kolokwium zaliczeniowego z przedmiotu Podstawy Programowania. Kod obejmuje szeroki zakres tematów, od struktur kontrolnych po zaawansowaną manipulację pamięcią.

## Zawartość Repozytorium

### 1. Zadania Algorytmiczne (`zadanie1.c` - `zadanie4.c`)
Zbiór czterech zestawów zadań (wariantów), z których każdy zawiera 5 kluczowych problemów:
* **Zadanie 1 (Spotkanie z Ramą)**: Generowanie figur geometrycznych (ramki, kwadraty, krzyże) przy użyciu zagnieżdżonych pętli i warunków logicznych.
* **Zadanie 2 (Konwerter Międzywymiarowy)**: Implementacja systemów liczbowych. Konwersja liczb z systemu dziesiętnego na systemy o innych podstawach (np. 3 lub 5) i odwrotnie.
* **Zadanie 3 (W tę i nazad)**: Operacje na cyfrach liczby – obliczanie sumy cyfr w pętli `do-while`, odwracanie kolejności cyfr oraz analiza powtórzeń.
* **Zadanie 4 (Przekładnia Planetarna)**: Przetwarzanie tablic 15-elementowych. Filtrowanie danych (liczby parzyste/nieparzyste, podzielność), obliczanie średnich, iloczynów oraz sum warunkowych.
* **Zadanie 5 (Promocja Edia Xepmert)**: Symulacja systemu rabatowego. Sortowanie cen (algorytm bąbelkowy) i nakładanie progresywnych zniżek na produkty.

### 2. Kolokwium nr 2 (`kolos2.c`)
Rozwiązania zadań z kolokwium skupionego na mechanizmach niskopoziomowych:
* **Zadanie 1**: Przekazywanie różnych typów danych (`char`, `int`, `float`, `double`) do funkcji przez wskaźniki w celu ich modyfikacji (np. `sqrt`, `pow`, `abs`).
* **Zadanie 2**: Modyfikacja konkretnych komórek w tablicy dwuwymiarowej `[5][5]` za pomocą adresów pamięci.
* **Zadanie 3**: Algorytmiczne wypełnianie tablic o różnych rozmiarach (ciągi arytmetyczne, liczby naprzemienne).
* **Zadanie 4**: Zaawansowana praca na wskaźnikach tablicy `[5][8]` – wypełnianie obszaru pamięci między konkretnym wskaźnikiem "pierwszym" a "ostatnim".

## Wykorzystane Koncepcje
* **Wskaźniki**: Przekazywanie parametrów przez adres, arytmetyka wskaźników.
* **Tablice**: Jednowymiarowe i wielowymiarowe (macierze).
* **Algorytmy**: Sortowanie bąbelkowe, systemy liczbowe, analiza cyfr liczby.
* **Biblioteki**: `<stdio.h>`, `<math.h>` (wymaga flagi `-lm`), `<stdlib.h>`, `<time.h>`.

## Kompilacja i Uruchomienie
Wszystkie programy można skompilować za pomocą GCC. Ze względu na użycie biblioteki matematycznej, należy pamiętać o fladze `-lm`.

```bash
# Przykład dla zadań przygotowawczych
gcc zadanie1.c -o zadanie1 -lm
./zadanie1

# Przykład dla kolokwium
gcc kolos2.c -o kolos2 -lm
./kolos2