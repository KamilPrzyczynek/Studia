# Metody Numeryczne - Laboratorium 4

Laboratorium czwarte poświęcone jest zaawansowanym metodom rozwiązywania układów równań liniowych ($Ax = b$) przy użyciu dekompozycji macierzowych (LU, QR, Cholesky) oraz metod iteracyjnych.

## Zawartość laboratorium

Projekt zawiera implementacje własnych funkcji dekompozycji oraz skrypty testujące ich poprawność i efektywność.

### 1. Dekompozycje macierzowe (Własne implementacje)
* **Dekompozycja LU (`myLU.m`)**: Rozkład macierzy na iloczyn macierzy dolnotrójkątnej (L) i górnotrójkątnej (U). 
* **Dekompozycja Cholesky’ego (`myChol.m`)**: Rozkład symetrycznej, dodatnio określonej macierzy na iloczyn macierzy dolnotrójkątnej i jej transpozycji ($A = LL^T$).
* **Dekompozycja QR**:
    * Metoda Grama-Schmidta (`myQR_GS.m`).
    * Transformacje Householdera (`myQR_Householder.m`).

### 2. Rozwiązywanie układów równań
* **Podstawianie w przód i wstecz (`zad4_9.m`)**: Wykorzystanie dekompozycji LU do rozwiązania układu równań bez bezpośredniego odwracania macierzy.
* **Rozwiązywanie metodą QR (`qr_solve.m`)**: Stabilne numerycznie rozwiązywanie układów przy użyciu rozkładu QR.
* **Metody Iteracyjne (`zad4_6.m`)**: Implementacja i analiza zbieżności metody Jacobiego (`fITER`).
* **Analiza stabilności (`zad4_2.m`)**: Porównanie metod `inv(A)`, `pinv(A)` oraz operatora `\` (backslash) pod kątem błędów numerycznych i zaburzeń danych.

### 3. Zastosowania praktyczne
* **Identyfikacja wag splotu (`zad4_11.m`)**: Wykorzystanie autokorelacji sygnału, macierzy Toeplitza oraz dekompozycji Cholesky’ego do wyznaczenia nieznanych wag filtru (splotu) na podstawie sygnału wejściowego i wyjściowego.

## Kluczowe zagadnienia numeryczne

* **Norma Frobeniusa**: Wykorzystywana do obliczania błędu przybliżenia macierzy (`err = norm(A - Ahat, 'fro')`).
* **Macierze rzadkie i strukturalne**: Praca z macierzami Toeplitza w przetwarzaniu sygnałów.
* **Stabilność numeryczna**: Porównanie wpływu małych zaburzeń macierzy $A$ na wynik końcowy w różnych metodach obliczeniowych.

## Instrukcja użytkowania

1. **Testowanie dekompozycji**: Skrypt `mylu2.m` pozwala na automatyczne porównanie autorskiej implementacji LU z wbudowaną funkcją MATLABa `lu()`.
2. **Rozwiązywanie równań**: Skrypty `zad4_x` wykonują konkretne zadania obliczeniowe. Przykładowo, uruchomienie `zad4_9.m` przeprowadzi pełny proces dekompozycji LU i rozwiązywania układu przez podstawianie.
3. **Wymagania**: Wszystkie pliki `.m` powinny znajdować się w tym samym folderze, aby funkcje pomocnicze były widoczne dla skryptów głównych.

---
*Opracował: Kamil Przyczynek*