#include <iostream>
#include <string>

using namespace std;

void ustaw(int& liczba, string& zdanie, int tablica[]) {
    liczba = 10;
    zdanie = "To jest zdanie";
    for(int i = 0; i < 12; i++) {
        tablica[i] = i + 1;
    }
}

void drukuj(const int liczba, const string& zdanie, const int tablica[]) {
    cout << "Liczba: " << liczba << endl;
    cout << "Zdanie: " << zdanie << endl;
    cout << "Tablica: ";
    for(int i = 0; i < 12; i++) {
        cout << tablica[i] << " ";
    }
    cout << endl;
}
void Drukowanietab(int* tablica2, int size) {
    for(int i = 0; i < size; i++) {
        cout << tablica2[i] << " ";
    }
    cout << endl;
}
void zad2(){
    int size;
    cout << "Podaj rozmiar tablicy: ";
    cin >> size;

    int* tablica2 = new int[size];
    for(int i = 0; i < size; i++) {
        tablica2[i] = (i + 1) * 10;
    }
    Drukowanietab(tablica2, size);

    int newsize;
    cout << "Podaj nowy rozmiar tablicy: ";
    cin >> newsize;

    if(newsize < size) {
        int* newtablica2 = new int[newsize];
        for(int i = 0; i < newsize; i++) {
            newtablica2[i] = tablica2[i];
        }
        delete[] tablica2;
        tablica2 = newtablica2;
    }
    else if(newsize > size) {
        int* newtablica2 = new int[newsize];
        for(int i = 0; i < size; i++) {
            newtablica2[i] = tablica2[i];
        }
        for(int i = size; i < newsize; i++) {
            newtablica2[i] = 0;
        }
        delete[] tablica2;
        tablica2 = newtablica2;
    }

    Drukowanietab(tablica2, newsize);

    delete[] tablica2;
}
struct Dane {
    int a, b, suma, iloczyn;
    float srednia;
};

void wczytaj3(Dane &d) {
    cout << "Podaj a: ";
    cin >> d.a;
    cout << "Podaj b: ";
    cin >> d.b;
}

void oblicz3(Dane &d) {
    d.suma = d.a + d.b;
    d.iloczyn = d.a * d.b;
    d.srednia = (float)(d.suma) / 2;
}

void drukuj3(const Dane &d) {
    cout << "a: " << d.a << endl;
    cout << "b: " << d.b << endl;
    cout << "suma: " << d.suma << endl;
    cout << "iloczyn: " << d.iloczyn << endl;
    cout << "srednia: " << d.srednia << endl;
}
int main() {
    int liczba;
    string zdanie;
    int tablica[12];

    zad2();

    ustaw(liczba, zdanie, tablica);
    drukuj(liczba, zdanie, tablica);
    Dane d;
    wczytaj3(d);
    oblicz3(d);
    drukuj3(d);
    return 0;


    return 0;
}
