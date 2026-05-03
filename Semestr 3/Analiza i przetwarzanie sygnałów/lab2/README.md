# Analiza i Przetwarzanie Sygnałów – Laboratorium 2

Repozytorium zawiera skrypty MATLAB zrealizowane w ramach drugiego etapu zajęć laboratoryjnych. Głównym celem ćwiczeń była generacja sygnałów o zmiennej charakterystyce czasowo-częstotliwościowej oraz badanie operacji na sygnałach, takich jak modulacja i składanie przebiegów.

## Zawartość Laboratorium

### 1. Modelowanie Podstawowych Przebiegów
Zrealizowano generację różnorodnych sygnałów testowych, istotnych w analizie systemów DSP:
* **Sygnały okresowe**: Sinusoidy o różnych częstotliwościach (1 Hz oraz 10 Hz).
* **Sygnały zanikające**: Eksponenta opadająca w czasie, modelująca odpowiedzi układów fizycznych.
* **Gaussoida**: Przebieg o kształcie dzwonu, kluczowy w statystyce i analizie impulsów.

### 2. Modulacje Częstotliwości (FM) i LFM
Przeprowadzono symulacje sygnałów o zmiennej częstotliwości w czasie:
* **Linear Frequency Modulation (LFM)**: Sygnał typu "chirp", w którym częstotliwość wzrasta liniowo (od 0 Hz z krokiem +20Hz/s).
* **Modulacja Sinusoidalna (FM)**: Modelowanie zmian częstotliwości nośnej (10 Hz) wokół jej wartości średniej przy pomocy sygnału modulującego.
* **Całkowanie numeryczne**: Wykorzystanie funkcji `cumsum()` do realizacji modulacji częstotliwościowej, co odpowiada fizycznemu powiązaniu fazy z częstotliwością chwilową.

### 3. Operacje na Sygnałach i Modulacja Amplitudy (AM)
Badanie interakcji między wieloma sygnałami:
* **Superpozycja**: Tworzenie sygnałów złożonych poprzez sumowanie przebiegów z uwzględnieniem składowej stałej (offsetu).
* **Modulacja Amplitudy (AM)**: Realizacja iloczynu sygnałów, gdzie jeden przebieg (wolnozmienny) steruje obwiednią amplitudy drugiego (nośnej).
* **Wizualizacja złożona**: Wykorzystanie funkcji `subplot()` do jednoczesnego porównywania wielu sygnałów oraz ich parametrów modulacyjnych na wspólnych wykresach.

## Wykaz Plików

| Plik | Opis |
| :--- | :--- |
| `cps_02.m` | Główny skrypt zawierający definicje sygnałów x1-x7, przykłady sumowania, mnożenia oraz wizualizację modulacji AM i FM. |

## Wykorzystane Narzędzia i Funkcje

* **Analiza numeryczna**: `cumsum()` (całkowanie przy modulacji FM), operatory tablicowe `.*` (mnożenie sygnałów punkt po punkcie).
* **Wizualizacja**:
    * `plot()` – generowanie przebiegów czasowych.
    * `subplot(4, 2, n)` – organizacja wielu wykresów w jednym oknie w celu porównawczym.
    * `hold on/off` – nakładanie przebiegów amplitudy i częstotliwości na jeden układ współrzędnych.

## Instrukcja Uruchomienia

1. Uruchom środowisko **MATLAB** lub **GNU Octave**.
2. Otwórz plik `cps_02.m`.
3. Skonfiguruj zmienną `x` w początkowej części kodu, aby wybrać sygnał do wyświetlenia na wykresie głównym.
4. Uruchom skrypt (F5), aby wygenerować dwa zestawy okien graficznych prezentujących katalog sygnałów oraz wyniki modulacji.