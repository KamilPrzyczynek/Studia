# Podstawy Programowania w C - Laboratorium 2: Pętle i Algorytmy Iteracyjne

Repozytorium zawiera rozwiązania zadań z drugiego laboratorium, skupiające się na wykorzystaniu pętli `for` do generowania kształtów geometrycznych w konsoli (ASCII Art).

## Spis zadań

1. **Kwadrat z gwiazdek**: Generowanie pełnego kwadratu o boku `n` przy użyciu zagnieżdżonych pętli.
2. **Trójkąt prostokątny**: Rysowanie trójkąta, w którym każda kolejna linia posiada o jedną gwiazdkę więcej niż poprzednia.
3. **Choinka (Piramida)**: Algorytm rysujący symetryczną piramidę z gwiazdek. Program dynamicznie oblicza liczbę spacji oraz gwiazdek w każdym rzędzie na podstawie podanej wysokości.
4. **Wielokierunkowy Trójkąt**: Rozbudowany algorytm pozwalający na wybór kierunku rysowania figury (w zależności od zmiennej sterującej).

## Wykorzystane konstrukcje
* **Pętle zagnieżdżone**: Wykorzystanie pętli wewnątrz pętli do obsługi dwuwymiarowego układu współrzędzyn (wiersze i kolumny).
* **Funkcja `putchar()`**: Alternatywa dla `printf()` służąca do wypisywania pojedynczych znaków.
* **Formatowanie wyjścia**: Manipulacja znakami nowej linii `\n` oraz spacjami w celu uzyskania odpowiednich kształtów.

## Instrukcja kompilacji
Kod można skompilować za pomocą dowolnego kompilatora C:

```bash
gcc lab2.c -o lab2
./lab2