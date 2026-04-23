# Statystyka Stosowana i Probabilistyka - Lab 7-8

Repozytorium zawiera materiały dotyczące rozkładu normalnego (Gaussa), który stanowi fundament wnioskowania statystycznego. Prace obejmują modelowanie matematyczne, standaryzację zmiennych oraz analizę dystrybuanty w środowisku MATLAB.

## Tematyka zajęć

### Topic 7: Rozkład Gaussa (Normalny)
* **Cel**: Zrozumienie własności teoretycznych i praktycznych rozkładu normalnego.
* **Pliki**: `Gauss3.mlx`
* **Zakres**:
    * Definiowanie funkcji gęstości prawdopodobieństwa (PDF) rozkładu normalnego $N(\mu, \sigma)$.
    * Wpływ parametrów: średniej ($\mu$) na przesunięcie wykresu oraz odchylenia standardowego ($\sigma$) na rozproszenie (smukłość krzywej).
    * Obliczanie prawdopodobieństwa wystąpienia zmiennej w zadanym przedziale.

### Topic 8: Rozkład Normalny Standaryzowany i Reguła Trzech Sigm
* **Cel**: Przekształcanie dowolnego rozkładu normalnego do postaci standaryzowanej $N(0, 1)$.
* **Pliki**: `Gauss3.mlx` (sekcje zaawansowane)
* **Zakres**:
    * Proces standaryzacji zmiennej losowej (wyznaczanie wartości $Z$).
    * Korzystanie z tablic statystycznych oraz funkcji MATLAB (np. `normcdf`, `norminv`).
    * Praktyczne zastosowanie **Reguły Trzech Sigm** – analiza obszarów, w których skupia się odpowiednio 68.3%, 95.4% oraz 99.7% wszystkich obserwacji.

## Wykorzystane technologie
* **MATLAB Live Editor (`.mlx`)**: Wykorzystanie do generowania interaktywnych wykresów "krzywej dzwonowej" oraz automatyzacji obliczeń całkowych pod funkcją gęstości.
* **Wizualizacja**: Generowanie wykresów PDF (Probability Density Function) oraz CDF (Cumulative Distribution Function).

## Kluczowe zagadnienia teoretyczne
1. **Krzywa Gaussa**: Symetryczny kształt dzwonu, gdzie średnia, mediana i dominanta są równe.
2. **Kwantyle**: Wyznaczanie wartości granicznych dla zadanego poziomu prawdopodobieństwa.
3. **Prawdopodobieństwo ogonowe**: Analiza zdarzeń skrajnych (odległych od średniej o więcej niż $2\sigma$ lub $3\sigma$).

## Instrukcja
- Uruchom plik `Gauss3.mlx` w programie MATLAB.
- Zmieniając wartości suwaków lub zmiennych $\mu$ oraz $\sigma$, obserwuj dynamiczne zmiany na wykresach gęstości prawdopodobieństwa.
- Skrypt automatycznie oblicza pole pod krzywą dla zadanych przedziałów, co odpowiada prawdopodobieństwu wystąpienia zjawiska.

---
*Materiały archiwalne - Semestr 1*