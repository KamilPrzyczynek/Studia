#include <iostream>
#include <type_traits>

using namespace std;

// Zadanie 1
template <typename T1, typename T2, typename T3>
void suma(T1 a, T2 b, T3 c) {
    cout << typeid(a).name() << typeid(b).name() << typeid(c).name() << "\n";
    cout << "Srednia: " << static_cast<double>(a + b + c) / 3 << "\n";
}

// Zadanie 2
template <typename K1, typename K2>
void suma2(K1 a, K2 b) {
    cout << typeid(a).name() << typeid(b).name() <<"\n";
    if (typeid(a).name() ==  typeid(b).name()) {
        cout << "Parametry sa takie same" << endl;
    } else {
        cout << "Parametry sa rozne" << endl;
    }
}
//zadanie 3
template<typename T>
class cpunkt {
public:
    T tab[10];
    T min;
    T max;

    cpunkt(T a1, T a2, T a3, T a4, T a5, T a6, T a7, T a8, T a9, T a10) {
        tab[0] = a1;
        tab[1] = a2;
        tab[2] = a3;
        tab[3] = a4;
        tab[4] = a5;
        tab[5] = a6;
        tab[6] = a7;
        tab[7] = a8;
        tab[8] = a9;
        tab[9] = a10;
        min = a1;
        max = a1;
    }

    cpunkt(T tab[10]) {
        for (int i = 0; i < 10; i++) {
            this->tab[i] = tab[i];
            if (tab[i] < min) {
                min = tab[i];
            }
            if (tab[i] > max) {
                max = tab[i];
            }
        }
    }

    void oblicz() {
        for (int i = 0; i < 10; i++) {
            if (tab[i] < min) {
                min = tab[i];
            }
            if (tab[i] > max) {
                max = tab[i];
            }
        }
    }
};
//zadanie4
void pamiec(int* &arr, int wielkosc) {
    if (wielkosc < 0) {
        throw "Rozmiar jest ujemny";
    }
    else if (wielkosc == 0) {
        throw false;
    }
    else if (wielkosc > 10000000) {
        throw wielkosc - 10000000;
    }
    arr = new int[wielkosc];
}


int main() {
    // Zadanie 1
    suma(10, 20, 30);
    suma(3.3f, 2.2f, 1.1f);
    short s = 42;
    long long ll = 1234567890;
    double d = 2.71828;
    char c = 'a';
    suma(s, ll, c);
    suma(s, d, c);

    // Zadanie 2
    float f2 = 4.0;
    int i2 = 4;
    double d2 = 1.222;
    suma2(i2, i2);
    suma2(f2, i2);
    suma2(f2, d2);
    short s2 = 50;
    long long l2 = 13123123;
    suma2(s2, l2);
    char c2 = 'a';
    string t2 = "ala ma kota";
    suma2(c2, t2);
//zadanie3
    cpunkt<int>obj1(1,2,3,4,5,6,7,8,9,10);
    obj1.oblicz();
    cout<<"Minimum: "<<obj1.min<<"Max: "<<obj1.max<<endl;

    float tab2[10] = {1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.5};
    cpunkt<float> obj2(tab2);
    obj2.oblicz();
        cout<<"Minimum: "<<obj2.min<<"Max: "<<obj2.max<<endl;

        double tab3[10] = {1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.0};
        cpunkt<double> obj3(tab3);
        obj3.oblicz();
        cout<<"Minimum: "<<obj3.min<<"Max: "<<obj3.max<<endl;
        //zadanie4
        int* arr = NULL;
        int wielkosc;

        try {
            cout << "Podaj rozmiar tablicy: ";
            cin >> wielkosc;
            pamiec(arr, wielkosc);
        }
        catch (const char* msg) {
            cout << msg << endl;
        }
        catch (bool b) {
            if (!b) {
                cout << "Rozmiar jest rowny zero" << endl;
            }
        }
        catch (int excess) {
            cout << "Przekroczono limit o " << excess << " komorek" << endl;
        }
        catch (...) {
            cout << "Cos poszlo nie tak" << endl;
        }

        delete[] arr;
    return 0;
}
