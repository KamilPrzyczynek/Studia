#include <iostream>

using namespace std;

class cProstokat {
private:
    float x0, y0, szerokosc, wysokosc;
public:
    cProstokat(float x, float y, float s, float w) {
        x0 = x;
        y0 = y;
        szerokosc = s;
        wysokosc = w;
    }
    friend bool Kolizja(float x, float y, const cProstokat& prostokat);


bool Kolizja(float x, float y, const cProstokat& prostokat) {
    if (x >= prostokat.x0 && x <= prostokat.x0 + prostokat.szerokosc &&
        y >= prostokat.y0 && y <= prostokat.y0 + prostokat.wysokosc) {
        return true;
    }
    else {
        return false;
    }
}

};

int main() {
    cProstokat prostokat(1.0, 2.0, 5.0, 4.0);
    float x = 5.0;
    float y = 3.0;
    cout << "Czy punkt o wspolrzednych (" << x << ", " << y << ") znajduje sie wewnatrz prostokata? ";
    cout << Kolizja(x, y, prostokat) <<endl;
    return 0;
}
