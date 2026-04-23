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
    printf("Zadanie 1 - Spotkanie z rama \n");

    unsigned wysokosc, szerokosc;
    printf("Podaj wysokosc i szerokosc: \n");
    scanf("%u %u", &wysokosc, &szerokosc);

    for(unsigned i = 0; i < wysokosc; i++)
    {
        for(unsigned j = 0; j < szerokosc; j++)
        {
            if(i==0 || i==wysokosc/2 || i==wysokosc-1 || j==0 || j==szerokosc/2 || j==szerokosc-1 || i==(wysokosc-1)/2 || j==(szerokosc-1)/2)
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
    printf("Zadanie 2 - Konwerter miedzywymiarowy \n");
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
    printf("Zadanie 3 - w te i nazad  \n");

    int liczba = 0, liczba1 = 0;
    int suma = 0, suma1 = 0;
    int rozw = 0, rozw1 = 0;
    int ilosc_cyfr[10] = {0};
    int ilosc_cyfr1[10] = {0};
    int powtorka1 = 0, powtorka2 = 0;


    printf("Podaj jedna liczbe calkowita dodatnia: \n");
    scanf("%d", &liczba);

    printf("Podaj druga liczbe calkowita dodatnia: \n");
    scanf("%d", &liczba1);

        suma = 0;
        rozw = liczba;
        while(rozw > 0)
        {
            suma += rozw % 10;
            ilosc_cyfr[rozw % 10]++;
            rozw /= 10;
        }
        int nie_ruszaj1 = suma;
        for(int i = 0; i < 10; i++)
        {
            if(ilosc_cyfr[i] > 1)
            {
                powtorka1 += ilosc_cyfr[i];
            }
        }

        printf("%d -> suma cyfr: %d\n", liczba, nie_ruszaj1);
        printf("%d -> powtorzenia cyfr: %d \n",liczba, powtorka1);
        liczba = suma;



        int nie_ruszaj;
        suma1 = 0;
        rozw1 = liczba1;
        while(rozw1 > 0)
        {
            suma1 += rozw1 % 10;
            ilosc_cyfr1[rozw1 % 10]++;
            rozw1 /= 10;
        }
        int nie_ruszaj2 = suma1;
        for(int i = 0; i < 10; i++)
        {
            if(ilosc_cyfr1[i] > 1)
            {
                powtorka2 += ilosc_cyfr1[i];
            }
        }

        printf("%d -> suma cyfr: %d\n", liczba1, nie_ruszaj2);
        printf("%d -> powtorzenia cyfr: %d \n",liczba2, powtorka2);
        liczba1 = suma1;



    printf("\n\n");
}

void zad4()
{
    printf("Zadanie 4 - Przekladnia planetarna i dyferencjal \n");
    int tab[15];
    int liczba1[15] = {0};
    int liczba2[15] = {0};
    int liczba3[15] = {0};
    int liczba4[15] = {0};


    printf("Podaj kolejno 15 wartosci do tablicy\n");
    for(int i = 0; i < 15; i++)
    {
        scanf("%d", &tab[i]);
    }

    int p1 = 0, p2 = 0, p3 = 0, p4 = 0;
    int suma1 = 0;
    int iloczyn = 1;
    float srednia = 0;
    float adam_malysz = 0;
    int ile_zer = 0;
    int ll1 = 0, ll2 = 0, ll3 = 0, ll4 = 0;
    int jo_pier_dola = 0;


    for(int i = 0; i < 15; i++)
    {
        if(tab[i] % 4 == 0 && tab[i] % 6 != 0 )
        {
            liczba1[p1] = tab[i];
            p1++;
        }
        else if (tab[i] % 4 != 0 && tab[i] % 6 == 0 )
        {
            liczba2[p2] = tab[i];
            p2++;
        }
        else if (tab[i] % 4 != 0 && tab[i] % 6 != 0 )
        {
            liczba3[p3] = tab[i];
            p3++;
        }
        else if( (tab[i] % 4 == 0 && tab[i] % 6 == 0 ))
        {
            liczba4[p4] = tab[i];
            p4++;
        }
    }

    for(int i = 0; i < 15; i++)
    {
        printf("%d ", tab[i]);
    }

    printf("\n");
    for(int i = 0; i < p1; i++)
    {
        suma1 += liczba1[i];
        printf("%d ", liczba1[i]);
        ll1++;
    }


    printf("\n");
    for(int i = 0; i < p2; i++)
    {
        iloczyn *= liczba2[i];
        printf("%d ", liczba2[i]);
        ll2++;
    }

    printf("\n");
    for(int i = 0; i < p3; i++)
    {
        jo_pier_dola += liczba3[i];
        adam_malysz++;
        printf("%d ", liczba3[i]);
        ll3++;
    }

    printf("\n");
    for(int i = 0; i < p4; i++)
    {
        if(liczba4[i] == 0)
        {
            ile_zer++;
        }
        printf("%d ", liczba4[i]);
        ll4++;
    }
    printf("\n");

    srednia = jo_pier_dola / adam_malysz;


    printf("Liczb: %d \t suma: %d\n",ll1, suma1);
    printf("Liczb: %d \t iloczyn: %d\n",ll2, iloczyn);
    printf("Liczb: %d \t srednia: %.3f\n",ll3, srednia);
    printf("Liczb: %d \t ilosc zer: %d\n",ll4, ile_zer);
    printf("\n");




    printf("\n\n");
}

void zad5()
{
    printf("Zadanie 5 - Promocja w Edia Xepmert \n");

    int cena[5];
    double cena_po_rabacie[5];
    double rabacik[4] = {1, 0.5, 0.30, 0.20};
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
        if(wysokosc_rabatu == 4)
        {
            cena_po_rabacie[i] = 1;
        }
        else
        {
            cena_po_rabacie[i] = cena[i] * rabacik[wysokosc_rabatu];
        }

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

