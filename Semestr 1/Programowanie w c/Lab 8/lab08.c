#include <stdio.h>

void zad1()
{


    char a;
    char *ptr_a = &a;
    printf("Podaj a: ");
    scanf( "%c", ptr_a );


    short b;
    short *ptr_b = &b;
    printf("Podaj b: ");
     scanf( "%hi", ptr_b );


    int c;
    int *ptr_c = &c;
     printf("Podaj c: ");
     scanf( "%d", ptr_c );


    long long d;
    long long *ptr_d = &d;
    printf("Podaj d: ");
     scanf( "%lld", ptr_d );


    float e;
    float *ptr_e = &e;
     printf("Podaj e: ");
     scanf( "%f", ptr_e );


    double f;
    double *ptr_f = &f;
     printf("Podaj f: ");
     scanf( "%f", ptr_f );


    printf( "Wartosc zmiennej: %c \n", ptr_a );
    printf( "Wartosc zmiennej: %hi \n", ptr_b );
    printf( "Wartosc zmiennej: %d \n", ptr_c );
    printf( "Wartosc zmiennej: %lld \n", ptr_d );
    printf( "Wartosc zmiennej: %f \n", ptr_e );
    printf( "Wartosc zmiennej: %f \n", ptr_f );


}
void zad2()
{
    char c;
    short sh;
    int i;
    long long ii;
    float f;
    double db;
    char *ptr_c = &c;
    short *ptr_sh = &sh;
    int *ptr_i = &i;
    long long *ptr_ii = &ii;
    float *ptr_f = &f;
    double *ptr_db = &db;
    puts( "Adres | Rozmiar zmiennej | rozmiar wskaznika");
    printf( "%d %d %d \n", ptr_c, sizeof( c ), sizeof( ptr_c ) );
    printf( "%d %d %d \n", ptr_sh, sizeof( sh ), sizeof( ptr_sh ) );
    printf( "%d %d %d \n", ptr_i, sizeof( i ), sizeof( ptr_i ) );
    printf( "%d %d %d \n", ptr_ii, sizeof( ii ), sizeof( ptr_ii ) );
    printf( "%d %d %d \n", ptr_f, sizeof( f ), sizeof( ptr_f ) );
    printf( "%d %d %d \n", ptr_db, sizeof( db ), sizeof( ptr_db ) );

}



int main()
{
    zad1;
    zad2;
    return 0;
}
