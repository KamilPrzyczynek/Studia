#include <iostream>
#include <fstream>
#include <string>

using namespace std;

void zad_1() {
    unsigned int a;
    long long b;
    short c;
    char d;
    float e;
    double f;
    char tab[8];
    int tab2[5];
    string text;

    cout << "Podaj liczbe całkowita nieujemna: ";
    cin >> a;
    cout << "Podaj liczbe całkowita dluga: ";
    cin >> b;
    cout << "Podaj liczbe całkowita krotka: ";
    cin >> c;
    cout << "Podaj jeden znak: ";
    cin >> d;
    cout << "Podaj liczbe zmienoprzecikowa pojedynczej precyzji: ";
    cin >> e;
    cout << "Podaj liczbe zmienoprzecikowa podwojnej precyzji: ";
    cin >> f;
    cout << "Podaj wyraz makysmalnie 7 znakow: ";
    cin >> tab;

    for (int i = 0; i < 5; i++) {
        cout << "Podaj liczbe: ";
        cin >> tab2[i];
    }

    int zmiena1;
    cout << "Podaj wielkosc tablicy: ";
    cin >> zmiena1;
    int* tab_3 = new int[zmiena1];

    for (unsigned int i = 0; i < zmiena1; i++) {
        tab_3[i] = 1 + i;
    }

    cout << "Podaj tekst: ";
    cin.ignore();
    getline(cin,text);

    fstream plik;
    plik.open("plik_binarny.bin", ios::out | ios::binary);
    if (!plik.good())
    {
        cout << "Nie mozna otworzyc pliku" << endl;
        plik.close();
        return;
    }

    //Liczbę całkowitą krótką.
    plik.write((char*)&c, sizeof(c));

    // Liczbę zmiennoprzecinkową pojedynczej precyzji.
    plik.write((char*)&e, sizeof(e));
    // Liczbę całkowitą długą.
    plik.write((char*)&b, sizeof(b));
    //  Liczbę zmiennoprzecinkową podwójnej precyzji.
    plik.write((char*)&f, sizeof(f));
    //  Pojedynczy wyraz.
    plik.write(tab, sizeof(tab));
    //  Liczbę całkowitą nieujemną.
    plik.write((char*)&a, sizeof(a));
    //  Tablicę o 5 elementach.
    plik.write((char*)tab2, sizeof(tab2));
    //  Jeden znak.
    plik.write(&d, sizeof(d));
    //  Tablicę o zmiennej długości.
    plik.write((char*)&zmiena1, sizeof(zmiena1));
    plik.write((char*)tab_3, zmiena1 * sizeof(int));
    // tekst zawiera kilka wyrazow
    int textLength = text.length();
    plik.write((char*)&textLength, sizeof(textLength));
    plik.write(text.c_str(), textLength);

    plik.close();

}

void zad_2() {
    short a = 0;
    float b = 0.0f;
    long long c = 0;
    double d = 0.0;
    char tab[8] = { 0 };
    unsigned int f = 0;
    int tab2[5] = { 0 };
    char g = '\0';
    int zmiena1 = 0;
    int* tab_3 = nullptr;
    cout << "Wczytanie z pliku"<<endl;

    fstream plik;
    plik.open("plik_binarny.bin", ios::in | ios::binary);
    if (!plik.is_open()) {
        cout << "Nie mozna otworzyc pliku" << endl;
    }
    else {
        // Liczba całkowita krótka.
        plik.read((char*)&a, sizeof(a));
        cout << "short: " << a << endl;

        // Liczba zmiennoprzecinkowa pojedynczej precyzji.
        plik.read((char*)&b, sizeof(b));
        cout << "float: " << b << endl;

        // Liczba całkowita długa.
        plik.read((char*)&c, sizeof(c));
        cout << "long long: " << c << endl;

        // Liczba zmiennoprzecinkowa podwójnej precyzji.
        plik.read((char*)&d, sizeof(d));
        cout << "double: " << d << endl;

        // Pojedynczy wyraz.
        plik.read(tab, sizeof(tab));
        cout << "char : " << tab << endl;

        // Liczba całkowita nieujemna.
        plik.read((char*)&f, sizeof(f));
        cout << "unsigned int: " << f << endl;

        // Tablica o 5 elementach.
        plik.read((char*)tab2, sizeof(tab2));
        cout << "int: ";
        for (int i = 0; i < 5; i++) {
            cout << tab2[i] << " ";
        }
        cout << endl;

        // Jeden znak.
        plik.read((char*)&g, sizeof(g));
        cout << "char: " << g << endl;

        // Tablica o zmiennej długości.
        plik.read((char*)&zmiena1, sizeof(zmiena1));
        tab_3 = new int[zmiena1];
        plik.read((char*)tab_3, zmiena1 * sizeof(int));
        cout << "dynamiczna tablica: ";
        for (unsigned int i = 0; i < zmiena1; i++) {
            cout << tab_3[i] << " ";
        }
        cout << endl;

        // Łańcuch znaków.
        int dlugosctext = 0;
        plik.read((char*)&dlugosctext, sizeof(dlugosctext));
        char* text = new char[dlugosctext + 1];
        plik.read(text, dlugosctext);
        text[dlugosctext] = '\0';
        cout << "string: " << text << endl;

        delete[] tab_3;

        plik.close();
    }
}

int main() {
    zad_1();

    zad_2();
    return 0;
}
