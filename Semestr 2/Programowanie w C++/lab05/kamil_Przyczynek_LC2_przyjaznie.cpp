#include <iostream>
using namespace std;

class cProstokat;

class cPunkt {
private:
    float x, y;
public:
    cPunkt(float x_, float y_) : x(x_), y(y_) {}

    bool Kolizja(const cProstokat& prostokat);
};

class cProstokat {
private:
    float x0, y0, szerokosc, wysokosc;

public:
    cProstokat(float x0_, float y0_, float szerokosc_, float wysokosc_)
        : x0(x0_), y0(y0_), szerokosc(szerokosc_), wysokosc(wysokosc_) {}

    friend bool cPunkt::Kolizja(const cProstokat& prostokat);
};

bool cPunkt::Kolizja(const cProstokat& prostokat) {
    if (x >= prostokat.x0 && x <= prostokat.x0 + prostokat.szerokosc &&
        y >= prostokat.y0 && y <= prostokat.y0 + prostokat.wysokosc) {
        return true;
    }
    else {
        return false;
    }
}
class Dynamicznatablica {
public:
    int* arr;
    int size;

    Dynamicznatablica(int size) {
        this->size = size;
        arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = i + 1;
        }
    }

    ~Dynamicznatablica() {
        delete[] arr;
    }

    void Drukuj() {
        for (int i = 0; i < size; i++) {
            cout << arr[i] << " ";
        }
        cout <<endl;
    }

    Dynamicznatablica& operator=(const Dynamicznatablica& other) {
        if (this != &other) {
            delete[] arr;
            size = other.size;
            arr = new int[size];
            for (int i = 0; i < size; i++) {
                arr[i] = other.arr[i];
            }
        }
        return *this;
    }
};
int main() {
    cProstokat prostokat(0, 0, 10, 5);
    cPunkt punkt(2, 3);

    bool kolizja = punkt.Kolizja(prostokat);
    cout << "Kolizja: " << kolizja << endl;

    Dynamicznatablica obj1(20);
    Dynamicznatablica obj2(10);
    obj1.Drukuj();
    obj2.Drukuj();
    obj1 = obj2;
    obj1.arr[0] = 99;
    obj2.Drukuj();

    return 0;
}
