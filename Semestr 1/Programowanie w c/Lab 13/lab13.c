#include<stdio.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>
void zad1(){
    int n, i;
    int* tablica;

    printf("Podaj liczbe: ");
    scanf("%d", &n);
    tablica = (int*) malloc(n *sizeof(int));
    if (tablica == NULL) {
        printf("Error \n");
        return 1;
    }
    printf("Tablica malloc:\n");
    for (i = 0; i < n; i++) {
        printf("%d ", tablica[i]);
    }
    printf("\n");

    free(tablica);
    tablica = NULL;


    printf("Podaj liczbe: ");
    scanf("%d", &n);
    tablica = (int*) calloc(n, sizeof(int));
    if (tablica == NULL) {
        printf("Error\n");
        return 1;
    }
    printf("Tablica calloc:\n");
    for (i = 0; i < n; i++) {
        printf("%d ", tablica[i]);
    }
    printf("\n");

    printf("Podaj liczbe: ");
    scanf("%d", &n);
    tablica = (int*) realloc(tablica, n * sizeof(int));
    if (tablica == NULL) {
        printf("Error\n");
        return 1;
    }
    printf("Tablica realloc:\n");
    for (i = 0; i < n; i++) {
        printf("%d ", tablica[i]);
    }
    printf("\n");

    free(tablica);
    tablica = NULL;
}
void zad2()
{
    int statycznatablica[1000];
    int* tablicadynamiczna1 = (int*) malloc(sizeof(int) * 1000);
    tablicadynamiczna1 = (int*) realloc(tablicadynamiczna1, sizeof(int) * 1000);
    tablicadynamiczna1 = (int*) realloc(tablicadynamiczna1, sizeof(int) * 1000);
    tablicadynamiczna1 = (int*) realloc(tablicadynamiczna1, sizeof(int) * 1000);

    free(tablicadynamiczna1);
}
void zad3()
{
    int wiersze, kolumny;
    printf("liczba wierszy: ");
    scanf("%d", &wiersze);
    printf("Liczba kolumn: ");
    scanf("%d", &kolumny);

    int** dynamicznatablica2 = (int**) malloc(sizeof(int*) * wiersze);
    for (int i = 0; i < wiersze; i++) {
        dynamicznatablica2[i] = (int*) malloc(sizeof(int) * kolumny);
    }

    for (int i = 0; i < wiersze; i++) {
        for (int j = 0; j < kolumny; j++) {
            dynamicznatablica2[i][j] = i * kolumny + j + 1;
        }
    }
    for (int i = 0; i < wiersze; i++) {
        for (int j = 0; j < kolumny; j++) {
            printf("%d ", dynamicznatablica2[i][j]);
        }
        printf("\n");
    }
    for (int i = 0; i < wiersze; i++) {
        free(dynamicznatablica2[i]);
    }
    free(dynamicznatablica2);

    int* dynamicznatablica1 = (int*) malloc(sizeof(int) * wiersze * kolumny);

    for (int i = 0; i < wiersze * kolumny; i++) {
        dynamicznatablica1[i] = i + 1;
    }
    for (int i = 0; i < wiersze; i++) {
        for (int j = 0; j < kolumny; j++) {
            printf("%d ", dynamicznatablica1[i * kolumny + j]);
        }
        printf("\n");
    }
    free(dynamicznatablica1);
}
void zad4(){
    char tymczasowybuffer[100];
    char *tablicadynamiczna;

    printf("Napisz zdanie: ");
    fgets(tymczasowybuffer, sizeof(tymczasowybuffer), stdin);
    int dlugosc = strlen(tymczasowybuffer);

    tablicadynamiczna = (char*) malloc(dlugosc+1);

    strcpy(tablicadynamiczna, tymczasowybuffer);
    printf("%s", tablicadynamiczna);

    printf("Napisz zdanie  kolejne: ");
    fgets(tymczasowybuffer, sizeof(tymczasowybuffer), stdin);
    int nowa_dlugosc = strlen(tymczasowybuffer);

    tablicadynamiczna = (char*) realloc(tablicadynamiczna, nowa_dlugosc+1);

    strcpy(tablicadynamiczna, tymczasowybuffer);
    printf("%s", tablicadynamiczna);


    free(tablicadynamiczna);
}
int main() {
zad1();
zad2();
zad3();
zad4();
    return 0;
}
