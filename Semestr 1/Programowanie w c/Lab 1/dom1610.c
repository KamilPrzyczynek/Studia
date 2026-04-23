#include <stdio.h>
#define _CRT_SCECURE_NO_WARINGS
#include <math.h>

int main()
{
/*
//zad 1 
    int a;
    puts("Podaj liczbe: ");
    scanf("%d",&a);
if(a %3 ==0 && a %5==0)
{
    puts("Jest podzielna przez 3 i 5");
}
else if(a %3==0)
{
    puts("Jest podzielna przez Tylko 3");
}
else if(a %5==0)
{
    puts("Jest podzielna przez Tylko 5");
}
else
{
    puts("Liczba nie jest podziel3
    na przez 3 i 5");
}

}
*/
//zad 2
/*
int a,b,c;
puts("Podaj 3 liczby");
scanf("%d %d %d",&a,&b,&c);

if( (a<b) && (b<c) )
{
    printf("%d %d %d",a,b,c);
}
else if(b<a && a<c)
{
    printf("%d %d %d",b,a,c);
}
else if(a<c && c<b)
{
    printf("%d %d %d",a,c,b);
}
else if(c<a && a<b)
{
    printf("%d %d %d",c,a,b);
}

else if(c<b && b<a)
{
    printf("%d %d %d",c,b,a);
}
else if(b<c && c<a)
{
    printf("%d %d %d",b,c,a);
}

    return 0;
}
*/

//zad 3 
/*
int a,b;
double jd;
char c[]="Wynik z dzielenia to :";
puts("Podaj 2 liczby: ");
scanf("%d %d",&a,&b);
if(a==0 || b==0)
{
    puts("Nie mozna dzielic przez 0 podaj ponownie liczby");
    scanf("%d %d",&a,&b);  
}
if(a>b)
{
    jd=a/b;
}
else 
{
    jd=b/a;
}
printf("%s  %f",c, jd);
 return 0;
}
*/
/*
int a;
puts("Cyf: ");
scanf("%d",&a);
if (a==0 || a==10 || a==(-10))
{
    printf("czarny");
}
else if (a>=1 && a<=9)a
{
    printf("niebieski");
}

else if (a>=11)
{
    printf("zolty");
}
else if (a<=(-1) && a>=(-9))
{
    printf("zielony");
}
else if (a<=(-11))
{
    printf("czerwony");
}
return 0;
*/
/*
int r,g,b;
puts("Podaj r g b ");
scanf("%d %d %d",&r,&g,&b);
if(r==0 && g==0 && b==0)
{
    printf("czarny");
}
else if (r==1 && g==1 && b==1)
{
    printf("bialy");
}
else if (r==1 && g==0 && b==0)
{
    printf("czerwony");
}
else if (r==0 && g==1 && b==0)
{
    printf("pink");
}
else if (r==0 && g==1 && b==0)
{
    printf("zolty");
}
else if (r==0 && g==0 && b==1)
{
    printf("niebieski");
}
else if (r==0 && g==1 && b==1)
{
    printf("jasno niebieski");

}
else if (r==1 && g==0 && b==1)
{
    printf("zielony ");

}
*/
//7
/*
int x,y;
puts("Podaj 2 cyfr");
scanf("%d %d",&x,&y);
if (x>y)
{
    printf("%d %d",x,y);
}
else if (x<y)
{
    printf("%d %d",x,y);
}
else if (x>y || x==0 || y==0)
{
    printf("%d %d",y,x);
}
else if (x>50 || y<23)
{
    printf("%d %d",y,x);
}
*/
//zad9
/*

double a,b,c,delta,x,x1,x2,p;
puts("Podaj a");
scanf("%f",&a);

puts("Podaj b");
scanf("%f",&b);

puts("Podaj c");
scanf("%f",&a);

delta=(b*b)-(4*a*c);

    if(delta>0)
    {
        p=delta/2;
        x1=(-b)-p/(2*a);
        x2=(-b)+p/(2*a);
        printf("2 miejsca zerowe : %d , %d ",x1,x2);
    }
    else if (delta<0)
    {
        printf("Brak rozwiazan");
    }
    else
    {
        x=(-b)/(2*a);
        printf("Miejsce 0 : %d",x);
    }
*/
int x,y,m,wynik,m1;
puts("Podaj x y ");
scanf("%d %d",&x,&y);
m=(x*x)+(y*y);
m1=sqrt(m);
if(m1==0)
{
    wynik=m/2;
}
else
{
    wynik=m;
}

printf("Modul to:  %d %d",m,wynik);
return 0;
}