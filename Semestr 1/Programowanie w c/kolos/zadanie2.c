#include <stdio.h>
#include <math.h>

void zad1();
void zad2();
void zad3();
void zad4();
void zad6();

int main()
{
    zad1();
    zad2();
    zad3();
    zad4();
    zad5();
    return 0;
}
void zad1()
{
    printf("Zadanie 1 - Spotkanie z Rama \n");

    int wysokosc, szerokosc;
    printf("Podaj wysokosc prostokata: \n");
    scanf("%d", &wysokosc);

    printf("Podaj szerokosc prostokata: \n");
    scanf("%d", &szerokosc);

    for(int i = 0; i < wysokosc; i++)
    {
        for(int j = 0; j < szerokosc; j++)
        {
            if(i==0 || i==wysokosc-1 || j==0 || j==szerokosc-1)
            {
                putchar('*');
            }
            else
            {
                putchar(' ');
            }
        }
        printf("\n");
    }
    printf("\n\n");
}

void zad2()
{
    printf("Zadanie 2 - Konwerter miedzywymiarowy\n");

    int liczba;
    printf("Podaj liczbe by ja skonwertowac: \n");
    scanf("%d", &liczba);

    int liczba1 = liczba;
    int podstawa[100];

    int liczenie = 0;

    while(liczba != 0)
    {
        printf("%3d | %d\n", liczba, liczba % 5);
        podstawa[liczenie++] = liczba % 5;
        liczba /= 5;
    }
    printf("  0\n"); // tutaj dwie spacje
    printf("%d -> ", liczba1);

    for(int i = liczenie; i > 0; i--)
    {
        printf("%d", podstawa[i-1]);
    }
    printf("\n");


    printf("\n\n");
}

void zad3()
{
    int dodatnia;
    printf("Podaj liczbe calkowita dodatnia: \n");
    scanf("%d", &dodatnia);

    int dodatnia1 = dodatnia;
    int dzielnik = 1000000000; //9 zer
    int baza[10];

    for(int i = 0; i < 10; i++)
    {
        baza[i] = dodatnia / dzielnik;
        dodatnia -= (dodatnia / dzielnik) * dzielnik;
        dzielnik /= 10;
    }
    int powtorka = 0;
    dzielnik = 1;

    for(int i = 0; i < 10; i++)
    {
        if(baza[i] == 0)
        {
            continue;
        }
        powtorka += baza[i] * dzielnik;
        dzielnik *= 10;
    }

    printf("%d -> %d\n", dodatnia1, powtorka);
    printf("%d - %d = %d\n", dodatnia1, powtorka, dodatnia1 - powtorka);
    printf("Modul -> %d \n", -1*(dodatnia1 - powtorka));
}

void zad4()
{
    printf("Zadanie 4 - Przekladnia planetarna i dyferencjal\n");

    int tab[15];

    for(int i = 0; i < 15; i++)
    {
       printf("Podaj kolejno 15 liczb do tablicy %d: ",i + 1);
       scanf("%d", &tab[i]);
    }
    for(int i = 0; i < 15; i++)
    {
        printf("%3d", tab[i]);
    }
    printf("\n");

    int suma_liczb = 0;
    int roznica_liczb = 0;

    for(int i = 0; i < 15; i++)
    {
        if(tab[i] % 5 == 0)
        {
            suma_liczb += tab[i];
        }
        if(tab[i] % 2 != 0)
        {
            roznica_liczb += tab[i];
        }
    }
    int roznica = suma_liczb - roznica_liczb;

    printf("Po sumowaniu: %d\n", roznica_liczb);
    printf("Po odejmowaniu: %d\n", roznica);


    printf("\n\n");
}

void zad5()
{
    printf("Zadanie 5 - Promocja w Edia Xepmert\n");

    int cena[4];
    printf("Podaj ceny 4 produktow: \n");
    scanf("%d %d %d %d", &cena[0], &cena[1], &cena[2], &cena[3]);

    for(int i = 0; i < 4; i++)
    {
        for(int j = 0; j < 4 - i - 1; j++)
        {
            if(cena[j] < cena[j+1])
            {
                int temp = cena[j];
                cena[j] = cena[j+1];
                cena[j+1] = temp;
            }
        }
    }
    printf("\n");
    double cena_rabat = 0;
    int ceny = 0;

    double rabacik[4] = {1, 0.66, 0.4, 0.15};
    for(int i = 0; i < 4; i++)
    {
        printf("%d -> %.2lf\n", cena[i], cena[i] * rabacik[i]);
        ceny += cena[i];
        cena_rabat += cena[i] * rabacik[i];
    }

    printf("Cena pelna: %d\n", ceny);
    printf("Cena po rabacie: %.2lf\n", cena_rabat);


    printf("\n\n");
}
