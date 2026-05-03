# Analiza i Przetwarzanie Sygnałów – Laboratorium 3

Repozytorium zawiera skrypty MATLAB zrealizowane w ramach trzeciego laboratorium, dotyczącego zagadnień ortogonalności sygnałów, operacji macierzowych oraz transformat dyskretnych (Haara, Hadamarda, Walsha).

## Zawartość Laboratorium

### 1. Ortogonalność Wektorów i Sygnałów
Celem zadań było sprawdzenie warunków ortogonalności w przestrzeni euklidesowej.
* **Iloczyn skalarny**: Wykorzystanie funkcji `dot()` oraz sumowania iloczynów elementów (`sum(v1 .* conj(v2))`) do weryfikacji, czy wektory są do siebie prostopadłe (wynik bliski zero).
* **Macierze Ortogonalne**: Badanie właściwości macierzy, w których macierz odwrotna jest równa macierzy transponowanej ($inv(A) = A^T$).

### 2. Bazy Ortonormalne i Transformacje
W ramach ćwiczeń zaimplementowano i przeanalizowano macierze transformacji o rozmiarach 8x8, zbudowane z wektorów ortonormalnych.
* **Przeskalowanie (Normalizacja)**: Każdy z wektorów bazowych został przeskalowany o współczynnik $1/\sqrt{N}$ (w tym przypadku $1/\sqrt{8}$), aby zapewnić jednostkową długość wektorów.
* **Konstrukcja Macierzy A**: Złożenie macierzy z ośmiu wektorów o specyficznych sekwencjach zmian znaków, co odpowiada bazom stosowanym w cyfrowym przetwarzaniu sygnałów.

### 3. Transformacje Dyskretne
Skrypty zawierają teoretyczne i praktyczne odniesienia do popularnych transformat:
* **Transformacja Haara**: Wykorzystywana w kompresji obrazów (np. JPEG 2000), charakteryzująca się zachowaniem długości i ortogonalności.
* **Transformacja Hadamarda**: Stosowana w algorytmach kompresji, oparta na macierzach kwadratowych o elementach +1 i -1.
* **Transformacja Walsha**: Wykorzystywana w analizie sygnałów i transmisji danych.

## Wykaz Plików

| Plik | Opis |
| :--- | :--- |
| `cps_03.m` | Podstawowe operacje na wektorach ortogonalnych i weryfikacja właściwości macierzy identycznościowej oraz ortogonalnej. |
| `lab03zad2.m` | Implementacja pełnej macierzy 8x8 opartej na wektorach bazowych, normalizacja wektorów oraz wizualizacja macierzy jako obrazów. |

## Wykorzystane Narzędzia i Funkcje

* **Operacje macierzowe**: `inv()` (odwracanie), `A'` (transpozycja), `eye()` (macierz jednostkowa).
* **Weryfikacja**: `isequal()` – funkcja służąca do sprawdzania tożsamości dwóch macierzy (np. porównanie macierzy odwrotnej z transponowaną).
* **Wizualizacja**: