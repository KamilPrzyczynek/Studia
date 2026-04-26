# Programowanie w Javie – Laboratorium 11 (Sortowanie i Kolekcje)

Repozytorium zawiera implementację zadań dotyczących mechanizmów porządkowania obiektów własnych w strukturach danych Java. Skupiono się na implementacji interfejsów standardowych oraz wykorzystaniu klas narzędziowych `Arrays` i `Collections`.

## Zawartość laboratorium

### 1. Modelowanie obiektu porządkowalnego (Klasa Ulamek)
Klasa `Ulamek` reprezentuje model matematyczny ułamka zwykłego, który został przystosowany do automatycznego sortowania.
* **Implementacja Comparable**: Klasa implementuje interfejs `Comparable`, co narzuca zdefiniowanie metody `compareTo`.
* **Kryterium porównywania**: Porównywanie obiektów odbywa się poprzez wyliczenie wartości zmiennoprzecinkowej ułamka (`(double) licznik / mianownik`) i wykorzystanie metody `Double.compare`.
* **Reprezentacja**: Metoda `toString()` zwraca czytelną formę `licznik/mianownik`.

### 2. Struktury danych i algorytmy sortowania
W klasie `Main` zademonstrowano dwa sposoby przechowywania i sortowania grupy obiektów:

| Cecha | Tablica (`Ulamek[]`) | Lista (`ArrayList`) |
| :--- | :--- | :--- |
| **Narzędzie sortujące** | `Arrays.sort(tablica)` | `Collections.sort(lista)` |
| **Typ danych** | Statyczny rozmiar, silne typowanie | Dynamiczny rozmiar, typ `Object` w pętli |
| **Porządek** | Naturalny (rosnący) | Odwrócony (`Collections.reverseOrder()`) |

### 3. Zaawansowane mechanizmy sortowania
* **Sortowanie Odwrócone**: Wykorzystano `Collections.reverseOrder()`, aby posortować listę ułamków od największej do najmniejszej wartości.
* **Iteracja**: Pokazano klasyczną pętlę `for-each` dla tablic oraz użycie iteratora (widoczne w bajtkodzie `.class`) dla list.

## Struktura plików
* `Main.java` – Zawiera definicję klasy startowej oraz klasy `Ulamek` wraz z logiką porównywania.
* `Main.class` / `Ulamek.class` – Skompilowane pliki binarne potwierdzające poprawność implementacji.

## Instrukcja uruchomienia

Program znajduje się w domyślnym pakiecie (brak deklaracji `package`). Aby go uruchomić:

```bash
# Kompilacja
javac Main.java

# Uruchomienie
java Main