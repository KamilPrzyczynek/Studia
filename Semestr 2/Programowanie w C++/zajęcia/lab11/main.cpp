#include <iostream>

#include <stack>

#include <queue> // prity kłełełe

#include <time.h>

using namespace std;

//  -----task1-----

class cTrojkat {
  private: float a,
  b,
  c;
  float obwod;
  float pole;
  bool czyTrojkat;

  bool czyWarunekTrojkata() {
    if (a + b > c && a + c > b && b + c > a)
      return true;
    else
      return false;
  }

  void obliczPoleIObwod() {
    float p = (a + b + c) / 2;
    obwod = a + b + c;
    pole = sqrt(p * (p - a) * (p - b) * (p - c));
  }

  public: cTrojkat(float a, float b, float c) {
    this -> a = a;
    this -> b = b;
    this -> c = c;
    obwod = 0;
    pole = 0;
    czyTrojkat = false;

    if (czyWarunekTrojkata()) {
      obliczPoleIObwod();
      czyTrojkat = true;
    }
  }

  void Drukuj() {
    if (czyTrojkat) {
      cout << "Wlasciwosci trojkata:" << endl;
      cout << "Dlugosci bokww: a = " << a << ", b = " << b << ", c = " << c << endl;
      cout << "Pole: " << pole << endl;
      cout << "Obwod: " << obwod << endl;
    } else {
      cout << "Nie da sie zbudowac trojkata o podanych bokach." << endl;
    }
  }
};

//  -----task2-----

struct Trojkat {
  double a, b, c;

  Trojkat(double a, double b, double c): a(a), b(b), c(c) {}

  void Drukuj() {
    cout << "Trojkat o bokach: " << a << ", " << b << ", " << c << endl;
  }
};

//  -----task3-----
struct Triangle {
  int side1;
  int side2;
  int side3;

  Triangle(int s1, int s2, int s3): side1(s1), side2(s2), side3(s3) {}

  void Drukuj() {
    std::cout << "Trójkąt o bokach: " << side1 << ", " << side2 << ", " << side3 << std::endl;
  }
};
int main() {
  cout << "--------------------Zadanie 1--------------------\n" << endl;
  // Przykładowe użycie klasy cTrojkat
  cTrojkat trojkat1(3, 4, 5);
  trojkat1.Drukuj();
  cout << endl;
  cTrojkat trojkat2(1, 2, 4);
  trojkat2.Drukuj();

  cout << "\n--------------------Zadanie 2--------------------\n" << endl;
  stack < Trojkat > stos;

  // Dodawanie trójkątów do stosu
  stos.push(Trojkat(3.0, 4.0, 5.0));
  stos.emplace(2.0, 2.0, 2.0);
  stos.push(Trojkat(1.0, 2.0, 3.0));
  stos.push(Trojkat(6.0, 8.0, 10.0));

  // Wywołanie metody Drukuj na ostatnim elemencie
  stos.top().Drukuj();

  // Wyświetlanie informacji o stosie
  cout << "Rozmiar stosu: " << stos.size() << endl;
  cout << "Stos " << (stos.empty() ? "jest" : "nie jest") << " pusty" << std::endl;

  // Usuwanie elementów ze stosu
  stos.pop();
  stos.pop();

  // Wywołanie metody Drukuj na aktualnie ostatnim elemencie
  if (!stos.empty())
    stos.top().Drukuj();

  cout << "\n--------------------Zadanie 3--------------------\n" << endl;


  std::queue < Triangle > triangleQueue;

  triangleQueue.push({
    3,
    4,
    5
  });
  triangleQueue.push({
    5,
    12,
    13
  });
  triangleQueue.push({
    2,
    2,
    5
  });
  triangleQueue.emplace(7, 8, 10);

  cout << "Rozmiar kolejki: " << triangleQueue.size() << endl;

  if (!triangleQueue.empty()) {
    cout << "Pierwszy element kolejki: ";
    triangleQueue.front().Drukuj();
  }

  if (!triangleQueue.empty()) {
    cout << "Ostatni element kolejki: ";
    triangleQueue.back().Drukuj();
  }

  triangleQueue.pop();

   cout << "Po usunięciu jednego elementu, rozmiar kolejki: " << triangleQueue.size() << std::endl;

  cout << "-------------------------------------------------" << endl;
}
