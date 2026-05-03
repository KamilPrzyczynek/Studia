# Analiza i Przetwarzanie Sygnałów – Laboratorium 7

Repozytorium zawiera skrypty MATLAB zrealizowane w ramach siódmego laboratorium, poświęconego projektowaniu analogowych filtrów prototypowych, ich transformacjom częstotliwościowym oraz weryfikacji charakterystyk filtrów cyfrowych.

## Zawartość Laboratorium

### 1. Analogowe Filtry Prototypowe
Zajęcia obejmowały projektowanie klasycznych filtrów dolnoprzepustowych o znormalizowanej częstotliwości granicznej ($\omega_0 = 1$):
* **Typy filtrów**: Porównanie właściwości filtrów Butterwortha (płaska charakterystyka), Czebyszewa typu I i II (oscylacje w pasmie przepustowym lub zaporowym) oraz filtrów eliptycznych (najbardziej strome zbocze).
* **Analiza Zer i Biegunów**: Wyznaczanie stabilności filtrów poprzez analizę położenia biegunów na płaszczyźnie zespolonej $s$.

### 2. Transformacje Częstotliwościowe
Realizacja przejścia od znormalizowanego filtra prototypowego (Low-Pass) do filtrów docelowych o zadanych parametrach:
* **LP2LP, LP2HP**: Przekształcenie w filtr dolnoprzepustowy i górnoprzepustowy o konkretnej częstotliwości odcięcia.
* **LP2BP, LP2BS**: Przekształcenie w filtry pasmowoprzepustowe i pasmowozaporowe o określonej szerokości pasma.

### 3. Projektowanie i Eksport Filtrów Cyfrowych
Praktyczne wykorzystanie funkcji projektowych do generowania współczynników filtrów:
* **Projektowanie**: Wykorzystanie funkcji `butter()` do stworzenia filtrów o wysokim rzędzie (np. 10) dla zadanej częstotliwości próbkowania.
* **Eksport danych**: Zautomatyzowany zapis współczynników wielomianów $b$ (licznik) i $a$ (mianownik) do plików tekstowych w celu ich wykorzystania w zewnętrznych systemach.
* **Wizualizacja**: Generowanie charakterystyk amplitudowo-fazowych (`freqz`) oraz badanie odpowiedzi impulsowej i skokowej.

## Wykaz Plików

| Plik | Opis |
| :--- | :--- |
| `cps_07_analog_transform.m` | Projektowanie prototypów (Czebyszew, Butterworth) i ich transformacje na LP, HP, BP, BS. |
| `zad72.m` | Skrypt do projektowania filtrów z wyborem opcji (LP, HP, BP, BS) i pełną weryfikacją charakterystyk. |
| `zad73.m` | Projektowanie filtra Butterwortha, eksport współczynników do TXT oraz zapis wykresu do PNG. |
| `design_filter_low_pass.m` | Funkcja pomocnicza do projektowania filtra dolnoprzepustowego 6-go rzędu. |
| `wspolczynniki_filtru.txt` | Wyeksportowane współczynniki $b$ i $a$ zaprojektowanego filtra. |
| `charakterystyka_filtra.png` | Wygenerowany wykres charakterystyki częstotliwościowej (amplituda i faza). |

## Wykorzystane Narzędzia i Funkcje

* **Projektowanie filtrów**: `cheb1ap()`, `buttap()`, `butter()`, `zp2tf()`.
* **Transformacje**: `lp2lp()`, `lp2hp()`, `lp2bp()`, `lp2bs()`.
* **Analiza**: 
    * `freqs()` – charakterystyka analogowa.
    * `freqz()` – charakterystyka cyfrowa.
    * `impulse()`, `step()` – odpowiedzi czasowe filtra.
* **Systemowe**: `dlmwrite()` – zapis współczynników z wysoką precyzją do pliku tekstowego.

## Instrukcja Uruchomienia

1. Uruchom środowisko **MATLAB**.
2. Otwórz `zad72.m` i zmień wartość zmiennej `filter_option` (1-4), aby zaprojektować wybrany typ filtra.
3. Uruchom `zad73.m`, aby wygenerować plik ze współczynnikami `wspolczynniki_filtru.txt`, które mogą być użyte np. w implementacjach C/C++.
4. Przejrzyj plik `charakterystyka_filtra.png`, aby zweryfikować poprawność działania algorytmu projektowego bez uruchamiania pełnego kodu.