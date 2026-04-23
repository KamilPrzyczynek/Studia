#include <iostream>

using namespace std;

class cBazowa {
public:
    cBazowa() { cout << "CTOR bazowa" << endl; }
    virtual ~cBazowa() { cout << "DTOR bazowa" << endl; }

    virtual void Pistolecik() {
        cout << "Metoda virtualna bazowa 1" << endl;
    }
    virtual void metodaFinalowaVirtualna() final {
        cout << "Metoda virtualna finalowa bazowa" << endl;
    }
};

class cPochodna : public cBazowa {
public:
    cPochodna() { cout << "CTOR pochodna" << endl; }
    ~cPochodna() { cout << "DTOR pochodna" << endl; }
    void Pistolecik() override {
        cout << "Metoda virtualna klasy pochodnej pierwsza" << endl;
    }
    /*
     // Nie kompiluje się, final
    void metodaFinalowaVirtualna() override {
        cout << "Metoda virtualna finalowa pochodna" << endl;
    }
    */

};

class cPistolet {
public:
    virtual void Pistolecik() {
        cout << "Biorę pistolet" << endl;
    }
    virtual ~cPistolet() {}
};

class cAmunicja : public cPistolet {
public:
    void Pistolecik() override {
        cout << "Ładuje kulki" << endl;
    }
};

class cKlamkanbita : public cPistolet {
public:
    void Pistolecik() override {
        cout << "Celuje" << endl;
    }
};

class cTratra : public cPistolet {
public:
    void Pistolecik() override {
        cout << "Puuuuuuuuuu" << endl;
    }
};

class cZgon : public cPistolet {
public:
    void Pistolecik() override {
        cout << "Zgon hed szot" << endl;
    }
};

// finalowa

class cBazowa2 final {
public:
    cBazowa2() {
        cout << "Konstruktor bazowy finalowej" << endl;
    }
    virtual ~cBazowa2() {
        cout << "Destruktor bazowy finalowej" << endl;
    }
    void Pistolecik() {
        cout << "Metoda virtualna klasy cBazowa2" << endl;
    }
};

/* // Klasa nie kompiluje się, ponieważ bazowa klasa jest oznaczona jako final
class cPochodna3 : public cBazowa2 {
public:
    cPochodna3() {
        cout << "Konstruktor pochodny finalowy" << endl;
    }
    ~cPochodna3() {
        cout << "Destruktor pochodny finalowy" << endl;
    }
};
*/

int main()
{
    // 1
    cBazowa *obj = new cPochodna;
    delete obj;

    // 2
    cPistolet *zw1 = new cPistolet;
    cPistolet *zw2 = new cAmunicja;
    cPistolet *zw3 = new cKlamkanbita;
    cPistolet *zw4 = new cTratra;
    cPistolet *zw5 = new cZgon;

    zw1->Pistolecik();
    zw2->Pistolecik();
    zw3->Pistolecik();
    zw4->Pistolecik();
    zw5->Pistolecik();

    //3
    cBazowa2 *zw6 = new cBazowa2();
    zw6->Pistolecik();
    delete zw6;

    //4
    cPistolet *zw7 = new cTratra;
    zw7->Pistolecik();

    delete zw1;
    delete zw2;
    delete zw3;
    delete zw4;
    delete zw5;
    delete zw7;

    return 0;
}
