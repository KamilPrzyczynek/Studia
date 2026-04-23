#include <iostream>
#include <cmath>
#include <queue>
#include <stack>

using namespace std;

class cTrojkat {
private:
    float a, b, c;
    float obwod;
    float pole;
    bool czyTrojkat;

    bool czyWarunekTrojkata() {
        if (a + b > c && a + c > b && b + c > a)
            return true;
        else
            return false;
    }

    void oblicz() {
        float p = (a + b + c) / 2;
        obwod = a + b + c;
        pole = sqrt(p * (p - a) * (p - b) * (p - c));
    }

public:
    cTrojkat(float a, float b, float c) {
        this->a = a;
        this->b = b;
        this->c = c;

        obwod = 0;
        pole = 0;
        czyTrojkat = false;

        if (czyWarunekTrojkata()) {
            oblicz();
            czyTrojkat = true;
        }
    }

    void Drukuj() {
        if (czyTrojkat) {
            cout << "A = " << a << ", B = " << b << ", C = " << c << endl;
            cout << "Pole: " << pole << endl;
            cout << "Obwod: " << obwod << endl;
        } else {
            cout << "Nie mozna zbudowac trojkata o podanych bokach." << endl;
        }
    }

    float GetPole() const {
        return pole;
    }
};

struct Comparator {
    bool operator()(const cTrojkat& t1, const cTrojkat& t2) const {
        return t1.GetPole() < t2.GetPole();
    }
};

int main() {
    // Zadanie 1
    cTrojkat trojkat1(3, 4, 5);
    trojkat1.Drukuj();
    cout << endl;

    // Zadanie 2
    stack<cTrojkat> stos;
    stos.push(cTrojkat(3, 4, 5));
    stos.push(cTrojkat(2, 2, 2));
    stos.push(cTrojkat(1, 2, 3));
    stos.push(cTrojkat(6, 8, 10));

    cout << "Stos:" << endl;
    while (!stos.empty()) {
        stos.top().Drukuj();
        stos.pop();
    }
    cout << "Rozmiar stosu: " << stos.size() << endl;
    cout << endl;

    // Zadanie 3
    queue<cTrojkat> kolejka;
    kolejka.push(cTrojkat(2, 5, 3));
    kolejka.push(cTrojkat(1, 3, 8));
    kolejka.push(cTrojkat(6,4, 7));
    kolejka.pop();
    cout << "Kolejka:" << endl;
    while (!kolejka.empty()) {
        kolejka.front().Drukuj();
        kolejka.pop();
    }
    cout << "Rozmiar kolejki: " << kolejka.size() << endl;
    cout << endl;

    // Zadanie 4
    priority_queue<cTrojkat, vector<cTrojkat>, Comparator> kolejkaPriorytetowa;

    kolejkaPriorytetowa.push(cTrojkat(2, 5, 3));
    kolejkaPriorytetowa.push(cTrojkat(1, 3, 8));
    kolejkaPriorytetowa.push(cTrojkat(6, 4, 7));

    cout << "Kolejka priorytetowa:" << endl;
/*   while (!kolejkaPriorytetowa.empty()) {
        kolejkaPriorytetowa.top().Drukuj();  //w tym miejscu wyrzuca mi błąd
        kolejkaPriorytetowa.pop();

    }
    */

    cout << "Rozmiar kolejki priorytetowej: " << kolejkaPriorytetowa.size() << endl;

    return 0;
}

