#include <iostream>
#include <string>
using namespace std;


//zad1
int F( int a = 1, float b = 12.5, bool c = false, string text="Jest w pytę!" )
{
float wynik=a*b;
cout <<wynik<<endl;
if(c){
    cout<<text<<endl;
}
return 0;
}
//zad2
int Srednia( int a, int b )
{
    int wynik=(a+b)/2;
    cout <<wynik<<endl;
 return wynik;
}
float Srednia( float a, float b )
{
    float wynik=(a+b)/2;
    cout <<wynik<<endl;
 return wynik;
}

char Srednia( char a, char b )
{
    char wynik=(a+b)/2;
    cout <<wynik<<endl;
 return wynik;
}
//zad3
class Macierz {
public:
    int macierz[3][3];

    Macierz() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                macierz[i][j] = 0;
            }
        }
    }

    Macierz operator+(const Macierz& m) {
        Macierz wynik;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                wynik.macierz[i][j] = macierz[i][j] + m.macierz[i][j];
            }
        }
        return wynik;
    }

    Macierz operator*(const Macierz& m) {
        Macierz wynik;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                wynik.macierz[i][j] = 0;
                for (int k = 0; k < 3; k++) {
                    wynik.macierz[i][j] += macierz[i][k] * m.macierz[k][j];
                }
            }
        }
        return wynik;
    }

    void Drukuj() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                cout << macierz[i][j] << " ";
            }
            cout << endl;
        }
        cout << endl;
    }
};

int main()
{
    //zad1
    F();
    F(2);
    F(3, 5.5);
    F(4, 5.5, true);
    F(5, 6.5, true, "Koniec");
    F(0, 0.0, false, "Ciekawe czy sie wyswietli");
//zad2
    Srednia(3, 5);
    Srednia(2.5f, 7.8f);
    Srednia('a', 'c');
//zad3
    Macierz obj1, obj2;
    obj1.macierz[0][0] = 1;
    obj1.macierz[0][1] = 2;
    obj1.macierz[0][2] = 3;
    obj1.macierz[1][0] = 4;
    obj1.macierz[1][1] = 5;
    obj1.macierz[1][2] = 6;
    obj1.macierz[2][0] = 7;
    obj1.macierz[2][1] = 8;
    obj1.macierz[2][2] = 9;

    obj2.macierz[0][0] = 9;
    obj2.macierz[0][1] = 8;
    obj2.macierz[0][2] = 7;
    obj2.macierz[1][0] = 6;
    obj2.macierz[1][1] = 5;
    obj2.macierz[1][2] = 4;
    obj2.macierz[2][0] = 3;
    obj2.macierz[2][1] = 2;
    obj2.macierz[2][2] = 1;

    Macierz obj3 = obj1 + obj2;
    Macierz obj4 = obj1 * obj2;

    obj1.Drukuj();
    obj2.Drukuj();
    obj3.Drukuj();
    obj4.Drukuj();
    return 0;
}
