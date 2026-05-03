# Analiza i Przetwarzanie Sygnałów – Laboratorium 11

Repozytorium zawiera skrypty MATLAB zrealizowane w ramach jedenastego laboratorium, poświęconego projektowaniu i implementacji cyfrowych filtrów różniczkujących typu FIR (Finite Impulse Response).

## Zawartość Laboratorium

### 1. Projektowanie Filtra Różniczkującego FIR
Głównym celem zadań było stworzenie filtra, którego zadaniem jest numeryczne wyznaczenie pochodnej sygnału wejściowego:
* **Odpowiedź impulsowa**: Wykorzystanie teoretycznej definicji wag filtra różniczkującego $h(n) = \frac{\cos(\pi n)}{n}$ dla $n \neq 0$ oraz $h(0) = 0$[cite: 29].
* **Okienkowanie**: Zastosowanie okna Kaisera o parametrze $\beta = 10$ w celu zminimalizowania oscylacji (efektu Gibbsa) i wygładzenia charakterystyki filtra[cite: 29].
* **Alternatywne metody**: Porównanie z prostszymi definicjami impulsowymi, takimi jak filtr pięciopunktowy $\frac{1}{12} \cdot [-1, 8, 0, -8, 1]$[cite: 29].

### 2. Analiza Charakterystyk Częstotliwościowych
Weryfikacja działania filtra w dziedzinie częstotliwości:
* **Charakterystyka Amplitudowa**: Sprawdzenie, czy filtr wykazuje liniowy wzrost amplitudy wraz z częstotliwością (cecha idealnego różniczkatora)[cite: 29].
* **Charakterystyka Fazowa**: Analiza przesunięcia fazowego o $\pi/2$ (90 stopni) oraz kompensacja opóźnienia grupowego wynikającego z rzędu filtra FIR[cite: 29].

### 3. Filtracja i Różniczkowanie w Czasie
Praktyczne zastosowanie filtra do sygnałów sinusoidalnych:
* **Proces filtracji**: Wykorzystanie funkcji `filter()` do wyznaczenia pochodnej sygnału testowego $x(n) = \sin(2\pi f_x t)$[cite: 29].
* **Weryfikacja wyniku**: Porównanie sygnału wejściowego z wyjściowym przy uwzględnieniu przesunięcia czasowego $M$, aby zaobserwować transformację sinusoidy w kosinusoidę (pochodną)[cite: 29].

## Wykaz Plików

| Plik | Opis |
| :--- | :--- |
| `cps_11_diff.m` | Główny skrypt projektujący filtr różniczkujący FIR, analizujący jego widmo oraz wykonujący różniczkowanie sinusoidy[cite: 29]. |

## Wykorzystane Narzędzia i Funkcje

* **Projektowanie filtrów**:
    * `kaiser()` – generowanie okna Kaisera dla wag filtra[cite: 29].
    * `stem()` – wizualizacja dyskretnej odpowiedzi impulsowej $h(n)$[cite: 29].
* **Analiza i filtracja**:
    * `polyval()` – obliczanie wartości wielomianu transmitancji na okręgu jednostkowym w celu wyznaczenia odpowiedzi częstotliwościowej[cite: 29].
    * `filter()` – realizacja splotu sygnału wejściowego z odpowiedzią impulsową filtra[cite: 29].
    * `unwrap(angle(H))` – analiza fazy sygnału w sposób ciągły[cite: 29].

## Instrukcja Uruchomienia

1. Uruchom środowisko **MATLAB**.
2. Otwórz skrypt `cps_11_diff.m`.
3. Uruchom program. Skrypt wygeneruje serię wykresów:
    * Odpowiedź impulsową $h(n)$.
    * Amplitudową i fazową charakterystykę częstotliwościową.
    * Porównanie sygnału wejściowego $x(n)$ i jego pochodnej $y(n)$ na jednym wykresie czasowym[cite: 29].
4. Zwróć uwagę na opóźnienie sygnału wyjściowego względem wejściowego, które jest kompensowane w skrypcie poprzez odpowiednie indeksowanie próbek (`nx`, `ny`)[cite: 29].