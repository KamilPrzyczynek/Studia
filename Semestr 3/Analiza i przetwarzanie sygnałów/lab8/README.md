# Analiza i Przetwarzanie Sygnałów – Laboratorium 8

Repozytorium zawiera skrypty MATLAB zrealizowane w ramach ósmego laboratorium, poświęconego projektowaniu filtrów cyfrowych IIR (Infinite Impulse Response) przy użyciu metody transformacji biliniowej.

## Zawartość Laboratorium

### 1. Metoda Transformacji Biliniowej
Kluczowym elementem zajęć była implementacja przejścia z dziedziny analogowej (operator $s$) do dziedziny cyfrowej (operator $z$):
* **Własna funkcja transformująca**: Opracowanie funkcji `bilinearMY.m`, która przekształca zera i bieguny filtra analogowego na płaszczyznę $z$ przy użyciu wzoru Tustina[cite: 24].
* **Mapowanie częstotliwości**: Transformacja zapewnia stabilność filtra cyfrowego (wnętrze lewej półpłaszczyzny $s$ jest mapowane do wnętrza okręgu jednostkowego na płaszczyźnie $z$)[cite: 24, 25].
* **Kompensacja rzędów**: Automatyczne dodawanie zer lub biegunów w punkcie $z = -1$ w przypadku różnicy rzędów licznika i mianownika transmitancji analogowej[cite: 24].

### 2. Projektowanie Filtrów IIR
Zastosowanie transformacji biliniowej do stworzenia gotowych filtrów cyfrowych:
* **Filtry Prototypowe**: Wykorzystanie analogowych filtrów Butterwortha o wysokim rzędzie jako bazy do dalszych przekształceń[cite: 25].
* **Transformacje Pasma**: Realizacja filtrów dolnoprzepustowych (LP), górnoprzepustowych (HP), pasmowoprzepustowych (BP) oraz pasmowozaporowych (BS) bezpośrednio w dziedzinie cyfrowej[cite: 25].

### 3. Filtracja Rekursywna w Czasie
Implementacja procesu filtracji "krok po kroku":
* **Równanie różnicowe**: Realizacja algorytmu opartego na sumowaniu bieżących i przeszłych próbek wejściowych oraz przeszłych próbek wyjściowych (pętla główna filtru)[cite: 25].
* **Analiza Widmowa**: Porównanie widma sygnału wejściowego (złożonego z wielu sinusoid) z sygnałem wyjściowym w celu weryfikacji skuteczności tłumienia pasma zaporowego[cite: 25].
* **Stabilność**: Wizualizacja zer i biegunów na tle okręgu jednostkowego w celu potwierdzenia stabilności zaprojektowanego układu[cite: 25].

## Wykaz Plików

| Plik | Opis |
| :--- | :--- |
| `bilinearMY.m` | Autorska implementacja transformacji biliniowej dla zer, biegunów i wzmocnienia[cite: 24]. |
| `cps_08_iir_intro.m` | Główny skrypt projektujący filtr IIR, przeprowadzający filtrację sygnału testowego i analizę FFT[cite: 25]. |

## Wykorzystane Narzędzia i Funkcje

* **Projektowanie i przekształcenia**:
    * `buttap()` – analogowy prototyp Butterwortha[cite: 25].
    * `lp2lp()`, `lp2hp()`, `lp2bp()`, `lp2bs()` – analogowe transformacje częstotliwości[cite: 25].
* **Analiza sygnału**:
    * `fft()` – weryfikacja działania filtra w dziedzinie częstotliwości[cite: 25].
    * `poly()` – wyznaczanie współczynników wielomianu z biegunów i zer[cite: 25].
* **Wizualizacja**:
    * `plot()` – wykresy czasowe i płaszczyzna $z$[cite: 25].
    * `20*log10()` – analiza tłumienia w decybelach[cite: 25].

## Instrukcja Uruchomienia

1. Uruchom środowisko **MATLAB**.
2. Upewnij się, że oba pliki (`bilinearMY.m` oraz `cps_08_iir_intro.m`) znajdują się w tym samym folderze.
3. Otwórz i uruchom `cps_08_iir_intro.m`.
4. Program wygeneruje wykresy:
    * Położenia zer i biegunów na tle okręgu jednostkowego.
    * Porównania sygnału przed i po filtracji.
    * Widma mocy pokazującego, które składowe harmoniczne zostały wytłumione.