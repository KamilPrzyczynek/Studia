#define _CTR_SCERURE_NO_WARNINGS
#include <stdio.h>
#include<math.h>
#include <stdlib.h>
#include <time.h>

void zadanie1()
{
    printf("Zadanie 1 \n");
    int tab[ 8 ][ 12 ];
    for( unsigned y = 0; y < 8; y++ )
    {
     for( unsigned x = 0; x < 12; x++ )
     {
     tab[ y ][ x ] = y + x;
     printf("%3d",tab[y][x]);
     }
     printf("\n");
    }
    printf("\n");

}
void zadanie2()
{
#define m 2
#define n 3
    printf("Zadanie 2 \n");
    int tab[m][n];
    int wyzna,wyznax,wyznay;
    float x,y;

    for(unsigned i=0;i<m;i++)
    {
        for(int j=0;j<n;j++)
        {
            tab[i][j] = rand() % 199 - 99;
        }
    }
     for(unsigned x=0;x<m;x++)
    {
        for (unsigned y=0;y<n;y++)
        {
            printf("%5d",tab[x][y]);
        }
        printf("\n");
        
    }   
    wyzna=((tab[0][0]*tab[1][1])-(tab[1][0]*tab[0][1]));
    wyznax=((tab[0][2]*tab[1][1])-(tab[1][2]*tab[0][1]));
    wyznay=((tab[0][0]*tab[1][2])-(tab[1][0]*tab[0][2]));
    if(wyzna==0)
    {
        if(wyznax==0 && wyznay==0)
        {
            printf("Nie istnieje");
        }
        else
        {
            printf("Brak rozwiazan");
        }
    }
    else
    {
        x=wyznax/(float)wyzna;
        y=wyznay/wyzna;
        printf("Układ jest spełniony dla:  x=%.2f, y= %.2f\n",x,y);



    }

printf("\n");

#undef m
#undef n
}
void zadanie3()
{

printf("Zadanie 3 \n");
    int tab[3][3];
    int w;
    for( unsigned y = 0; y < 3; y++ )
    {
     for( unsigned x = 0; x < 3; x++ )
     {
     printf("%4d",tab[y][x]);
     }
     printf("\n");
    }
        w=(tab[0][0]*tab[1][1]*tab[2][2]+
            tab[0][1]*tab[1][2]*tab[2][1]+
            tab[0][2]*tab[1][0]*tab[2][1])-
           (tab[2][0]*tab[1][1]*tab[0][2]+
            tab[2][1]*tab[1][2]*tab[0][0]+
            tab[2][2]*tab[1][0]*tab[0][1]);
            printf("\n%d\n",w);
}
void zadanie4()
{
    int taba[3][4],tabb[3][4],tabc[3][4];
}
void zadanie5()
{
#define m 2
#define n 3
int tab[m][n]={{1,0,2},{-1,3,1}};
int taba[n][m]={{3,1},{2,1},{1,0}};
int tabwynik[m][m];
printf("tablica 1\n");
    for(unsigned x=0;x<m;x++)
    {
        for (unsigned y=0;y<n;y++)
        {

        }
        printf("");
    }
        

}
void zadanie6()
{
    #define m 5
    #define n 8
    int losowanie,tabaa[m][n],tabb[m][n] = { 0 },tabc[m][n]={1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40},tabd[m][n];
    
printf("tablica 1\n");
    for(unsigned x=0;x<m;x++)
    {
        for (unsigned y=0;y<n;y++)
        {
            printf("%5d",tabaa[x][y]);
        }
        printf("\n");
        
    }
printf("tablica 2\n");
    for(unsigned x=0;x<m;x++)
    {
        for (unsigned y=0;y<n;y++)
        {
            printf("%5d",tabb[x][y]);
        }
        printf("\n");
        
    }
    printf("tablica 3\n");
    for(unsigned x=0;x<m;x++)
    {
        for (unsigned y=0;y<n;y++)
        {
            printf("%5d",tabc[x][y]);
        }
        printf("\n");
        
    }
    printf("tablica 4\n");
    for(int i = 0; i < m; i++)
    {
        for(int j = 0;j<n;j++)
        {
           tabd[i][j] = rand() % 199 - 99;
        }
    }
    for(unsigned x=0;x<m;x++)
    {
        for (unsigned y=0;y<n;y++)
        {
            printf("%5d",tabd[x][y]);
        }
        printf("\n");
        
    }
#undef m
#undef n

}

int main()

{
    zadanie1();
    zadanie2();
    zadanie3();
    zadanie4();
    zadanie5();
    zadanie6();


         return 0;
}
