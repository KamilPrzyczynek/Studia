#include <iostream>
#include <string>
using namespace std;
struct operacje{
    int a,b,suma,iloczyn;
    float srednia;
};


void zad1(){
    cout << "Hello World!" << endl;
    int a;
    int b;
    int c;
    cout << "Podaj 3 liczby" << endl;

    cin >> a;
    cin >> b;
    cin >> c;
    int wynik=(a+b+c)/3;

    cout << "srednia wynosi: " << wynik << endl;

    string zdanie;

    cout << "wpisz zdanie: " << endl;


    cin.ignore();
    getline(cin,zdanie);
    cout << "ilosc znakow:" <<zdanie.length() << endl;

    for(int i=0;i<100;i++)
    {
        i=i*10;
    }
    for(int i=0;i<100;i++)
    {
        cout.width(100);

    }

}

void zad2ustaw(int tab[100]){

    int liczba=5;
    for(int i=0;i<100;i++)
    {
       tab[i]= 10+i*5;
    }


}


void zad2druk(int tab[100]){

    for(int i=0;i<100;i++)
    {
        cout << tab[i] << " ";
    }
    cout <<" "<< endl;
}

void zad3wczyt(operacje *ptr){
    cout << "Podaj 1 liczbe: ";
    cin >> ptr->a;

    cout << "Podaj 2 liczbe: ";

    cin >> ptr->b;
}

void zad3oblicz(operacje *ptr){
    ptr->suma=ptr->a + ptr->b;

    ptr->iloczyn=ptr->a * ptr->b;

    ptr->srednia=(float)(ptr->a + ptr->b)/2;
}
void zad3druk(const operacje ptr)
{
    cout << "suma to:" << ptr.suma << endl;
    cout << "srednia to: " << ptr.srednia << endl;
}

int main()
{
    zad1();
    //////////ZAD2
    int tab[100];
    zad2ustaw(tab);
    zad2druk(tab);
    //////////ZAD3
    operacje obliczenia;
    zad3wczyt(&obliczenia);
    zad3oblicz(&obliczenia);
    zad3druk(obliczenia);
    //////////ZAD4

    return 0;
}
