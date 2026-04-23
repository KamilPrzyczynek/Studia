#include <stdio.h>

int g_a,g_b,g_suma,g_roznica,g_iloczyn;
float g_iloraz,g_srednia;


void zadanie1()
{
    puts("Nie bede przeszkadzal \n");

}
void wczytaj()
{
    puts("Podaj a i b: ");
    scanf("%d %d",&g_a,&g_b);
}
void operacje_proste()
{
    g_suma=g_a+g_b;
    g_roznica=g_a-g_b;
    g_iloczyn=g_a*g_b;
}
void operacje_zaawansowane()
{
    g_iloraz=g_a/g_b;
    g_srednia=g_a+g_b/2;
}
void wyniki()
{
    printf("Suma dwoch liczb to: %d \n",g_suma);
    printf("Roznica dwoch liczb to: %d \n",g_roznica);
    printf("Iloczyn dwoch liczb to: %d \n",g_iloczyn);
    printf("Iloraz dwoch liczb to: %f \n",g_iloraz);
    printf("Srednia dwoch liczb to: %f \n",g_srednia);
}
int main()
{

    for (int i=0;i<100;i++)
    {
      zadanie1();
    }

    wczytaj();
    operacje_proste();
    operacje_zaawansowane();


    wyniki();
    return 0;
}
