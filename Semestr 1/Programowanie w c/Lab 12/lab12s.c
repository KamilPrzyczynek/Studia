#include <stdio.h>
#include <math.h>
struct test {
    int a;
    int b;
    int c;
    int suma;
}
zad1()
{
struct test obj;
printf("Wartosc a: ");
scanf("%d", &obj.a);
printf("Wartosc b: ");
scanf("%d", &obj.b);
printf("Wartosc c: ");
scanf("%d", &obj.c);

obj.suma = obj.a + obj.b + obj.c;
printf("Suma a,b,c:%d \n", obj.suma);
}
typedef struct {
    int kroki;
    int metry;
} dystans;

typedef struct {
    int wiek;
    char imie[20];
} dane;

typedef struct {
    int x;
    int y;
} wspolrzedne;

typedef int temperatura[365];

typedef dystans dystanss[12];

zad2(){
    dystans d1 = {5, 6};
    printf("dystans i kroki: %d, metry: %d\n", d1.kroki, d1.metry);

    dane p1 = {20, "Maciek DUda"};
    printf("Imie: %s, Wiek: %d\n", p1.imie, p1.wiek);

    wspolrzedne c1 = {10, 20};
    printf("wspolrzedne: (%d, %d)\n", c1.x, c1.y);

    temperatura t1 = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};
    printf("Temperatura dnia w roku: %d\n", t1[364]);

    dystanss d2 = {{3, 4}, {5, 6}, {7, 8}, {9, 10}, {11, 12}, {13, 14}, {15, 16}, {17, 18}, {19, 20}, {21, 22}, {23, 24}, {25, 26}};
    printf("dystans w 12 miesiacach: %d krokow, %d metry\n", d2[11].kroki, d2[11].metry);
}
struct struct1 {
    int a;
    short b;
    char c;
    long long d;
    float e;
    double f;
};

struct struct2 {
    short b;
    double f;
    char c;
    float e;
    int a;
    long long d;
};

struct struct3 {
    long long d;
    float e;
    int a;
    short b;
    double f;
    char c;
};
zad3(){

    struct struct1 s1;
    struct struct2 s2;
    struct struct3 s3;

    printf("Wielkosc 1: %lu\n", sizeof(s1));
    printf("Wielkosc 2: %lu\n", sizeof(s2));
    printf("Wielkosc 3: %lu\n", sizeof(s3));

}
typedef struct {
    unsigned int a;
    unsigned int b;
    float przekatna;
    unsigned int pole;
    unsigned int obwod;
} sProstokat;

void wczytaj_1(sProstokat *p) {
    printf("a: ");
    scanf("%d", &p->a);
    printf("b: ");
    scanf("%d", &p->b);
}

void wczytaj_2(sProstokat *p) {
    printf("a: ");
    scanf("%d", &(*p).a);
    printf("b: ");
    scanf("%d", &(*p).b);
}

void oblicz(sProstokat *p) {
    p->pole = p->a * p->b;
    p->obwod = 2 * (p->a + p->b);
    p->przekatna = sqrt(pow(p->a, 2) + pow(p->b, 2));
}

void drukuj(sProstokat p) {
    printf("Wynik przekotnej:\n");
    printf("a: %d\n", p.a);
    printf("b: %d\n", p.b);
    printf("pole: %d\n", p.pole);
    printf("obwod: %d\n", p.obwod);
    printf("przekatna: %f\n", p.przekatna);
}
int main()
{

zad1();
zad2();
zad3();
sProstokat prostokat1, prostokat2;
wczytaj_1(&prostokat1);
oblicz(&prostokat1);
drukuj(prostokat1);
wczytaj_2(&prostokat2);
oblicz(&prostokat2);
drukuj(prostokat2);
    return 0;
}
