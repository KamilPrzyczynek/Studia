#include <stdio.h>

int main()
{
    /*
    //zad1
    int a;
    printf("Podaj liczbe gwiazdek: ");
    scanf("%d",&a);
    for( int i = 0; i < a; i++ )
    {
    for( int i = 0; i < a; i++ )
    {
     printf( "*");
    }
    printf( "\n");
    }

//zad2
    int b;
    printf("Podaj liczbe gwiazdek z ktorych zbudujemy trojkat: ");
    scanf("%d",&b);
    for( int u = 0; u <= b; u++ )
    {
    for( int x = 0; x < u; x++ )
    {
     putchar( "*");
    }
    printf( "\n");
    }

//zad3

int c;
printf("Podaj liczbe gwizdek z ktorych musi byc zbudowana choinka: ");
scanf("%d",&c);
for( int z = 0; z <= c; z++)
{
    for( int zz = c - z; zz>0; zz-- )
    {
        printf(" ");
    }
    for( int zz = 1; zz < z*2; zz++ )
    {
     printf( "*");
    }

    printf( "\n");

}
//zad4
*/
int zmiena1,d;

printf("Podaj liczbe gwiazdek z ktorych zbudujemy trojkat: ");
scanf("%d",&d);
printf("Kierunkek od 1 do 4: ");
scanf("%d",&zmiena1);
for( int z = 0; z <= c; z++)
{
    for( int zz = c - z; zz>0; zz++ )
    {
        printf(" ");
    }
    for( int zz = 1; zz < z*2; zz++ )
    {
     printf( "*");
    }

    printf( "\n");

}

    return 0;
}
