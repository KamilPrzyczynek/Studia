#include <iostream>
#include <string>
#include <cmath>

using namespace std;

class Bazowa {
public:
    void Drukuj() {
        cout << "Klasa bazowa" << endl;
    }

    void ObliczSrednia() {
        float srednia = (float)(liczba1 + liczba2 + liczba3) / 3.0;
        cout << "Srednia z liczb: " << liczba1 << ", " << liczba2 << ", " << liczba3 << " = " << srednia << endl;
    }

    void SetLiczba1(int liczba) {
        liczba1 = liczba;
    }

    int GetLiczba1() const {
        return liczba1;
    }
    void SetLiczba2(int liczba) {
        liczba2 = liczba;
    }

    int GetLiczba2() const {
        return liczba2;
    }
    void SetLiczba3(int liczba) {
        liczba2 = liczba;
    }

    int GetLiczba3() const {
        return liczba2;
    }



protected:
    float zmiennaChroniona;
    int liczba2, liczba3;

    void UstawPoleTekstowe(string poleTekstowe = "pole tekstowe z klasy bazowej") {
        this->poleTekstowe = poleTekstowe;
    }

    string ZwrocPoleTekstowe() const {
        return poleTekstowe;
    }

private:
    int liczba1;
    string poleTekstowe = "pole tekstowe z klasy bazowej";
};


class Pochodna : public Bazowa {
public:
    void Drukuj() {
        cout << "Klasa pochodna" << endl;
    }

    void UstawZmiennaChroniona(float wartosc) {
        zmiennaChroniona = abs(wartosc);
    }

    void DrukujZmiennaChroniona() {
        cout << "Zmienna chroniona = " << zmiennaChroniona << endl;
    }

    void UstawPoleTekstowe(string poleTekstowe = "pole tekstowe z klasy pochodnej") {
        Bazowa::UstawPoleTekstowe(poleTekstowe);
    }

    void DrukujPoleTekstowe() {
        cout << "Pole tekstowe = " << Bazowa::ZwrocPoleTekstowe() << endl;
    }

};

class Nadpochodna : private Pochodna {
public:
    void Drukuj() {
        cout << "Klasa nadpochodna" << endl;
        Pochodna::Drukuj();
        Bazowa::Drukuj();
        cout << Bazowa::ZwrocPoleTekstowe() << endl;
    }
};

int main() {
    Pochodna p;

    p.Drukuj();
    p.Bazowa::Drukuj();

    p.SetLiczba1(10);
    p.SetLiczba2(20);
    p.SetLiczba3(30);
    p.ObliczSrednia();

    p.UstawZmiennaChroniona(-5.6);
    p.DrukujZmiennaChroniona();

    string tekst;
    cout << "Podaj tekst: ";
    getline(cin, tekst);
    p.UstawPoleTekstowe(tekst);
    p.DrukujPoleTekstowe();

    Nadpochodna np;
    np.Drukuj();

    return 0;
}
