# Cyfrowe Przetwarzanie Sygnałów (CPS) – Podsumowanie Kursu
### Laboratoria 01 – 11

Repozytorium zawiera kompletny zestaw skryptów MATLAB i Python zrealizowanych w ramach kursu Analizy i Przetwarzania Sygnałów. Projekt obejmuje pełną ścieżkę kształcenia: od generowania prostych sygnałów sinusoidalnych, przez analizę widmową (DFT/FFT), aż po zaawansowane projektowanie filtrów cyfrowych (IIR, FIR) i techniki przepróbkowania.

---

##  Przegląd Laboratoriów

### 1. Podstawy Sygnałów i Akwizycja (Lab 01-02)
* **Tematyka:** Generowanie sinusoid, analiza zjawiska aliasingu, sumowanie sygnałów.
* **Kluczowe zagadnienia:** Akwizycja dźwięku (`audiorecorder`), modelowanie sygnałów LFM (liniowa modulacja częstotliwości) oraz FM.
* **Pliki:** `lab1_zad1_2.m`, `cps_01_sinus.m`, `problem13.m` (szumy), `problem14.m` (audio).

### 2. Ortogonalność i Transformacje Macierzowe (Lab 03)
* **Tematyka:** Przestrzenie wektorowe, ortogonalność sygnałów.
* **Kluczowe zagadnienia:** Implementacja macierzy transformacji (Haara, Hadamarda, Walsha). Sprawdzanie warunków ortonormalności ($A^{-1} = A^T$).
* **Pliki:** `cps_03.m`, `lab03zad2.m`.

### 3. Analiza Częstotliwościowa – DTFT i DFT (Lab 04-05)
* **Tematyka:** Transformacja Fouriera sygnałów dyskretnych.
* **Kluczowe zagadnienia:** Wpływ okien czasowych (Hamming, Hanning, Kaiser) na przeciek widma. Implementacja algorytmu FFT Radix-2 (DIT) w MATLAB i Python.
* **Pliki:** `zad411v2.m`, `zad53.m`, `zad56.py`, `zad57.m`.

### 4. Analiza Czasowo-Częstotliwościowa i Gęstość Mocy (Lab 06)
* **Tematyka:** Estymacja widmowej gęstości mocy (PSD) oraz STFT.
* **Kluczowe zagadnienia:** Metoda Welcha do analizy sygnałów zaszumionych, spektrogramy sygnałów zmiennych w czasie.
* **Pliki:** `zad63.m`, `zad64.m`, `zad64v2.m`.

### 5. Projektowanie Filtrów Analogowych (Lab 07)
* **Tematyka:** Prototypy filtrów ciągłych.
* **Kluczowe zagadnienia:** Projektowanie filtrów Butterwortha, Czebyszewa (typu I i II) oraz eliptycznych. Transformacje pasmowe (LP → HP, BP, BS).
* **Pliki:** `cps_07_analog_transform.m`, `zad72.m`, `design_filter_low_pass.m`.

### 6. Filtry IIR i Transformacja Biliniowa (Lab 08-09)
* **Tematyka:** Cyfrowe filtry o nieskończonej odpowiedzi impulsowej.
* **Kluczowe zagadnienia:** Metoda Tustina (biliniowa), mapowanie płaszczyzny $s$ na $z$. Realizacja filtracji rekursywnej w czasie rzeczywistym.
* **Pliki:** `bilinearMY.m`, `cps_08_iir_intro.m`.

### 7. Resampling i Filtracja Polifazowa (Lab 10)
* **Tematyka:** Zmiana częstotliwości próbkowania.
* **Kluczowe zagadnienia:** Decymacja i interpolacja. Praktyczna konwersja standardu CD (44.1 kHz) na DAB (48 kHz) przy użyciu struktur polifazowych.
* **Pliki:** `cps10_resample_combined.m`, `zad106.m`.

### 8. Różniczkowanie Cyfrowe (Lab 11)
* **Tematyka:** Projektowanie różniczkatorów FIR.
* **Kluczowe zagadnienia:** Implementacja idealnego różniczkatora z oknem Kaisera. Analiza przesunięcia fazowego o 90 stopni.
* **Pliki:** `cps_11_diff.m`.

---

##  Wykorzystane Narzędzia
* **Środowisko:** MATLAB (Signal Processing Toolbox), Python (NumPy).
* **Metody projektowe:** Transformacja Biliniowa, Okienkowanie (Window Method), Algorytmy Radix-2.
* **Pliki danych:** Formaty `.wav` (np. `ridethedisk.wav`, `bellphone.wav`) do testowania algorytmów na rzeczywistych sygnałach audio.

---

##  Jak korzystać z repozytorium
1.  **Analiza Sygnałów:** Uruchom `cps_01_sinus.m`, aby zrozumieć podstawy próbkowania.
2.  **Filtrowanie:** Użyj `cps_08_iir_intro.m` wraz z funkcją `bilinearMY.m` do zaprojektowania własnego filtra IIR.
3.  **Resampling:** Skrypt `zad106.m` pokazuje proces profesjonalnej konwersji próbkowania plików audio.
4.  **FFT:** Porównaj wydajność własnej implementacji `zad56.py` z wbudowanymi funkcjami systemowymi.

---
*Autor: Kamil Przyczynek
*Kurs: Analiza i Przetwarzanie Sygnałów*