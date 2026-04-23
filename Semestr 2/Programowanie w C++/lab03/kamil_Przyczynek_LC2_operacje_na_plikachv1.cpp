
#include <iostream>
#include <string>
#include <fstream>
#include <vector>
#include <cmath>
using namespace std;

void zad1(){
    char znak;
    int d;
    double z1,z2;
    const int size=15;
    int tab[size];
    double a;
    string tekst;




    cout << "Podaj znak ";
    cin >> znak;
    cout << "Podaj liczbe calkowita ";
    cin >> d;
    tab[0]=d;
    cout << "Podaj 2 liczby zmienooprzecinkowe: ";
    cin >> z1 >> z2;
    cout << "Podaj tekst: ";
    cin.ignore();
    getline(cin,tekst);

    double sqrz1=sqrt(z1);
    double powz2=pow(z1,3.0);

    for(int i=1;i<size;i++)
    {
        tab[i]=tab[i-1]-3;
    }
    int *tab2 =new int [d];
    tab2[0]=d;

    for(int i=1;i<d;i++)
    {
        tab2[i]=100+i;
    }
    cout<<endl;

    fstream plik;
    plik.open( "dane_testowe.txt", ios::out );
    if( plik.good() != true )
    {
        cout << "Nie mozna otworzyc pliku" << endl;
        plik.close();


    }

    plik << sqrz1 << endl;
    plik << powz2 << endl;
    plik << znak << endl;


    for(int i=1;i<size;i++)
    {
        plik<<tab[i]<< " ";
    }
    plik << endl;
    plik << d << endl;
    for(int i=1;i<d;i++)
    {
        plik<<tab2[i]<< " ";
    }
    plik <<endl;
    plik << tekst << endl;
delete[] tab2;
    plik.close();

}
void zad2(){
    fstream plik;
    plik.open( "dane_testowe.txt", ios::in );
    if( plik.good() != true )
    {
        cout << "Nie mozna otworzyc pliku" << endl;
        plik.close();


    }
    double z1,z2;

    plik >> z1;
    cout<<"Pierwiastek z liczby z1: "<<z1<<endl;
    plik >> z2;
    cout<<"Pierwiastek 3 potegi  z liczby z1: "<<z2<<endl;

    char znak;
    plik >> znak;
    for(int i=0;i<10;i++)
    {
        cout<<znak<<",";
    }
    cout << endl;
    int tab[15];

    for(int i=1;i<15;i++)
    {
        plik>>tab[i];
    }
    for(int i=1;i<15;i++)
    {
        cout<<tab[i]<<" ";
    }
    cout << endl;
    int d;
    plik >> d;
    int *tab2 = new int[d];
    tab2[0] = d;
    for (int i = 1; i < d; i++) {
        plik >> tab2[i];
    }
    for (int i = 1; i < d; i++) {
        cout << tab2[i] << " ";
    }
    cout << endl;

    string tekst;
    getline(plik, tekst);
    getline(plik, tekst);
    cout << tekst << endl;
    delete[] tab2;
    plik.close();
}
int main()
{
   zad1();
    zad2();
    return 0;
}
