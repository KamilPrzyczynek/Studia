# Paradygmaty Programowania – Laboratorium 08: Rekurencja

Repozytorium zawiera implementacje problemów algorytmicznych rozwiązanych przy użyciu rekurencji. Głównym celem laboratorium było zrozumienie mechanizmu stosu wywołań, różnicy między rekurencją prostą a ogonową oraz implementacja obliczeń statystycznych w sposób rekurencyjny.

## Przegląd Zagadnień

Rekurencja to technika, w której funkcja wywołuje samą siebie, aby rozwiązać mniejsze podproblemy tego samego typu.

### 1. Rodzaje Rekurencji (`sumalisty.py`)
Skrypt demonstruje dwa podejścia do sumowania elementów listy:
* **Rekurencja Prosta (`suma_reurencyjna`)**: Wynik operacji bieżącej zależy od wyniku wywołania rekurencyjnego (dodawanie `head` do wyniku sumy `tail`). Powoduje to odkładanie ramki stosu dla każdego elementu.
* **Rekurencja Ogonowa (`suma_ogonowa`)**: Wykorzystuje akumulator (`acc`) do przekazywania cząstkowego wyniku "w dół" rekurencji. Ostatnim działaniem funkcji jest samo wywołanie rekurencyjne, co w wielu językach (choć Python ma tu ograniczenia) pozwala na optymalizację zużycia pamięci.

### 2. Rekurencyjne Obliczanie Statystyk (`wariancjarekurencyjnie.py`)
Zadanie polegało na obliczeniu średniej arytmetycznej oraz wariancji bez użycia pętli:
* **Obliczenia przy powrocie**: Zgodnie z instrukcją, wariancja jest liczona podczas zwijania stosu rekurencyjnego. 
* **Mechanizm**: Funkcja najpierw schodzi do końca listy, aby obliczyć sumę i średnią, a następnie, wracając, oblicza sumę kwadratów różnic (`(x - średnia)^2`).
* **Zastosowanie**: Demonstracja przekazywania wielu wartości przez ramki stosu (średnia, suma kwadratów).

## Opis Programów

| Plik | Opis Funkcjonalności | Kluczowe Techniki |
| :--- | :--- | :--- |
| `sumalisty.py` | Porównanie rekurencji zwykłej i ogonowej na przykładzie sumowania listy. | `head`, `*tail`, akumulator, dekompozycja listy. |
| `wariancjarekurencyjnie.py` | Obliczanie średniej i wariancji z próby w sposób całkowicie rekurencyjny. | Rekurencja z "powrotem", parametry domyślne. |

## Przykłady Działania

### Sumowanie listy
```python
lista = [1, 2, 3, 4, 5]
# Rekurencja prosta: 1 + (2 + (3 + (4 + (5 + 0))))
# Rekurencja ogonowa: f(tail, acc + head) -> f([2..5], 1)