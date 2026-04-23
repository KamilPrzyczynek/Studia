#include <iostream>
#include <array>
#include <string>
#include <list>
#include <set>

using namespace std;

class Zadania {
private:
    int a, b, c;
    float zmienno;

public:
    string tekst;

    Zadania(int a2, int b2, int c2, float zmienno2) {
        a = a2;
        b = b2;
        c = c2;
        zmienno = (a2 + b2 + c2) / 3.0f;
        zmienno2 = zmienno;
    }

    Zadania() {
        a = 0;
        b = 0;
        c = 0;
        zmienno = 0.0f;
        tekst = "";
    }

    void Drukuj() const {
        cout << a << " " << b << " " << c << " " << zmienno << " " << tekst << endl;
    }


    friend struct Komparator;
};

struct Komparator {
    bool operator()(const Zadania& z1, const Zadania& z2) const {
        return z1.zmienno < z2.zmienno;
    }
};

int main() {
    array<Zadania, 5> tablica = {
        Zadania(1, 2, 3, 0),
        Zadania(4, 5, 6, 0),
        Zadania(7, 8, 9, 0),
        Zadania(10, 11, 12, 0),
        Zadania(13, 14, 15, 0)
    };

    tablica[0].Drukuj();
    tablica[1].Drukuj();
    tablica[1].tekst = "Daj";
    tablica[2].Drukuj();
    tablica[2].tekst = "2zł";

    for (const auto& obj : tablica) {
        obj.Drukuj();
    }

    list<Zadania> Lista1;
    Lista1.push_back(Zadania(10, 20, 30, 0));
    Lista1.push_back(Zadania(40, 50, 60, 0));
    Lista1.push_back(Zadania(70, 80, 90, 0));

    for (const auto& element : Lista1) {
        element.Drukuj();
    }
//zad3
    set<Zadania, Komparator> Zbior;
    Zbior.insert(Zadania(1, 2, 3, 0));
    Zbior.insert(Zadania(4, 5, 6, 0));
    Zbior.insert(Zadania(7, 8, 9, 0));
    Zbior.insert(Zadania(10, 11, 12, 0));
    Zbior.insert(Zadania(13, 14, 15, 0));

    for (const auto& element : Zbior) {
        element.Drukuj();
    }
    //zad4

    multiset<Zadania, Komparator> Multizbior;
       Multizbior.insert(Zadania(1, 2, 3, 0));
       Multizbior.insert(Zadania(4, 5, 6, 0));
       Multizbior.insert(Zadania(7, 8, 9, 0));
       Multizbior.insert(Zadania(10, 11, 12, 0));
       Multizbior.insert(Zadania(13, 14, 15, 0));
       Multizbior.insert(Zadania(4, 5, 6, 0));
       for (const auto& element : Multizbior) {
           element.Drukuj();
       }
    return 0;
}
