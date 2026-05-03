# Analiza i Przetwarzanie Sygnałów – Laboratorium 4

Repozytorium zawiera skrypty MATLAB zrealizowane w ramach czwartego laboratorium, skupiającego się na transformacjach częstotliwościowych (DFT, DtFT, FFT), analizie okien czasowych oraz badaniu widm rzeczywistych sygnałów audio.

## Zawartość Laboratorium

### 1. Dyskretna Transformata Fouriera (DFT) i DtFT
Głównym celem zadań było porównanie metod obliczania widma sygnału:
* **DFT (Discrete Fourier Transform)**: Obliczanie widma w dyskretnych punktach częstotliwości (prążkach)[cite: 12, 13].
* **DtFT (Discrete-time Fourier Transform)**: Wyznaczanie widma w sposób ciągły (lub z bardzo gęstym krokiem częstotliwości), co pozwala na dokładniejszą analizę kształtu listków widmowych[cite: 12, 13].
* **Skalowanie**: Zastosowanie poprawnego skalowania amplitudy w zależności od użytego okna czasowego[cite: 13].

### 2. Okienkowanie Sygnału (Windowing)
Badanie wpływu różnych funkcji okien na rozdzielczość częstotliwościową oraz wyciek widma (spectral leakage):
* **Typy okien**: Porównanie okna prostokątnego (`boxcar`), Hanninga (`hanning`) oraz Czebyszewa (`chebwin`)[cite: 13].
* **Detekcja sygnałów słabych**: Analiza możliwości wykrycia składowej o małej amplitudzie znajdującej się w bliskim sąsiedztwie silnego sygnału przy użyciu różnych okien[cite: 13].

### 3. Algorytm FFT i Rekonstrukcja
Praktyczna implementacja idei algorytmu szybkiej transformaty Fouriera (FFT):
* **Podział rekurencyjny**: Rozdzielanie próbek na parzyste i nieparzyste (decymacja w czasie)[cite: 11].
* **Motylek (Butterfly)**: Składanie pełnego widma sygnału z mniejszych bloków DFT przy użyciu współczynników obrotu (twiddle factors)[cite: 11].
* **Weryfikacja**: Porównanie wyniku złożonego algorytmu z wbudowaną funkcją `fft()` w celu obliczenia błędu rekonstrukcji[cite: 11].

### 4. Analiza Widmowa Plików Audio
Zastosowanie transformat do rzeczywistych sygnałów dźwiękowych:
* **Przetwarzanie plików**: Wczytywanie i analiza plików `.wav` (np. `bellbird.wav`, `bellphone.wav`)[cite: 12, 13].
* **Porównanie widm**: Wizualizacja różnic w strukturze harmonicznej różnych dźwięków oraz badanie ich właściwości statystycznych i częstotliwości próbkowania[cite: 12, 13].

## Wykaz Plików

| Plik | Opis |
| :--- | :--- |
| `lab11.m` | Implementacja ręcznego składania widma FFT poprzez podział na próbki parzyste i nieparzyste[cite: 11]. |
| `lab04zad2.m` | Porównanie widm DFT i DtFT dla sygnałów audio z wykorzystaniem okna prostokątnego[cite: 12]. |
| `cps_04_dtft.m` | Zaawansowana analiza wpływu okien (Hanning, Czebyszew) na widmo oraz porównanie dwóch różnych sygnałów audio[cite: 13]. |

## Wykorzystane Narzędzia i Funkcje

* **Transformacje**: `fft()`, `ifft()` – szybkie algorytmy transformaty Fouriera[cite: 11, 13].
* **Funkcje okien**: `boxcar()`, `hanning()`, `chebwin()`[cite: 13].
* **Audio**: `audioread()`, `sound()` – obsługa plików dźwiękowych i ich parametrów[cite: 12, 13].
* **Wizualizacja**:
    * `plot()`, `stem()` – wykresy liniowe i prążkowe[cite: 12, 13].
    * `20*log10(abs(X))` – analiza widma w skali decybelowej (logarytmicznej)[cite: 13].

## Instrukcja Uruchomienia

1. Upewnij się, że w folderze roboczym znajdują się pliki audio: `bellbird.wav` oraz `bellphone.wav`.
2. Uruchom plik `cps_04_dtft.m`, aby zobaczyć różnicę między DFT a DtFT w skali liniowej i decybelowej.
3. Uruchom plik `lab11.m`, aby zweryfikować poprawność implementacji składania widma (wynik `error_FINAL` powinien być bliski zeru).