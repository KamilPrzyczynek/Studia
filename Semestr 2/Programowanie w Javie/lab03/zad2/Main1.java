package com.company;

public class Main {
    public static void main(String[] args) {
        Ulamek u1 = new Ulamek(3, 4);
        Ulamek u2 = new Ulamek(1, 2);

        Ulamek wynikDodawania = u1.dodaj(u2);
        System.out.println(u1 + " + " + u2 + " = " + wynikDodawania);

        Ulamek wynikOdejmowania = u1.odejmij(u2);
        System.out.println(u1 + " - " + u2 + " = " + wynikOdejmowania);
    }
}
