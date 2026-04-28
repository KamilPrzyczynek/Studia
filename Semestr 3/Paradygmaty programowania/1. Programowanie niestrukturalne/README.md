# Paradygmaty Programowania – Laboratorium 1: Od Niestrukturalnego do Strukturalnego

Repozytorium zawiera analizę porównawczą dwóch podejść do tworzenia oprogramowania w języku C: programowania niestrukturalnego (spaghetti code) oraz programowania proceduralnego z wykorzystaniem efektów ubocznych (wskaźników).

## 1. Programowanie Niestrukturalne (Spaghetti Code)

Plik `choinkawc.c` jest klasycznym przykładem paradygmatu niestrukturalnego. Logika programu opiera się na bezpośrednich skokach do etykiet, co symuluje działanie niskopoziomowych instrukcji `JUMP`.

### Charakterystyka podejścia:
* **Instrukcja `goto`**: Zamiast standardowych pętli (`for`, `while`), przepływ sterowania jest kontrolowany przez etykiety takie jak `start:`, `dziura:` czy `choinka:`.
* **Brak bloków decyzyjnych**: Warunki są sprawdzane za pomocą instrukcji `if` połączonych natychmiast z `goto`, co utrudnia śledzenie logiki (tzw. "spaghetti code").
* **Zależność od stanu**: Program dynamicznie zmienia znak wypełnienia (`*` lub `#`) w zależności od parzystości wysokości, sterując całym procesem rysowania za pomocą skoków wstecznych.


## 2. Programowanie Proceduralne i Efekty Uboczne

Plik `efektyuboczne.c` reprezentuje wyższy poziom abstrakcji – programowanie proceduralne, w którym kod dzielony jest na funkcje.

### Kluczowe pojęcia:
* **Efekty uboczne (Side Effects)**: Funkcja `oblicz` nie zwraca wartości bezpośrednio przez `return`. Zamiast tego modyfikuje dane w miejscu ich przechowywania za pomocą wskaźników.
* **Wskaźniki (Pointers)**: Wykorzystanie operatorów dereferencji (`*iloczyn`, `*suma`) pozwala funkcji na dostęp do zmiennych zadeklarowanych wewnątrz `main()`.
* **Przekazywanie przez adres**: Wywołanie `oblicz(10, x, &iloczyn, &suma)` przekazuje adresy zmiennych, co pozwala na "wyciągnięcie" więcej niż jednej wartości wynikowej z jednej funkcji.

## Analiza Porównawcza

| Cecha | Programowanie Niestrukturalne | Programowanie Strukturalne |
| :--- | :--- | :--- |
| **Kontrola przepływu** | Etykiety i `goto` | Funkcje, pętle, instrukcje sterujące |
| **Czytelność** | Niska (trudna analiza skoków) | Wysoka (podział na moduły/funkcje) |
| **Zarządzanie danymi** | Zmienne globalne/lokalne w jednej funkcji | Parametry funkcji i wskaźniki |

## Struktura Plików
* `choinkawc.c` – Implementacja rysowania choinki przy użyciu paradygmatu niestrukturalnego.
* `efektyuboczne.c` – Demonstracja mechanizmu wskaźników i modyfikacji argumentów funkcji.

## Instrukcja Kompilacji
Programy można skompilować za pomocą kompilatora `gcc`:

```bash
# Kompilacja programu niestrukturalnego
gcc choinkawc.c -o choinka

# Kompilacja programu strukturalnego
gcc efektyuboczne.c -o efekty