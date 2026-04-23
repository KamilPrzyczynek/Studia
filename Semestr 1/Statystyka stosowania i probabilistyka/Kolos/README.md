# Statystyka Stosowana - Zadania Kolokwialne (MATLAB)

Repozytorium zawiera rozwiązania zadań z kolokwium, skupiające się na praktycznym zastosowaniu testów statystycznych, analizie korelacji oraz szacowaniu liczebności próby.

## Opis zadań

### Zadanie 3: Rozkład Chi-kwadrat
Wyznaczanie wartości krytycznej dla rozkładu $\chi^2$ (Chi-kwadrat) przy zadanych parametrach:
- Liczba stopni swobody: $v = 20$.
- Poziom istotności: $\alpha = 0.05$.
- Wykorzystana funkcja: `chi2inv`.

### Zadanie 4: Analiza korelacji i statystyki opisowe
Analiza związku między obwodem a masą obiektów dla zestawu danych pomiarowych:
- Obliczanie parametrów opisowych: średnia (`mean`) oraz odchylenie standardowe (`std`) dla obu zmiennych.
- Wyznaczanie współczynnika korelacji liniowej Pearsona przy użyciu funkcji `corrcoef`.
- Analiza istotności statystycznej korelacji (wartość $p$).

### Zadanie 5: Minimalna liczebność próby
Obliczanie niezbędnej wielkości próby dla zadanych parametrów ufności:
- Poziom ufności: $99\%$ ($\alpha = 0.01$).
- Błąd dopuszczalny: $d = 0.1$.
- Odchylenie standardowe: $s = 2$.
- Algorytm: Wyznaczenie statystyki $z$ (rozkład normalny) oraz weryfikacja, czy obecna liczebność ($n=100$) jest wystarczająca do zachowania założonej precyzji.

## Wykorzystane funkcje MATLAB
* `chi2inv` – odwrotna dystrybuanta rozkładu Chi-kwadrat.
* `norminv` – odwrotna dystrybuanta rozkładu normalnego.
* `corrcoef` – macierz współczynników korelacji.
* `mean`, `std` – podstawowe miary statystyczne.