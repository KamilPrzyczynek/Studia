# Analiza i Przetwarzanie Sygnałów – Laboratorium 5

Repozytorium zawiera implementacje algorytmu szybkiej transformaty Fouriera (FFT) z decymacją w czasie (radix-2 DIT) w środowiskach MATLAB oraz Python. Celem zajęć było zrozumienie struktury motylkowej algorytmu oraz mechanizmu odwracania bitów (bit-reversal).

## Zawartość Laboratorium

### 1. Mechanizm Odwracania Bitów (Bit-Reversal)
Kluczowym elementem algorytmu FFT z decymacją w czasie jest wstępne przestawienie próbek wejściowych.
* **Indeksowanie**: Dla sygnału o długości $N$, indeksy próbek są konwertowane na postać binarną[cite: 14, 15].
* **Reversal**: Bity indeksów są odwracane (np. dla $N=8$, binarny indeks `001` (1) staje się `100` (4))[cite: 15].
* **Przestawienie**: Dane wejściowe są mapowane na nowe pozycje zgodnie z odwróconymi indeksami, co przygotowuje sygnał do etapowego łączenia widm[cite: 14, 15].

### 2. Algorytm Radix-2 DIT FFT
Zaimplementowano proces obliczeniowy dzielący się na etapy (log2(N)):
* **DFT 2-punktowe**: W pierwszym etapie obliczane są widma 2-punktowe na sąsiednich parach przestawionych próbek[cite: 15].
* **Łączenie etapowe**: W kolejnych krokach widma o długościach 2, 4, 8... są łączone w coraz większe bloki[cite: 15].
* **Współczynniki obrotu (Twiddle Factors)**: Zastosowanie wag zespolonych $W = \exp(-j \cdot 2\pi / N \cdot k)$ do korekty fazy podczas łączenia mniejszych widm w większe struktury[cite: 14, 15].

### 3. Implementacja w Pythonie (Rekurencyjna)
Oprócz wersji iteracyjnej w MATLAB, opracowano funkcję rekurencyjną w Pythonie:
* **Podział**: Funkcja `radix2fft` dzieli sygnał na części parzyste i nieparzyste do momentu uzyskania pojedynczej próbki[cite: 14].
* **Rekonstrukcja**: Wykorzystanie biblioteki `numpy` do operacji na wektorach i weryfikacji wyniku z wbudowaną funkcją `np.fft.fft()`[cite: 14].

## Wykaz Plików

| Plik | Język | Opis |
| :--- | :--- | :--- |
| `cps_05_fft2.m` | MATLAB | Iteracyjna implementacja FFT z jawnym procesem odwracania bitów i pętlą etapów[cite: 15]. |
| `fft_python.py` | Python | Rekurencyjna implementacja algorytmu Radix-2 z testem błędu względem biblioteki NumPy[cite: 14]. |

## Wykorzystane Narzędzia i Funkcje

* **Konwersje bitowe**: `dec2bin()`, `bin2dec()` – manipulacja indeksami próbek w celu uzyskania bit-reversal[cite: 15].
* **Operacje macierzowe**:
    * `exp(-j*2*pi/N*(0:N-1))` – generowanie współczynników obrotu[cite: 14, 15].
    * `np.concatenate` / `[y1 y1]` – wektorowe łączenie fragmentów widma[cite: 14, 15].
* **Weryfikacja**: Obliczanie błędu maksymalnego (`max(abs(fft(x) - y))`) w celu potwierdzenia numerycznej poprawności implementacji[cite: 14, 15].

## Instrukcja Uruchomienia

1. **MATLAB**:
   * Otwórz plik `cps_05_fft2.m`.
   * Uruchom skrypt. W konsoli zostanie wyświetlony wektor po przestawieniu (`y`) oraz błąd obliczeniowy `ERROR` względem systemowej funkcji FFT.
2. **Python**:
   * Uruchom skrypt przy użyciu interpretera (wymagana biblioteka `numpy`).
   * Program wyświetli oryginalny sygnał, próbki po odwróceniu bitów oraz końcowy błąd porównania.