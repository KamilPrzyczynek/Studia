#include <stdio.h>
#include <math.h>


void wczytaj(char *a, int *b, float *c, double *d)
{
    printf("Podaj wartosc dla char: \n");
    scanf("%c", a);

    printf("Podaj wartosc dla int: \n");
    scanf("%d", b);

    printf("Podaj wartosc dla float: \n");
    scanf("%f", c);

    printf("Podaj wartosc dla double: \n");
    scanf("%lf", d);
}
void modyfikuje(char *a, int *b, float *c, double *d)
{
    *a = *a + 1;
    *b = abs(*b);
    *c = sqrt(*c);
    *d = pow(*d, 3);
}
void drukuje(const char *a, const int *b, const float *c, const double *d)
{
    printf("Char  %c , Int %d , float %f , double %lf \n", *a,*b,*c,*d);
}

void zad1()
{

    printf("Zadanie 1\n");

    char a;
    int b;
    float c;
    double d;

    wczytaj(&a, &b, &c, &d);
    modyfikuje(&a, &b, &c, &d);
    drukuje(&a, &b, &c, &d);

}

void modyfikacja2(int *a, int *b, int *c)
{
    *a = 50;
    *b = 100;
    *c = 200;
}

void zad2()
{
    printf("Zadanie 2\n");

    int tab[5][5] = {0};

    modyfikacja2(&tab[1][1], &tab[2][2], &tab[3][3]);

    for(int i=0;i<5;i++)
    {
        for(int j=0;j<5;j++)
        {
            printf("%5d", tab[i][j]);
        }
        printf("\n");
    }

}

void funkcja_drukujaca(int *tab, int tab_size)
{
    for(int i=0;i<tab_size;i++)
    {
        printf("%3d", tab[i]);
    }
    printf("\n");
}

void zad3()
{
    printf("Zadanie 3\n");
    int tab1[10];
    for(int i=0;i<10;i++)
    {
        tab1[i] = 30 - i * 3;
    }

    int tab2[12];
    for(int i=0;i<12;i++)
    {
        if(i % 2 == 0)
        {
            tab2[i] = i/2 + 1;
        }
        else
        {
            tab2[i] = -1*(i/2 + 1);
        }
    }

    int tab3[14];
    for(int i=0;i<14;i++)
    {
        if(i >= 4 && i <= 9)
        {
            tab3[i] = (i-4) * 5 + 10;
        }
        else
        {
            tab3[i] = 0;
        }
    }
    funkcja_drukujaca(tab1, 10);
    printf("\n");
    funkcja_drukujaca(tab2,12);
    printf("\n");
    funkcja_drukujaca(tab3,14);
    printf("\n");

}


void ustawienie2( int *tab, int *pierwszy, int *ostatni)
{
    int wartosc = 40;
    for(int *p = pierwszy; p <= ostatni; p++)
    {
        *p = wartosc--;
    }
}

void drukuje4(const int tab[5][8])
{
    for(int i=0;i<5;i++)
    {
        for(int j=0;j<8; j++)
        {
            printf("%5d", tab[i][j]);
        }
        printf("\n");
    }
}

void zad4()
{
    printf("Zadanie 4\n");

    int tab[5][8];

    ustawienie2(*tab, &tab[0][0], &tab[4][7]);
    drukuje4(tab);


}
int main()
{

zad1();
zad2();
zad3();
zad4();


    return 0;
}
