#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void drukuj(vector<double> vec) {
    for (int i = 0; i < vec.size(); i++) {
        cout << vec[i] << " ";
    }
    cout << endl;
}

void wczytaj(vector<double>& vec, int n) {
    for (int i = 0; i < n; i++) {
        double value;
        cout << "Podaj " << i+1 << " liczbe: ";
        cin >> value;
        vec[i] = value;
    }
}
void wypisz(const vector<int>& v) {
    for (int i : v) {
        cout << i << " ";
    }
    cout << endl;
}
void zad2(){
    int n;
    cout << "Podaj rozmiar vectora: ";
    cin >> n;
    vector<int> v(n);

    cout << "Podaj elementy vectora: ";
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }
    cout << "Vector: ";
    wypisz(v);

    int a, b, c;
    cout << "Podaj trzy liczby do wstawienia: ";
    cin >> a >> b >> c;
    v.insert(v.begin() + n/2, {a, b, c});

    int idx;
    cout << "Podaj indeks elementu do usuniecia: ";
    cin >> idx;
    v.erase(v.begin() + idx);

    auto min_max = minmax_element(v.begin(), v.end());
    cout << "Najmniejsza wartosc: " << *min_max.first << endl;
    cout << "Najwieksza wartosc: " << *min_max.second << endl;

    cout << "Podaj nowy rozmiar vectora: ";
    cin >> n;
    v.resize(n);

    cout << "Vector: ";
    wypisz(v);
}

int main() {
    vector<double> vec(4);
    wczytaj(vec, 4);
    cout << "Rozmiar vectora: " << vec.size() << endl;
    cout << "Wartosci w wektorze: ";
    drukuj(vec);
    vec.erase(vec.end()-2, vec.end());
    vec[1] = 55.66;
    cout << "Rozmiar vectora po usunieciu i podstawieniu: " << vec.size() << endl;
    cout << "Wartosci w wektorze: ";
    drukuj(vec);

    zad2();
    return 0;
}
