# Analiza i Przetwarzanie Sygnałów – Laboratorium 6

Repozytorium zawiera skrypty MATLAB zrealizowane w ramach szóstego laboratorium, dotyczącego analizy czasowo-częstotliwościowej sygnałów niestacjonarnych oraz estymacji gęstości widmowej mocy (PSD).

## Zawartość Laboratorium

### 1. Krótkoczasowa Transformata Fouriera (STFT)
Głównym celem zadań była analiza sygnałów, których parametry zmieniają się w czasie, przy użyciu metody okienkowanego widma:
* **Analiza Sygnałów Niestacjonarnych**: Badanie sygnałów z liniową modulacją częstotliwości (LFM/Chirp) oraz sinusoidalną modulacją częstotliwości (SFM)[cite: 16].
* **Spektrogramy**: Generowanie obrazów czasowo-częstotliwościowych przy użyciu funkcji `imagesc()` oraz własnej implementacji pętli STFT z oknem Hamminga[cite: 16, 17].
* **Parametry Analizy**: Dobór długości okna (`Mwind`), kroku przesunięcia (`Mstep`) oraz długości FFT w celu uzyskania optymalnej rozdzielczości[cite: 16, 17].

### 2. Estymacja Gęstości Widmowej Mocy (PSD) metodą Welcha
Zaimplementowano metodę Welcha, która pozwala na redukcję wariancji estymatora widma poprzez segmentację i uśrednianie:
* **Uśrednianie Periodogramów**: Dzielenie długiego sygnału na nakładające się segmenty, obliczanie ich widm i wyciąganie średniej[cite: 16, 18].
* **Porównanie**: Weryfikacja własnej implementacji z systemową funkcją `pwelch()` dostępną w środowisku MATLAB[cite: 16].

### 3. Analiza Sygnałów w Szumie
Badanie odporności metod estymacji widma na obecność zakłóceń losowych:
* **Wpływ Odchylenia Standardowego**: Analiza zmiany stosunku sygnału do szumu (SNR) poprzez dodawanie szumu białego o różnym natężeniu (od 0.01 do 2.0)[cite: 17, 18].
* **Wizualizacja Statystyczna**: Obserwacja zanikania prążków sygnału sinusoidalnego w miarę wzrostu mocy szumu na wykresach decybelowych[cite: 17, 18].

## Wykaz Plików

| Plik | Tematyka |
| :--- | :--- |
| `zad63.m` | Implementacja STFT i PSD Welcha dla sygnałów LFM i SFM. Porównanie z funkcją `pwelch`[cite: 16]. |
| `zad64.m` | Analiza sygnału sinusoidalnego zaszumionego różnymi wartościami odchylenia standardowego przy użyciu spektrogramów[cite: 17]. |
| `zad64v2.m` | Badanie wpływu szumu na widmo mocy oraz demonstracja korzyści płynących z uśredniania widma dla długich sygnałów[cite: 18]. |

## Wykorzystane Narzędzia i Funkcje

* **Transformacje i Estymacja**:
    * `fft()` – bazowa operacja dla każdego segmentu danych[cite: 16, 18].
    * `hamming()` – okno czasowe redukujące wyciek widma[cite: 16, 17].
    * `pwelch()` – wbudowany estymator gęstości widmowej mocy[cite: 16].
* **Wizualizacja**:
    * `imagesc()` – tworzenie spektrogramów (map natężenia częstotliwości w czasie)[cite: 16, 17].
    * `semilogy()` – wykresy widma mocy w skali logarytmicznej dla osi Y[cite: 16, 17].
    * `colorbar` – dodanie skali decybelowej do wykresów[cite: 16, 17].

## Instrukcja Uruchomienia

1. Uruchom środowisko **MATLAB**.
2. Wybierz plik `zad63.m`, aby zobaczyć dynamiczną analizę sygnałów LFM i SFM (skrypt zawiera instrukcje `pause`, wymagające naciśnięcia klawisza).
3. Uruchom `zad64.m` lub `zad64v2.m`, aby przeanalizować, jak zwiększający się szum wpływa na czytelność informacji o częstotliwości sygnału.