#include <stdio.h>

void zadanie1()
{
    int a,b;
    char text[20];
    float zmiena;
    char znak;

    printf("Podaj jakieś zdanie złozone: \n");
    gets(text);
    printf("2 liczby calkowite: \n");
    scanf("%d %d",&a,&b);
    printf("liczba zmienoprzecinkowa: \n");
    scanf("%f",&zmiena);
    printf("pojedynczy znak: \n");
    scanf(" %c",&znak);

FILE *f=NULL;
f=fopen("wynik.txt","w");
if(f==NULL){
    printf("wystapil blad\n",znak,zmiena);
}
fprintf(f,"%c %f %d %d %s",znak,zmiena,a,b,text);
fclose(f);
}
void zadanie2()
{
    FILE *f=NULL;
    f=fopen("odczyt.txt","r");
    if(f==NULL){
        printf("wystapil blad\n");
    }
    int tab[10];
    fread( tab, sizeof(int), 10, f );
    fprintf(f,")



fclose(f);
}

int main()
{

//zadanie1();
zadanie2();


    return 0;
}
