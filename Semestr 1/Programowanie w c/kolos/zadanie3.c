#include <stdio.h>
#include <math.h>

void zad1();
void zad2();
void zad3();
void zad4();
void zad5();

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
    printf("Zadanie 1 - spotkane z rama\n");

    unsigned wysokosc, szerokosc;
    printf("Podaj wysokosc i szerokosc: \n");
    scanf("%u %u", &wysokosc, &szerokosc);

    for(unsigned i = 0; i < wysokosc; i++)
    {
        for(unsigned j = 0; j < szerokosc; j++)
        {
            if(i==0 || i==wysokosc/2 || i==wysokosc-1 || j==0 || j==wysokosc/2 || j==szerokosc-1)
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
    printf("Zadanie 2 - konwerter miedzywymiarowy \n");

    int liczba,liczba2;
    int licznik_potegi = 0;
    int test;

    printf("Podaj liczbe do skonwertowania: \n");
    scanf("%d %d", &liczba, &liczba2);

    int liczba_przypisana = 0;
    int nie_ruszaj = liczba;
    int nie_ruszaj2 = liczba2;

    printf("%d (5)\n", liczba);

    while(liczba != 0)
    {
        liczba_przypisana += (liczba % 10) * pow(5,licznik_potegi);
        liczba /= 10;
        licznik_potegi++;
    }

    for(int i = 0; i < licznik_potegi; i++)
    {
        test = pow(10,licznik_potegi-i-1);
        printf("%d * %.0lf\n",(nie_ruszaj / test) % 10, pow(5,licznik_potegi-i-1));
    }
    printf("Razem: %d (10)\n",liczba_przypisana);

    licznik_potegi = 0;
    liczba_przypisana = 0;
    printf("%d (3)\n", liczba2);

    while(liczba2 != 0)
    {
        liczba_przypisana += (liczba2 % 10) * pow(3,licznik_potegi);
        liczba2 /= 10;
        licznik_potegi++;
    }

    for(int i = 0; i < licznik_potegi; i++)
    {
        test = pow(10,licznik_potegi-i-1);
        printf("%d * %.0lf\n",(nie_ruszaj2 / test) % 10, pow(3,licznik_potegi-i-1));
    }
    printf("Razem: %d (10)\n",liczba_przypisana);



    printf("\n\n");
}

void zad3()
{
    printf("Zadanie 3 - w te i nazad\n");

    int liczba = 0, suma = 0, rozw = 0;

    printf("Podaj jedna liczbe calkowita dodatnia: \n");
    scanf("%d", &liczba);

    do
    {
        suma = 0;
        rozw = liczba;
        while(rozw > 0)
        {
            suma += rozw % 10;
            rozw /= 10;
        }
        printf("%d -> suma cyfr: %d\n", liczba, suma);
        liczba = suma;

    }while(suma > 10);

    printf("\n\n");
}

void zad4()
{
    printf("Zadanie 4 - Przekladnia planetarna i dyferencjal\n");

    int tab[15];
    int liczbaP[15];
    int liczbaNP[15];

    printf("Podaj kolejno 15 wartosci do tablicy\n");
    for(int i = 0; i < 15; i++)
    {
        scanf("%d", &tab[i]);
    }
    int parzysta=0, nieparzysta=0;
    int iloczyn=1;
    int srednia=0;

    for(int i = 0; i < 15; i++)
    {
        if(tab[i] % 2 != 1)
        {
            liczbaP[parzysta] = tab[i];
            parzysta++;
        }
        else
        {
            liczbaNP[nieparzysta] = tab[i];
            nieparzysta++;
        }
    }

    for(int i = 0; i < parzysta; i++)
    {
        printf("%d ", liczbaP[i]);
    }
    printf("\n");

    for(int i = 0; i < nieparzysta; i++)
    {
        printf("%d ", liczbaNP[i]);
    }
    printf("\n");

    for(int i = 0; i < parzysta; i++)
    {
        iloczyn *= liczbaP[i];
    }
    for(int i = 0; i < nieparzysta; i++)
    {
        srednia += liczbaNP[i];
    }

    printf("Liczb: %d \t Iloczyn: %d\n", parzysta, iloczyn);
    printf("Liczb: %d \t Srednia: %.2f\n",nieparzysta, srednia / (float)nieparzysta);


    printf("\n\n");
}

void zad5()
{
    printf("Zadanie 5 - Edia Xepmert \n");

    int cena[5];
    double cena_po_rabacie[5];
    double rabacik[5] = {1, 0.5, 0.33, 0.25, 0.20};
    double cena_koncowa;
    int wysokosc_rabatu = 0;

    printf("Podaj kolejno 5 cen produku: \n");
    scanf("%d %d %d %d %d", &cena[0],&cena[1],&cena[2],&cena[3],&cena[4]);

    printf("\n");
    for(int i = 0; i < 5; i++)
    {
        printf("%d ", cena[i]);
    }
    printf("\n");

    for(int i = 0; i < 5; i++)
    {
        wysokosc_rabatu = 0;
        for(int j = 0; j < i; j++)
        {
            if(cena[i] == cena[j])
            {
                wysokosc_rabatu++;
            }
        }
        cena_po_rabacie[i] = cena[i] * rabacik[wysokosc_rabatu];
    }
    printf("\n");
    for(int i = 0; i < 5; i++)
    {
        printf("%d -> %.2lf \n", cena[i], cena_po_rabacie[i]);
    }

    int suma = cena[0]+cena[1]+cena[2]+cena[3]+cena[4];
    float suma_PR = cena_po_rabacie[0]+cena_po_rabacie[1]+cena_po_rabacie[2]+cena_po_rabacie[3]+cena_po_rabacie[4];
    printf("Cena pelna: %d \t",suma);
    printf("Cena po rabacie: %.2f\n",suma_PR);

    printf("\n\n");
}