#include <stdio.h>
#include <stdlib.h>
#include <time.h>
void zad1(){
    int liczba1, liczba2;
    printf("Wpisz liczbe: ");
    scanf("%d", &liczba1);
    printf("Liczba przecuniecia: ");
    scanf("%d", &liczba2);

    if (liczba2 > 0) {
        liczba1 = liczba1 << liczba2;
        printf("przesuniecie bitowe w lewo: %d\n", liczba1);
    } else if (liczba2 <= 0) {
        liczba1 = liczba1 >> abs(liczba2);
        printf("przesuniecie bitowe w prawo: %d\n", liczba1);
    } else {
        printf("Brak\n");
    }
}
void zad2()
{
    int zad2liczba1, zad2liczba2;
    printf("Wpisz liczbe: ");
    scanf("%d", &zad2liczba1);
    printf("przecunecie maski: ");
    scanf("%d", &zad2liczba2);

    int maska = (1 << zad2liczba2) - 1;
    int wynik = zad2liczba1 & maska;
    printf("Wynik to: %d\n", wynik);
}
void zad3(){
    srand(time(0));
    int randomowaliczba = (rand() % (30000 - 1000 + 1)) + 1000;
    int bityprzesu = 0;
    int zgadywanie;

    while (randomowaliczba > 0) {
        printf("Wylosowano %d: ", randomowaliczba);
        scanf("%d", &zgadywanie);

        if ((randomowaliczba >> zgadywanie) & 1) {
            randomowaliczba -= 1 << zgadywanie;
        } else {
            bityprzesu++;
        }
    }

    printf("Zgadywany bit: %d\n", bityprzesu);
}
void zad4(){
    int Liczba4;
    printf("Podaj numer: ");
    scanf("%d", &Liczba4);

    if ((Liczba4 % 3 == 0) ^ (Liczba4 % 5 == 0)) {
        printf("Podzielna liczba przez 3 i 5\n");
    } else {
        printf("Podzielna przez oba lub zadne\n");
    }
}
void zad5()
{
    int a = 5, b = 3;

    int and_wynik = !(!a | !b);
    printf("%d\n", and_wynik);

    int or_wynik = !(!a & !b);
    printf("%d\n", or_wynik) ;

    int xor_wynik  = (a & !b) | (!a & b);
    printf("%d\n", xor_wynik );
}
int main() {

    zad1();
    zad2();
    zad3();
    zad4();
    zad5();
    return 0;
}
