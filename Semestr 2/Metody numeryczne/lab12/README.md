# Metody Numeryczne - Laboratorium 12

Laboratorium dwunaste poświęcone jest numerycznym metodom rozwiązywania **równań różniczkowych cząstkowych (PDE)**. Celem zajęć jest implementacja algorytmów pozwalających na modelowanie zjawisk fizycznych, takich jak przewodnictwo cieplne czy propagacja fal, przy użyciu metody różnic skończonych.

## Zawartość laboratorium

Projekt zawiera skrypty realizujące zadania z zakresu statycznych i dynamicznych problemów brzegowych.

### 1. Rozkład temperatury w pręcie (`zad12_2.m`)
* **Problem**: Wyznaczanie ustalonego rozkładu temperatury wzdłuż cienkiego pręta.
* **Metoda**: Dyskretyzacja równania Laplace'a prowadząca do układu równań liniowych $D \cdot T = b$.
* **Implementacja**: Wykorzystanie macierzy pasmowej (trójdiagonalnej) do opisu powiązań między sąsiednimi punktami dyskretyzacji oraz uwzględnienie warunków brzegowych Dirichleta ($T_p$, $T_k$).

### 2. Przewodnictwo cieplne w płycie 2D (`zad12_4.m`)
* **Modelowanie**: Rozszerzenie problemu przewodnictwa na dwuwymiarową płytę o siatce punktów $3 \times 3$.
* **Równanie Laplace'a**: Budowa macierzy rzadkiej $A$, gdzie każdy punkt wewnętrzny jest powiązany z czterema sąsiadami (góra, dół, lewo, prawo) zgodnie z operatorem różnicowym:
  $$\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} \approx \frac{T_{i+1,j} + T_{i-1,j} + T_{i,j+1} + T_{i,j-1} - 4T_{i,j}}{h^2} = 0$$
* **Warunki brzegowe**: Symulacja przepływu ciepła między domem ($T_p = 20^\circ C$) a otoczeniem ($T_k = -5^\circ C$).

### 3. Propagacja fali elektromagnetycznej (`zad12_5.m`)
* **Problem**: Symulacja jednokierunkowej propagacji fali radiowej (RF) o częstotliwości 900 MHz.
* **Dynamika**: Rozwiązywanie równania falowego w czasie i przestrzeni.
* **Algorytm**:
    * Wyznaczenie parametrów siatki ($\Delta x$, $\Delta t$) przy zachowaniu stabilności numerycznej.
    * Iteracyjne obliczanie natężenia pola elektrycznego ($u$) i magnetycznego ($v$).
    * Wizualizacja animowana ruchu fali wzdłuż osi $x$.

## Wykorzystane techniki numeryczne

* **Metoda Różnic Skończonych (FD)**: Zastąpienie pochodnych ilorazami różnicowymi.
* **Macierze strukturalne**: Budowa macierzy rzadkich przy użyciu funkcji `diag`.
* **Rozwiązywanie układów równań**: Wykorzystanie operatora `\` (backslash) do efektywnego wyznaczania wektora stanu.
* **Stabilność numeryczna**: Dobór parametrów kroku czasowego w zależności od prędkości fali i rozdzielczości przestrzennej.

## Instrukcja uruchomienia

1. **Pręt (1D)**: Uruchom `zad12_2.m`, aby zobaczyć liniowy rozkład temperatury dla zadanych warunków brzegowych.
2. **Płyta (2D)**: Uruchom `zad12_4.m`, aby przeanalizować rozkład temperatur wewnątrz struktury dwuwymiarowej.
3. **Fala (Dynamiczne)**: Uruchom `zad12_5.m`, aby zobaczyć animację rozchodzącej się fali elektromagnetycznej.

---
*Opracował: Kamil Przyczynek*