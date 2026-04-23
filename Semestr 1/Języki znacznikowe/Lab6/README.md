# Języki Znacznikowe - Laboratorium 6: Nawigacja i Struktura Dokumentu

Szóste laboratorium poświęcone jest zaawansowanej strukturze dokumentu HTML5, optymalizacji pod kątem wyszukiwarek (SEO) oraz zarządzaniu relatywnymi ścieżkami do podstron w obrębie projektu.

## Poruszane zagadnienia

* **Meta-tagi SEO**: Wykorzystanie znaczników `<meta>` w sekcji `<head>` do definiowania opisu strony (`description`), słów kluczowych (`keywords`) oraz autora.
* **Hierarchia nagłówków**: Zastosowanie pełnej struktury nagłówków od `<h1>` do `<h6>` w celu zachowania semantyki dokumentu.
* **Formatowanie tekstu i akapity**: Wykorzystanie znaczników `<p>` dla treści oraz `<br>` do wymuszania przełamania linii.
* **Hiperłącza (Linki)**:
    * Linki zewnętrzne: Wykorzystanie atrybutu `target="_blank"` do otwierania stron w nowej karcie.
    * Linki wewnętrzne: Nawigacja między plikami w tej samej lokalizacji.
* **Struktura ścieżek relatywnych**:
    * Ścieżka w dół: Odwołanie do pliku w podfolderze (`pages/podstrona2.html`).
    * Ścieżka w górę: Powrót do katalogu nadrzędnego przy użyciu zapisu `../` (`../lab06.html`).
* **Multimedia**: Osadzanie grafik za pomocą znacznika `<img>` wraz z atrybutem tekstowym `alt`.

## Struktura plików laboratorium

```text
/
├── lab06.html          (Strona główna laboratorium)
├── podstrona.html      (Podstrona w katalogu głównym)
└── pages/
    └── podstrona2.html (Podstrona w osobnym folderze)