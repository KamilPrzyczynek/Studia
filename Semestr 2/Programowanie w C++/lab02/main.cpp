#include <iostream>

using namespace std;

int main() {
    int size;
    cout << "Podaj rozmiar tablicy: ";
    cin >> size;

    int* array = new int[size];
    int value = 10;
    for (int i = 0; i < size; i++) {
        array[i] = value;
        value += 5;
    }

    cout << "Tablica: ";
    for (int i = 0; i < size; i++) {
        cout << array[i] << " ";
    }
    cout << endl;

    int new_size;
    cout << "Podaj nowy rozmiar tablicy: ";
    cin >> new_size;

    if (new_size < size) {
        int* new_array = new int[new_size];
        for (int i = 0; i < new_size; i++) {
            new_array[i] = array[i];
        }
        delete[] array;
        array = new_array;
        size = new_size;
    } else if (new_size > size) {
        int* new_array = new int[new_size];
        for (int i = 0; i < size; i++) {
            new_array[i] = array[i];
        }
        for (int i = size; i < new_size; i++) {
            new_array[i] = 0;
        }
        delete[] array;
        array = new_array;
        size = new_size;
    }

    cout << "Nowa tablica: ";
    for (int i = 0; i < size; i++) {
        cout << array[i] << " ";
    }
    cout << endl;

    delete[] array;
    return 0;
}


#include <iostream>

using namespace std;

struct Dane {
    int a, b, suma, iloczyn;
    float srednia;
};

void wczytaj(Dane& dane) {
    cout << "Podaj liczby a i b: ";
    cin >> dane.a >> dane.b;
}

void oblicz(Dane& dane) {
    dane.suma = dane.a + dane.b;
    dane.iloczyn = dane.a * dane.b;
    dane.srednia = static_cast<float>(dane.suma) / 2.0;
}

void drukuj(const Dane& dane) {
    cout << "Liczba a: " << dane.a << endl;
    cout << "Liczba b: " << dane.b << endl;
    cout << "Suma: " << dane.suma << endl;
    cout << "Iloczyn: " << dane.iloczyn << endl;
    cout << "Srednia: " << dane.srednia << endl;
}

int main() {
    Dane dane;
    wczytaj(dane);
    oblicz(dane);
    drukuj(dane);
    return 0;
}

//vektory
#include <iostream>
#include <vector>
#include <algorithm> // do użycia funkcji std::minmax_element()

struct VectorData {
    std::vector<int> elements;
};

void readVectorSize(VectorData& data) {
    int size;
    std::cout << "Podaj rozmiar wektora: ";
    std::cin >> size;
    data.elements.resize(size);
}

void readVectorElements(VectorData& data) {
    std::cout << "Podaj elementy wektora:\n";
    for (int i = 0; i < data.elements.size(); ++i) {
        std::cin >> data.elements[i];
    }
}

void printVector(const VectorData& data) {
    std::cout << "Wektor: ";
    for (int i = 0; i < data.elements.size(); ++i) {
        std::cout << data.elements[i] << " ";
    }
    std::cout << std::endl;
}

void insertElements(VectorData& data) {
    int a, b, c;
    std::cout << "Podaj 3 liczby do wstawienia do wektora: ";
    std::cin >> a >> b >> c;
    // wstawianie na losową pozycję (w zakresie [1, size-1])
    int pos = rand() % (data.elements.size()-1) + 1;
    data.elements.insert(data.elements.begin()+pos, {c, b, a});
}

void removeElement(VectorData& data) {
    int idx;
    std::cout << "Podaj indeks elementu do usunięcia: ";
    std::cin >> idx;
    if (idx >= 0 && idx < data.elements.size()) {
        data.elements.erase(data.elements.begin()+idx);
        std::cout << "Usunięto element o indeksie " << idx << std::endl;
    } else {
        std::cout << "Niepoprawny indeks elementu\n";
    }
}

void findMinMax(const VectorData& data) {
    auto minmax = std::minmax_element(data.elements.begin(), data.elements.end());
    std::cout << "Najmniejsza wartość: " << *minmax.first << std::endl;
    std::cout << "Największa wartość: " << *minmax.second << std::endl;
}

void resizeVector(VectorData& data) {
    int size;
    std::cout << "Podaj nowy rozmiar wektora: ";
    std::cin >> size;
    data.elements.resize(size);
}

int main() {
    VectorData data;
    readVectorSize(data);
    readVectorElements(data);
    printVector(data);

    insertElements(data);
    printVector(data);

    removeElement(data);
    printVector(data);

    findMinMax(data);

    resizeVector(data);
    printVector(data);

    return 0;
}

#include <iostream>
#include <vector>

void printVector(const std::vector<double>& v) {
    for (auto element : v) {
        std::cout << element << " ";
    }
    std::cout << std::endl;
}

void readValues(std::vector<double>& v, int n) {
    double value;
    for (int i = 0; i < n; i++) {
        std::cin >> value;
        v.push_back(value);
    }
}

int main() {
    std::vector<double> v;

    readValues(v, 4);
    std::cout << "Rozmiar vectora: " << v.size() << std::endl;
    printVector(v);

    v.pop_back();
    v.pop_back();
    v.insert(v.begin()+1, 55.66);

    std::cout << "Rozmiar vectora: " << v.size() << std::endl;
    printVector(v);

    return 0;
}

