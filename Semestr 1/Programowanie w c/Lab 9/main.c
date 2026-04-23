#include <stdio.h>



void wczytajz2(int *a,int *b)
{
    puts("Podaj 2 liczby calkowite po spacji");
    scanf("%d %d",a,b);
}
void operacje_proste(int a,int b,int *suma,int *roznica,int *iloczyn)
{
    *suma=a+b;
    *roznica=a-b;
    *iloczyn=a*b;
}
void operacje_zaawansowane(int a,int b,float *iloraz,float *srednia)
{
    *iloraz=a/(float)b;
    *srednia=(a+b)/(float)2;
}
void wyniki(const int a,const int b,const int suma,const int roznica,const int iloczyn,const float iloraz,const float srednia)
{
    printf("Operacje na liczbach: %d oraz %d:\n"
           "dodawanie:%d\n"
           "odejmowanie:%d\n"
           "mnozenie: %d\n"
           "dzielenie: %f\n"
           "srednia: %f\n",
           a,b,suma,roznica,iloczyn,iloraz,srednia);
}
void zadanie2()
{
    puts("\nZadanie2");
    int a,b,suma,roznica,iloczyn;
    float iloraz,srednia;
    wczytajz2(&a,&b);
    operacje_proste(a,b,&suma,&roznica,&iloczyn);
    operacje_zaawansowane(a,b,&iloraz,&srednia);
    wyniki(a,b,suma,roznica,iloczyn,iloraz,srednia);
}

void wczytajz1(int *a,int *b,int *c){
    puts("Podaj 3 liczby calkowite po spacji");
    scanf("%d %d %d",a,b,c);
}
void sortuj(int *a,int *b,int *c){
    int tab[3]={*a,*b,*c};
    int d;
    for(int i=0;i<3;i++){
        for(int j=1;j<3-i;j++){
            if(tab[j-1]>tab[j]){
                d=tab[j-1];
                tab[j-1]=tab[j];
                tab[j]=d;
            }
        }
    }
    *a=tab[0];
    *b=tab[1];
    *c=tab[2];
}
void drukuj(const int *a,const int *b,const int *c){
    printf("Podane posortowane liczby to : %d,%d,%d\n",*a,*b,*c);
}
void zadanie1(){
    puts("Zadanie1");
    int a,b,c;
    wczytajz1(&a,&b,&c);
    sortuj(&a,&b,&c);
    drukuj(&a,&b,&c);
}
int main()
{
    zadanie1();

    zadanie2();
    return 0;
}
