# Języki Znacznikowe - Laboratorium 9: Metody dołączania stylów CSS

Dziewiąte laboratorium poświęcone jest badaniu trzech podstawowych sposobów definiowania stylów CSS w dokumentach HTML oraz zrozumieniu mechanizmu kaskadowości i selektorów.

## Poruszane zagadnienia

* **Style liniowe (Inline styles)**: Definiowanie wyglądu bezpośrednio w znaczniku HTML za pomocą atrybutu `style`. Metoda o najwyższym priorytecie, ale najtrudniejsza w utrzymaniu.
* **Wewnętrzny arkusz stylów (Internal CSS)**: Umieszczanie reguł w sekcji `<head>` dokumentu wewnątrz znacznika `<style>`. Pozwala na stylizowanie całego pliku z jednego miejsca.
* **Zewnętrzny arkusz stylów (External CSS)**: Łączenie dokumentu z osobnym plikiem `.css` za pomocą znacznika `<link>`. Jest to standardowa metoda w profesjonalnych projektach, pozwalająca na współdzielenie stylów między wieloma podstronami.
* **Selektory CSS**:
    * Selektor znacznika (np. `header`).
    * Selektor klasy (np. `.header`).
    * Selektor identyfikatora (np. `#content`).

## Opis plików laboratorium

W ramach laboratorium przygotowano trzy przykłady implementacji stylów:

1. **jz-lab_09_01.html (Inline)**:
   - Demonstracja stylu liniowego na nagłówku `<h1>`.
   - Zdefiniowano tło, kolor tekstu oraz rozmiar czcionki bezpośrednio w atrybucie elementu.

2. **jz-lab_09_02.html (Internal)**:
   - Wykorzystanie sekcji `<style type="text/css">`.
   - Zdefiniowano marginesy, obramowanie i kolory dla elementów o określonej charakterystyce.

3. **jz-lab_09_03.html (External)**:
   - Podpięcie zewnętrznego pliku `style.css`.
   - Wykorzystanie unikalnego identyfikatora `id="content"` do stylowania konkretnego akapitu tekstu.

## Instrukcja uruchomienia

1. Otwórz pliki `.html` w przeglądarce, aby zobaczyć różnice w interpretacji stylów.
2. Spróbuj zmodyfikować kolory w arkuszach, aby zaobserwować, jak kaskada CSS priorytetyzuje style (Inline > Internal > External).

---