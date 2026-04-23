#include <iostream>

using namespace std;
class cBazowa {
public:
    cBazowa() {cout << "Ctor bazowa\n";}
    virtual ~cBazowa() {cout << "Dtor bazowa\n";}
};
class cPochodna : public cBazowa
{
public:
    cPochodna() {cout << "Ctor bazowa\n";}
    ~cPochodna() {cout << "Dtor bazowa\n";}
};
class cZwierze  {
public:
    virtual void Daj_glos(){
        cout<<"Zwierze robi: "<<"\n";
    }
    virtual ~cZwierze() {};
};
class cKot : public cZwierze {
public:
     void Daj_glos() override{
        cout<< "Miał Miał "<<"\n";
    }
};
class cPies : public cZwierze{
public:
     void  Daj_glos() override{
        cout<< "Hau hau "<<"\n";
    }
};
class cSwinka : public cZwierze{
public:
     void  Daj_glos() override{
        cout<< "WIII WIWIIWI IWIW "<<"\n";
    }
};
class cLis : public cZwierze{
public:
     void  Daj_glos() override{
        cout<< "Łu tutututu "<<"\n";
    }
};
class cZwierze1   {
public:
    virtual void Daj_glos1() final{
        cout<<"Zwierze robi: "<<"\n";
    }
    virtual ~cZwierze1() {};
};
class cKot1 : public cZwierze1 {
public:
     void Daj_glos1() final{
        cout<< "Miał Miał "<<"\n";
    }
};
class cPies1 : public cZwierze1{
public:
     void  Daj_glos1() final{
        cout<< "Hau hau "<<"\n";
    }
};
int main()
{
cBazowa *obj = new cPochodna;
delete obj;
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
cZwierze1 *zw11 = new cZwierze1;
cZwierze1 *zw22 = new cKot1;
cZwierze1 *zw33 = new cPies1;
zw11->Daj_glos1();
zw22->Daj_glos1();
zw33->Daj_glos1();
    return 0;
}
