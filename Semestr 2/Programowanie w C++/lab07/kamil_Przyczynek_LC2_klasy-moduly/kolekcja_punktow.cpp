#include "kolekcja_punktow.h"
#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;
void KolekcjaPunktow::ustawPunktyRecznie() {
    for (int i = 0; i < MAX_PUNKTOW; i++) {
        cout << "Podaj wspolrzedne punktu " << i << endl;
        float x, y;
        cin >> x >> y;
        punkty[i].SetX(x);
        punkty[i].SetY(y);
    }
}

void KolekcjaPunktow::ustawPunktyLosowo() {
    for (int i = 0; i < MAX_PUNKTOW; i++) {
        punkty[i].SetX(static_cast<float>(rand()) / RAND_MAX);
        punkty[i].SetY(static_cast<float>(rand()) / RAND_MAX);
    }
}

void KolekcjaPunktow::obliczOdleglosci() {
    for (int i = 0; i < MAX_PUNKTOW; i++) {
        int j = (i + 1) % MAX_PUNKTOW;
        float dx = punkty[i].GetX() - punkty[j].GetX();
        float dy = punkty[i].GetY() - punkty[j].GetY();
        odleglosci[i] = sqrt(dx * dx + dy * dy);
    }
}

void KolekcjaPunktow::drukuj() const {
    for (int i = 0; i < MAX_PUNKTOW; i++) {
        cout << "Punkt " << i << ": (" << punkty[i].GetX() << ", " << punkty[i].GetY() << "), ";
        cout << "odleglosc do nastepnego punktu: " << odleglosci[i] << endl;
    }
}
