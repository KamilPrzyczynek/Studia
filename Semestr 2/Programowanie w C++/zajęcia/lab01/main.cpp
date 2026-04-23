#include <iostream>
#include <string>
#include <cmath>
#include <cctype>
using namespace std;

void zad1(){
    float a, b, c, wynik;

    cout << "Podaj trzy liczby: ";
    cin >> a >> b >> c;
    wynik = (a + b + c) / 3;
    cout << "Srednia wynosi: " << wynik << endl;

    string zdanie;
    cout << "Podaj zdanie: ";
    cin.ignore(1);
    getline(cin, zdanie);
    cout << "Ilosc znakow: " << zdanie.length() << endl;

    cout << "Sekwencja liczb: " << endl;
    for (int i = 0; i <= 6; i++) {
        int number = pow(10, i);
        cout.width(100);
        cout << number << endl;
    }
}

void zad2wczytaj(int tab[100]){
    for(int i=0;i<100;i++)
    {
       tab[i]= 10+i*5;
    }
}

void zad2drukuj(int tab[100]){
    for(int i=0;i<100;i++)
    {
        cout << tab[i] << " ";
    }
    cout <<" "<< endl;
}

struct Struktura {
    int a;
    int b;
    int suma;
    int iloczyn;
    float srednia;
};

void zad3wczytaj(Struktura* s) {
    cout << "Podaj wartosc a: ";
    cin >> s->a;
    cout << "Podaj wartosc b: ";
    cin >> s->b;
}

void zad3oblicz(Struktura* s) {
    s->suma = s->a + s->b;
    s->iloczyn = s->a * s->b;
    s->srednia = (float)(s->suma) / 2;
}

void zad3drukuj(const Struktura s) {
    cout << "a = " << s.a << endl;
    cout << "b = " << s.b << endl;
    cout << "suma = " << s.suma << endl;
    cout << "iloczyn = " << s.iloczyn << endl;
    cout << "srednia = " << s.srednia << endl;
}

void zad4(){
    const int n = 16;
    int tablica[n][n];

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            int x = i < n / 2 ? i : n - i - 1;
            int y = j < n / 2 ? j : n - j - 1;
            int dist = x < y ? x : y;
            tablica[i][j] = dist;
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << tablica[i][j] << " ";
        }
        cout <<endl;
    }
}
int main()
{
    zad1();

    int tab[100];
    zad2wczytaj(tab);
    zad2drukuj(tab);

    Struktura s;
    zad3wczytaj(&s);
    zad3oblicz(&s);
    zad3drukuj(s);

    zad4();

    return 0;
}
