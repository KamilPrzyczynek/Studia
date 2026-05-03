# Analiza i Przetwarzanie Sygnałów – Laboratorium 1

Repozytorium zawiera skrypty MATLAB opracowane podczas zajęć laboratoryjnych z przedmiotu Analiza i Przetwarzanie Sygnałów. Programy skupiają się na podstawach generowania sygnałów dyskretnych, zjawisku aliasingu, statystycznej analizie szumów oraz akwizycji dźwięku.

## Zawartość Laboratorium

### 1. Generowanie Sygnałów i Zjawisko Aliasingu
W ramach zadań zrealizowano skrypty generujące sinusoidy o zadanych parametrach: amplitudzie, częstotliwości oraz fazie początkowej.
* **Badanie Aliasingu**: Analiza wpływu próbkowania na sygnały o częstotliwościach bliskich lub przekraczających częstotliwość Nyquista. Skrypty pokazują, jak sygnały o różnych częstotliwościach (np. f, fpr+f, fpr-f) wyglądają identycznie po spróbkowaniu.
* **Superpozycja**: Tworzenie sygnałów złożonych poprzez sumowanie kilku składowych sinusoidalnych o różnych parametrach.
* **Konwersja na dźwięk**: Wykorzystanie funkcji sound() do odsłuchu wygenerowanych przebiegów, co pozwala na subiektywną ocenę zmian częstotliwości.

### 2. Modelowanie Szumów i Analiza Statystyczna
Zadania obejmowały symulację rzeczywistych zakłóceń nakładanych na sygnał użyteczny.
* **Szum Równomierny**: Generowanie zakłóceń o rozkładzie jednostajnym w przedziale [0,1].
* **Szum Gaussowski**: Generowanie białego szumu o rozkładzie normalnym (gaussowskim).
* **Histogramy**: Wykorzystanie funkcji hist() do wizualizacji rozkładu próbek sygnału czystego oraz zaszumionego, co pozwala na identyfikację charakteru statystycznego sygnału.

### 3. Akwizycja Sygnału Audio
Praktyczna realizacja cyfrowego zapisu dźwięku.
* **Nagrywanie**: Konfiguracja parametrów takich jak częstotliwość próbkowania (np. 8000 Hz), liczba bitów na próbkę oraz liczba kanałów (mono/stereo).
* **Przetwarzanie**: Pobieranie danych z rejestratora do tablicy w celu dalszej obróbki i wizualizacji na wykresach czasowych.
* **System Plików**: Zapis przetworzonego sygnału do formatu .wav i jego ponowny odczyt.

## Struktura Plików

* **lab1_zad1_2.m / zad12.m** – Skrypty demonstrujące zjawisko aliasingu oraz wpływ zmiany częstotliwości na postać sygnału dyskretnego.
* **problem13.m** – Analiza porównawcza sygnału sinusoidalnego z dodanym szumem równomiernym i gaussowskim wraz z ich histogramami.
* **problem14.m** – Procedura nagrywania dźwięku z mikrofonu, wizualizacja przebiegu czasowego oraz operacje zapisu/odczytu plików audio.
* **cps_01_sinus.m** – Kompleksowe generowanie, sumowanie i odsłuch sinusoid o różnych parametrach.

## Instrukcja Użytkowania

1. Otwórz środowisko MATLAB lub GNU Octave.
2. Dodaj folder z plikami do ścieżki (path) programu.
3. Uruchamiaj poszczególne skrypty. 
4. W przypadku skryptów audio (np. problem14.m), po wyświetleniu komunikatu w konsoli, należy nacisnąć dowolny klawisz i rozpocząć mówienie do mikrofonu.
5. Zwracaj uwagę na komendy "pause" w kodzie – wymagają one naciśnięcia klawisza w celu przejścia do kolejnego wykresu lub etapu działania programu.