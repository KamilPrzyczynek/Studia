#ifndef KOLEKCJA_PUNKTOW_H
#define KOLEKCJA_PUNKTOW_H

#include "punkt.h"

class KolekcjaPunktow {
private:
    static const int MAX_PUNKTOW = 10;
    Punkt punkty[MAX_PUNKTOW];
    float odleglosci[MAX_PUNKTOW];
public:
    void ustawPunktyRecznie();
    void ustawPunktyLosowo();
    void obliczOdleglosci();
    void drukuj() const;
};

#endif // KOLEKCJA_PUNKTOW_H
