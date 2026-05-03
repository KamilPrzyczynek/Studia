# Analiza i Przetwarzanie Sygnałów – Laboratorium 10

Repozytorium zawiera skrypty MATLAB zrealizowane w ramach dziesiątego laboratorium, poświęconego zmianie częstotliwości próbkowania sygnałów cyfrowych. Projekty obejmują nad-próbkowanie (interpolację), pod-próbkowanie (decymację) oraz praktyczną konwersję standardu audio CD na DAB.

## Zawartość Laboratorium

### 1. Nad-próbkowanie (Interpolacja)
Proces zwiększania częstotliwości próbkowania sygnału o współczynnik $K$:
* **Ekspansja**: Wstawianie $K-1$ zer pomiędzy każdą parę oryginalnych próbek sygnału[cite: 26, 28].
* **Filtracja Interpolacyjna**: Zastosowanie filtru dolnoprzepustowego FIR (zaprojektowanego funkcją `fir1` z oknem Kaisera) w celu usunięcia niepożądanych obrazów widma powstałych podczas ekspansji[cite: 26, 28].

### 2. Pod-próbkowanie (Decymacja)
Proces zmniejszania częstotliwości próbkowania sygnału o współczynnik $L$:
* **Filtracja Antyaliasingowa**: Wykorzystanie filtru dolnoprzepustowego przed redukcją liczby próbek, aby zapobiec zjawisku aliasingu[cite: 26, 28].
* **Redukcja**: Wybieranie co $L$-tej próbki przefiltrowanego sygnału[cite: 26].
* **Implementacja Polifazowa**: Optymalizacja procesu poprzez podział filtru na pod-filtry, co znacząco zmniejsza złożoność obliczeniową[cite: 26, 28].

### 3. Konwersja Częstotliwości (CD do DAB)
Praktyczny przykład zmiany częstotliwości próbkowania z standardu CD (44100 Hz) na standard DAB (48000 Hz):
* **Wyznaczanie współczynników**: Wykorzystanie czynników $up\_factor = 160$ oraz $down\_factor = 147$ ($\frac{160}{147} \approx \frac{48000}{44100}$)[cite: 27].
* **Łączona konwersja**: Sekwencyjne nad-próbkowanie i pod-próbkowanie sygnału audio przy użyciu filtrów dolnoprzepustowych FIR[cite: 27].
* **Weryfikacja**: Odsłuch i porównanie amplitud sygnałów oryginalnych oraz przetworzonych[cite: 27].

## Wykaz Plików

| Plik | Opis |
| :--- | :--- |
| `cps10_resample_combined.m` | Kompleksowa implementacja nad-próbkowania i pod-próbkowania z wykorzystaniem filtracji polifazowej[cite: 26, 28]. |
| `ridethedisk.wav` | Plik audio wykorzystywany do testów konwersji i odsłuchu[cite: 26, 27]. |
| **Zadanie 10.2** | Skrypt realizujący konwersję częstotliwości 44.1 kHz -> 48 kHz (DAB)[cite: 27]. |

## Wykorzystane Narzędzia i Funkcje

* **Projektowanie filtrów**:
    * `fir1()` – tworzenie filtrów dolnoprzepustowych ze specyfikacją okna[cite: 26, 28].
    * `kaiser()` – okno o regulowanym współczynniku $\beta$ dla lepszej charakterystyki pasma zaporowego[cite: 26, 28].
* **Przetwarzanie sygnałów**:
    * `resample()` – wbudowana funkcja MATLAB do zmiany częstotliwości próbkowania[cite: 27].
    * `filter()` – realizacja filtracji FIR[cite: 26, 28].
* **Audio**:
    * `audioread()` / `sound()` – odczyt plików dźwiękowych oraz ich odsłuch przy różnych częstotliwościach próbkowania[cite: 26, 27].

## Instrukcja Uruchomienia

1. Uruchom **MATLAB**.
2. Otwórz skrypt `cps10_resample_combined.m`.
3. Skonfiguruj współczynniki $K$ i $L$ (np. $K=3$, $L=2$) w celu obserwacji zmian sygnału na wykresach[cite: 26, 28].
4. Uruchom skrypt konwersji DAB, aby usłyszeć różnicę między oryginalnym nagraniem CD a wersją przepróbkowaną do 48 kHz[cite: 27].