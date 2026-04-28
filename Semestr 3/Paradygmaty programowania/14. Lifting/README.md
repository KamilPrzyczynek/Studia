# Paradygmaty Programowania – Laboratorium 14: Lifting i Zaawansowane Potoki

Repozytorium zawiera zwieńczenie kursu programowania funkcyjnego w Pythonie. Skupia się na technice **Liftingu**, która pozwala na bezpieczną obsługę wartości `None` (brakujących danych) oraz na budowaniu złożonych systemów przetwarzania danych (pipelines) przy użyciu wcześniej zaimplementowanej klasy `Haskell`.

## Przegląd Zagadnień

Głównym celem laboratorium było stworzenie mechanizmów, które pozwalają funkcjom operować na "opakowanych" wartościach bez konieczności powtarzalnego sprawdzania warunków `if x is not None`.

### 1. Mechanizm Liftingu (`lifting.py`)
Lifting to technika transformacji funkcji tak, aby mogła ona przyjmować i zwracać wartości opcjonalne.
* **`lift1(f, ma)`**: Podnosi funkcję jednoargumentową. Jeśli argument `ma` jest równy `None`, funkcja bezpiecznie zwraca `None` zamiast rzucać błędem. W przeciwnym razie wykonuje `f(ma)`.
* **`lift2(mf, ma, mb)`**: Podnosi funkcję dwuargumentową (lub funkcję podniesioną), zapewniając bezpieczeństwo dla obu argumentów wejściowych.
* **Zastosowanie**: Pozwala to na obliczanie np. długości wektora (`length_vector`) w sposób deklaratywny, nawet jeśli wejście może zawierać błędy lub puste dane.

### 2. Składanie Funkcji w Potoki (Pipelines)
Wykorzystując operator `**` z klasy `Haskell`, laboratorium demonstruje budowę potężnych łańcuchów transformacji:
```python
# Przykład potoku obliczającego długość wektora:
length_vector = lift1(power(0.5)) ** lista_suma ** map_(lift1(power(2)))