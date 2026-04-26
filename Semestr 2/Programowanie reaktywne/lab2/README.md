# Programowanie Reaktywne - Laboratorium 2

## Opis projektu
Drugie laboratorium koncentrowało się na rozbudowie serwisu o zaawansowane mechanizmy interakcji z użytkownikiem oraz nowoczesne metody pozycjonowania elementów. Głównym celem było stworzenie strony typu **Single Page** z nawigacją wewnątrzstronową, wdrożenie formularzy walidowanych przez przeglądarkę oraz wykorzystanie modułu **Flexbox**.

## Zawartość laboratorium

### 1. Formularze i Interaktywność (`contact.html`)
* **Struktura formularza**: Zastosowanie znaczników `<form>`, `<fieldset>` oraz `<legend>` do logicznego grupowania pól tekstowych.
* **Typy danych**: Wykorzystanie różnorodnych kontrolek wejścia:
    * `text`, `number` – dla danych podstawowych.
    * `email` – z automatyczną walidacją poprawności adresu.
    * `radio` – do wyboru płci.
    * `select` – lista rozwijalna dla wyboru stanu cywilnego.
    * `textarea` – dla dłuższych wiadomości.
* **Stylizacja Bootstrap**: Implementacja zewnętrznej biblioteki CSS w celu nadania nowoczesnego wyglądu przyciskom i polom formularza.

### 2. Layout Single Page i Nawigacja Kotwicowa
* **Menu typu Sticky**: Stworzenie paska nawigacji przyklejonego do górnej krawędzi okna (`position: fixed`).
* **Kotwice (Anchors)**: Powiązanie elementów menu z identyfikatorami sekcji (`id="kontakt"`, `id="katedra"`), co pozwala na płynne przemieszczanie się w obrębie jednej strony.
* **Efekty Hover**: Wykorzystanie właściwości `transition` w CSS do animacji linków w menu.

### 3. Zaawansowane Techniki CSS i Flexbox
* **Model Flexbox**: Wykorzystanie `display: flex` wraz z `justify-content` do precyzyjnego środkowania elementów graficznych.
* **Pozycjonowanie absolutne**: Nałożenie na siebie dwóch grafik logo (Katedry i Uczelni) przy użyciu `position: absolute` wewnątrz relatywnego kontenera (`position: relative`).
* **Efekt Parallax**: Wykorzystanie `background-attachment: fixed` oraz `background-size: cover` dla sekcji z tłem graficznym, co nadaje stronie efekt głębi podczas przewijania.
* **Box Model**: Dodanie cieniowania (`box-shadow`) oraz marginesów wewnętrznych (`padding`) dla poprawy estetyki sekcji informacyjnych.

## Technologie
* **HTML5**: Formularze, semantyka sekcji.
* **CSS3**: Flexbox, pozycjonowanie absolutne i stałe, tła wielkoformatowe.
* **Bootstrap 5**: Gotowe komponenty UI.

## Instrukcja uruchomienia
1. Pobierz pliki projektu.
2. Upewnij się, że pliki graficzne (`bg.jpg`, `ki.jpg`, `ans.jpg`) znajdują się w folderze roboczym.
3. Otwórz plik `index.html` w przeglądarce, aby przetestować nawigację Single Page.
4. Przejdź do zakładki "Kontakt", aby sprawdzić działanie formularza.

---
*Autor: Kamil Przyczynek*