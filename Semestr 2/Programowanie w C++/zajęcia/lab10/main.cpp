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
    suma2(f2, i2);
    suma2(f2, d2);
    short s2 = 50;
    long long l2 = 13123123;
    suma2(s2, l2);
    char c2 = 'a';
    string t2 = "ala ma kota";
    suma2(c2, t2);

    return 0;
}
