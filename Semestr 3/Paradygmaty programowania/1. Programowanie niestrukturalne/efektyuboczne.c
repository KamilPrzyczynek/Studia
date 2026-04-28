
#include <stdio.h>
void oblicz(int a,int b,int *iloczyn,int *suma){
*suma=a+b;
*iloczyn=a*b;
    
}
int main(){
int x,suma,iloczyn;
printf("Podaj 2 liczby: ");
scanf("%d",&x);
oblicz(10,x,&iloczyn,&suma);
printf("suma: %d",suma);
printf("iloczyn: %d,iloczyn");

    return 0;
}