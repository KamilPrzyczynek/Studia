#include <iostream>
#include "kolekcja_punktow.h"

int main() {
    KolekcjaPunktow kolekcja;

    kolekcja.ustawPunktyRecznie();
    kolekcja.obliczOdleglosci();
    kolekcja.drukuj();


    kolekcja.ustawPunktyLosowo();
    kolekcja.obliczOdleglosci();
    kolekcja.drukuj();

    return 0;
}
