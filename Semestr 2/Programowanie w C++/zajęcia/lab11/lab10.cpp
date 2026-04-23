#include <iostream>
#include <ctime>
#include <queue>
#include <stack>
using namespace std;
class cTrojkat{
private: float a,b,c;
    int obw;
    int pole;
    bool czymoznazbydowac;

    bool czyWarunekTrojkata() {
      if (a + b > c && a + c > b && b + c > a)
        return true;
      else
        return false;
    }
    void oblicz(){
        float p=(a+b+c)/2;
        obw=a+b+c;
        pole = sqrt(p * (p - a) * (p - b) * (p - c));
    }
public:cTrojkat(float a,float b,float c){
        this ->a=a;
                this ->b=b;
                this ->c=c;

        obw=0;
        pole=0;
        czymoznazbydowac=false;
        if (czyWarunekTrojkata()) {
          oblicz();
          czymoznazbydowac = true;
        }
    }
    void drukuj(){
if(czymoznazbydowac){
    cout<<"A="<<a<<"B="<<b<<"C="<<c<<endl;
    cout<<"Pole:"<<pole<<endl;
    cout<<"Obwod:"<<obw<<endl;

    }
else
{
    cout<<"Nie mozna zbudowac trojkata"<<endl;
}
    }

};
int main()
{
    cTrojkat trojkat1(3, 4, 5);
    trojkat1.drukuj();
    cTrojkat trojkat2(1, 2, 4);
    trojkat2.drukuj();
        cout<<endl;
    //zad2

    stack<cTrojkat>stos;
    stos.push(cTrojkat(3,4,5));
    stos.emplace(2,2,2);
    stos.push(cTrojkat(1,2,3));
    stos.push(cTrojkat(6,8,10));
  stos.top().drukuj();
cout<<stos.size()<<endl;
//zad3
    cout<<endl;
queue<cTrojkat>kolejka;
kolejka.push(cTrojkat(2,5,3));
kolejka.push(cTrojkat(1,3,8));
kolejka.push(cTrojkat(6,4,7));
kolejka.pop();

cout << kolejka.front() << "\n";
cout << kolejka.back() << "\n";
cout << "Rozmiar: " << kolejka.size() << "\n";
cout << "Pusta?: " << kolejka.empty() << "\n";
 kolejka.drukuj();


    return 0;
}
