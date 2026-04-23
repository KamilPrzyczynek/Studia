#include <iostream>
#include <array>
#include <string>
#include <list>

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
        zmienno = zmienno2;
        zmienno2 = (a2 + b2 + c2) / 3.0f;
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
    void Drukuj_liste( list<int> &Lista )
    {
     for( list<int>::iterator it = Lista.begin(); it != Lista.end(); it++ )
     {
     cout << *it << " ";
     }
     cout << endl;
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
    list<int> Lista1 = { 10, 20, 30, 40, 50 };
    list.Drukuj_liste();

    return 0;
}
