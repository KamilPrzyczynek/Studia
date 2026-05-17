# IW 5 – Modelowanie wymagań

## Zadanie 1 – System rezerwacji sal konferencyjnych

---

## a) Aktorzy systemu

### Aktorzy bezpośredni

- Pracownik
- Menedżer
- Administrator
- Niezalogowany użytkownik

Aktor bezpośredni korzysta z systemu przez interfejs i sam wykonuje akcje.

### Aktor pośredni

- System e-mail

Aktor pośredni współpracuje z systemem automatycznie. W tym przypadku system e-mail wysyła powiadomienia po zmianie statusu rezerwacji.

---

## b) Błędy i braki w diagramie

### Błąd 1 – brak generalizacji Menedżera do Pracownika

W opisie systemu jest informacja, że Menedżer ma wszystkie uprawnienia Pracownika. W diagramie trzeba więc dodać generalizację.

Poprawka:

```mermaid
graph LR
  M["Menedżer"] -->|generalizacja| P["Pracownik"]
```

### Błąd 2 – brakujące include do logowania

Czynności takie jak rezerwacja, anulowanie, zatwierdzanie i odrzucanie wymagają zalogowania.

Poprawka:

```mermaid
graph LR
  UC2["Zarezerwuj salę"] -->|include| UC5["Zaloguj się"]
  UC3["Anuluj rezerwację"] -->|include| UC5["Zaloguj się"]
  UC4["Zatwierdź rezerwację"] -->|include| UC5["Zaloguj się"]
  UC11["Odrzuć rezerwację"] -->|include| UC5["Zaloguj się"]
```

### Błąd 3 – niepełne powiązanie powiadomień ze zmianami statusu

Powiadomienie powinno być wysyłane po każdej zmianie statusu rezerwacji, czyli po złożeniu, zatwierdzeniu, odrzuceniu albo anulowaniu.

Poprawka:

```mermaid
graph LR
  UC2["Zarezerwuj salę"] -.->|extend| UC9["Wyślij powiadomienie"]
  UC3["Anuluj rezerwację"] -.->|extend| UC9["Wyślij powiadomienie"]
  UC4["Zatwierdź rezerwację"] -.->|extend| UC9["Wyślij powiadomienie"]
  UC11["Odrzuć rezerwację"] -.->|extend| UC9["Wyślij powiadomienie"]
```

---

## c) Dopisanie przypadku użycia „Odrzuć rezerwację”

Przypadek użycia „Odrzuć rezerwację” wykonuje Menedżer, ponieważ to on decyduje o rezerwacjach wymagających akceptacji, na przykład rezerwacjach sal VIP.

### Poprawiony diagram UC

```mermaid
graph LR
  subgraph SYS["System rezerwacji sal"]
    UC1["Przejrzyj dostępność sal"]
    UC2["Zarezerwuj salę"]
    UC3["Anuluj rezerwację"]
    UC4["Zatwierdź rezerwację"]
    UC5["Zaloguj się"]
    UC6["Zarządzaj salami"]
    UC7["Generuj raport"]
    UC8["Zgłoś usterkę"]
    UC9["Wyślij powiadomienie"]
    UC10["Zarządzaj kontami"]
    UC11["Odrzuć rezerwację"]
    UC12["Sprawdź harmonogram"]
  end

  N["Niezalogowany"] --> UC12

  P["Pracownik"] --> UC1
  P --> UC2
  P --> UC3
  P --> UC8

  M["Menedżer"] --> UC4
  M --> UC7
  M --> UC11

  A["Administrator"] --> UC6
  A --> UC10

  E["System e-mail"] --> UC9

  M -->|generalizacja| P

  UC2 -->|include| UC5
  UC3 -->|include| UC5
  UC4 -->|include| UC5
  UC11 -->|include| UC5

  UC2 -.->|extend| UC9
  UC3 -.->|extend| UC9
  UC4 -.->|extend| UC9
  UC11 -.->|extend| UC9
```

---

## d) Czy „Wyślij powiadomienie” powinno być przypadkiem użycia?

„Wyślij powiadomienie” nie jest bezpośrednim celem użytkownika systemu. Użytkownik chce zarezerwować salę, anulować rezerwację albo podjąć decyzję o zatwierdzeniu lub odrzuceniu rezerwacji. Wysłanie wiadomości e-mail jest automatyczną reakcją systemu na zmianę statusu.

Lepszym rozwiązaniem jest traktowanie powiadomień jako procesu wewnętrznego systemu albo jako zdarzenia wykonywanego po zakończeniu innych przypadków użycia. Dzięki temu diagram skupia się na działaniach aktorów i pozostaje czytelny.