#include <stdio.h>
//szkonczone
int main() {

    int wysokosc;
    char znak;

    start:
    printf("Podaj wysokosc: ");
    scanf("%d", &wysokosc);

    if(wysokosc % 2 == 0) znak = '*';
    else
    znak='#';
    
    int szerokosc,szerchoinki = 0, j = wysokosc, k = 0;

    zeroszr:
    szerokosc = 0;
    szerchoinki = 0;

    dziura:
    if(szerokosc < j - k) printf(" ");
    szerokosc++;

    if(j != szerokosc) goto dziura;

    int glowa = szerokosc;

    choinka:
    printf("%c", znak);
    szerchoinki = 2 * k + 1;
    glowa++;

    if(glowa < szerchoinki + szerokosc )
        goto choinka;

    k++;
    printf("\n");

    if(j-k > 0) goto zeroszr;

    if(wysokosc != 7) goto start;

    return 0;
}