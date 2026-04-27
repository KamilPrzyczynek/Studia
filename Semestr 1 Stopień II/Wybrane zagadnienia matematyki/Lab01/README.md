# Klasyfikacja Irysów metodą Zbiorów Przybliżonych (Rough Sets)

Repozytorium zawiera implementację systemu klasyfikacyjnego opartego na **teorii zbiorów przybliżonych (Rough Set Theory)**. Projekt demonstruje proces wydobywania wiedzy z danych ciągłych poprzez dyskretyzację, wyznaczanie aproksymacji, redukcję cech oraz generowanie logicznych reguł decyzyjnych.

## Struktura Algorytmu

Implementacja została podzielona na kluczowe etapy zgodne z metodologią Rough Sets:

### 1. Przygotowanie danych i Dyskretyzacja
* **Zbiór danych**: Wykorzystano klasyczny zbiór *Iris* (150 obiektów, 4 cechy: sepal length, sepal width, petal length, petal width).
* **Podział**: 70% trening, 30% test.
* **Dyskretyzacja Globalna**: Zastosowano zaawansowaną metodę zorientowaną na rozróżnialność (Boolean Reasoning). Zamiast sztywnego podziału, algorytm wyznacza optymalne punkty cięcia (*cuts*), które najlepiej separują klasy decyzyjne w przestrzeni cech.

### 2. Analiza Nierozróżnialności i Aproksymacje
* **Relacja Nierozróżnialności**: Obiekty są uznawane za nierozróżnialne, jeśli po procesie dyskretyzacji posiadają identyczne wartości wszystkich cech warunkowych.
* **Aproksymacja Dolna (Lower Approximation)**: Zbiór obiektów, które z całkowitą pewnością można zaliczyć do danej klasy (brak sprzeczności w danych treningowych).
* **Obszar Graniczny (Boundary Region)**: Obiekty, których nie można jednoznacznie przypisać do jednej klasy ze względu na identyczne cechy przy różnych decyzjach.

### 3. Redukcja Cech (Redukty)
* Algorytm wyznacza **redukt**, czyli minimalny podzbiór cech, który zachowuje tę samą zdolność rozróżniania obiektów, co pełny zbiór danych.
* W procesie analizy sprawdzana jest zbędność każdej cechy poprzez weryfikację spójności macierzy decyzyjnej po jej usunięciu.

### 4. System Reguł Decyzyjnych
* Na podstawie dolnych aproksymacji generowany jest minimalny zestaw reguł w postaci logicznej `IF... THEN...`.
* Reguły są deterministyczne – reprezentują pewną wiedzę wydobytą ze zbioru uczącego.

## Wyniki Eksperymentu

Na podstawie przeprowadzonej symulacji uzyskano następujące wskaźniki:

* **Liczba wygenerowanych reguł**: 16
* **Dokładność (Accuracy)**: 100.00% (dla obiektów sklasyfikowanych)
* **Pokrycie (Coverage)**: ~87% (39 z 45 obiektów testowych)
* **Obiekty niesklasyfikowane**: 6 (znajdujące się poza zasięgiem wygenerowanych reguł)

### Dlaczego reguły zawodzą?
Reguły w tym modelu zawodzą (zwracają wynik "nieznany") w dwóch przypadkach:
1. **Luki w wiedzy**: Obiekt testowy posiada kombinację cech, która nie wystąpiła w zbiorze treningowym.
2. **Niejasność (Vagueness)**: Obiekt wpada w obszar graniczny, gdzie na podstawie dostępnych cech nie można podjąć jednoznacznej decyzji bez ryzyka błędu.

## Wykorzystane Technologie

* **Python 3.x**
* **Pandas & NumPy**: Przetwarzanie danych i operacje macierzowe.
* **Scikit-learn**: Pobranie zbioru danych i ewaluacja (accuracy).

## Instrukcja Uruchomienia

Wymagane biblioteki: `pandas`, `numpy`, `scikit-learn`.

```bash
# Instalacja zależności
pip install pandas numpy scikit-learn

# Uruchomienie skryptu
python main.py