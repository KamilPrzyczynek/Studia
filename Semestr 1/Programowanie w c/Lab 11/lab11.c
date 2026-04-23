#include <stdio.h>
#include <ctype.h>
#include <string.h>
int wyszukanielitery(char text[], char c) {
    int liczbnik1 = 0;
    for (int i = 0; text[i] != '\0'; i++) {
        if (tolower(text[i]) == tolower(c)) { // Bonus 1
            liczbnik1++;
        }
    }
    return liczbnik1;
}
zad1()
{
    char text[] = "Ala ma kota a kot ma ale";
    char c;
    printf("Podaj znak do wyszukania: ");
    c = getchar(); // Bonus 2
    int wynik = wyszukanielitery(text, c);
    printf("Znak '%c' wystapil %d razy w tekscie.\n", c, wynik);
}
void dzieleniewyrazow(char text4[]) {
    char *slowo = strtok(text4, " ");
    while (slowo != NULL) {
        printf("Wyraz: %s", slowo);

        printf(" (%ld znakow)", strlen(slowo));

        printf("\n");
        slowo = strtok(NULL, " ");
    }
}
zad2()
{
    char text4[] = "To jest przykladowy tekst ktory dzieli wyrazy";
    dzieleniewyrazow(text4);
}
void zamianawyrazow(char text3[], int n) {
    for (int i = 0; text3[i] != '\0'; i++) {
        if (isalpha(text3[i])) {
            if (n == 0) {
                text3[i] = toupper(text3[i]);
            } else if (n == 1) {
                text3[i] = tolower(text3[i]);
            } else if (n == 2) {
                if (isupper(text3[i])) {
                    text3[i] = tolower(text3[i]);
                } else {
                    text3[i] = toupper(text3[i]);
                }
            }
        }
    }
}
void zad3(){
    char text3[] = "Ala ula Jola maArciolcia Jacek piotrek";
    int n;
    printf("Podaj liczbe: 1 male , 2 duze: ");
    scanf("%d", &n);
    zamianawyrazow(text3, n);
    printf("Zmodyfikowany tekst: %s\n", text3);
}
int konwercjatekstu(char text4[]) {
    int liczba2 = 0;
    int znak = 1;
    int i = 0;
    if (text4[0] == '-') {
        znak = -1;
        i = 1;
    }
    for (; text4[i] != '\0'; i++) {
        if (!isdigit(text4[i])) {
            printf("Error\n");
            return 0;
        }
        liczba2 = liczba2 * 10 + (text4[i] - '0');
    }
    return liczba2 * znak;
}
zad4(){
    char text4[] = "-1234";
    int liczba3 = konwercjatekstu(text4);
    printf("Liczba calkowita: %d\n", liczba3);
}
int main() {
zad1();
zad2();
zad3();
zad4();
    return 0;
}
