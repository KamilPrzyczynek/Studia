# Metody Numeryczne - Laboratorium 3

Trzecie laboratorium koncentruje się na praktycznym zastosowaniu **algebry macierzowej** oraz **transformacji liniowych** w przetwarzaniu sygnałów. Programy realizowane w środowisku MATLAB/Octave obejmują rozwiązywanie układów równań liniowych oraz analizę częstotliwościową sygnału mowy.

## Zawartość laboratorium

Projekt podzielony jest na dwie główne części: obliczeniową oraz aplikacyjną.

### 1. Rozwiązywanie układów równań liniowych (Zadanie 3.2)
* **Modelowanie obwodów**: Sformułowanie macierzy oporności $A$ oraz wektora wymuszeń $b$ dla układu elektrycznego z wieloma oczkami.
* **Metody numeryczne**: Porównanie czterech metod rozwiązywania układów równań $Ax = b$:
    * Macierz odwrotna: `inv(A) * b`.
    * Pseudoodwrotność Moore’a-Penrose’a: `pinv(A) * b`.
    * Operator dzielenia lewostronnego: `A \ b` (metoda eliminacji Gaussa).
    * Wzory Cramera: implementacja pętli wyliczającej wyznaczniki macierzy pomocniczych `det(Ak)`.

### 2. Transformacja macierzowa sygnału (Zadanie 3.4)
* **Analiza kosinusowa**: Implementacja ortogonalnej macierzy transformacji $A$ opartej na funkcjach cosinus.
* **Przetwarzanie sygnału (Analiza)**: Projekcja sygnału mowy `x(n)` na bazę transformaty w celu uzyskania współczynników `y(k)`.
* **Modyfikacja w dziedzinie transformaty**: Selekcja konkretnych rzędów macierzy oraz filtrowanie współczynników (zerowanie wartości poza wybranym zakresem `keep_range`).
* **Rekonstrukcja (Synteza)**: Wykorzystanie macierzy transponowanej $P^T$ do odtworzenia sygnału czasowego `xback(n)` i porównanie go z oryginałem za pomocą odsłuchu `soundsc`.

## Wykorzystane narzędzia i techniki

* **Środowisko**: MATLAB / Octave.
* **Operacje macierzowe**: Mnożenie macierzowe, transpozycja, wyznaczniki, odwracanie macierzy.
* **Cyfrowe Przetwarzanie Sygnałów (DSP)**: Wczytywanie plików audio (`audioread`), analiza wizualna przebiegów czasowych i widmowych.

## Instrukcja uruchomienia

1. Upewnij się, że w folderze roboczym znajduje się plik dźwiękowy `mowa.wav`.
2. Uruchom skrypt `metody3rodzial.m`.
3. Skrypt wygeneruje serię wykresów:
    * Oryginalny sygnał mowy.
    * Współczynniki po transformacji.
    * Sygnał po rekonstrukcji z ograniczonego pasma.
4. Program zatrzyma się (`pause`) po wyświetleniu wyników rozwiązań układu równań, umożliwiając ich analizę w konsoli przed przejściem do odsłuchu audio.

---
*Opracował: Kamil Przyczynek*