#include <iostream>

using namespace std;

class cBazowa {
public:
    cBazowa() { cout << "Ctor bazowa" << endl; }
    cBazowa(const string& message) { cout << "Ctor bazowa: " << message << endl; }
    virtual ~cBazowa() { cout << "Dtor bazowa" << endl; }
};

class cPochodna : public cBazowa {
public:
    cPochodna() { cout << "Ctor pochodna" << endl; }
    ~cPochodna() { cout << "Dtor pochodna" << endl; }
};

class cZwierze {
public:
    virtual void Daj_glos() {
        cout << "Zwierze robi: ";
    }
    virtual ~cZwierze() {}
};

class cKot : public cZwierze {
public:
    void Daj_glos() override {
        cout << "Miał Miał" << endl;
    }
};

class cPies : public cZwierze {
public:
    void Daj_glos() override {
        cout << "Hau hau" << endl;
    }
};

class cSwinka : public cZwierze {
public:
    void Daj_glos() override {
        cout << "WIII WIWIIWI IWIW" << endl;
    }
};

class cLis : public cZwierze {
public:
    void Daj_glos() override {
        cout << "Łu tutututu" << endl;
    }
};

class cZwierze1 {
public:
    virtual void Daj_glos1() {
        cout << "Zwierze robi: ";
    }
    virtual ~cZwierze1() {}
};

class cKot1 : public cZwierze1 {
public:
    void Daj_glos1() override {
        cout << "Miał Miał" << endl;
    }
};

class cPies1 : public cZwierze1 {
public:
     void Daj_glos1() override {
        cout << "Hau hau" << endl;
     }
};

int main() {
    cBazowa obj1;
    cPochodna obj2;
    cBazowa obj3;
    cPochodna obj4;

    cZwierze *zw1 = new cZwierze;
    cZwierze *zw2 = new cKot;
    cZwierze *zw3 = new cPies;
    cZwierze *zw4 = new cSwinka;
    cZwierze *zw5 = new cLis;

    zw1->Daj_glos();
    zw2->Daj_glos();
    zw3->Daj_glos();
    zw4->Daj_glos();
    zw5->Daj_glos();

    delete zw1;
    delete zw2;
    delete zw3;
    delete zw4;
    delete zw5;

    cZwierze1 *zw11 = new cZwierze1;
    cZwierze1 *zw22 = new cKot1;

    zw11->Daj_glos1();
    zw22->Daj_glos1();

    delete zw11;
    delete zw22;

    return 0;
}
