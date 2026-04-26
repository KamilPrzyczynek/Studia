package com.company;

public class Main {
    public static void main(String[] args) {
        RownanieKwadratowe rownanie = new RownanieKwadratowe(3, -4, 4);

        Result wynik = rownanie.obliczPierwiastki();

        if (wynik == null) {
            System.out.println("Równanie nie ma rozwiązań");
        } else {
            System.out.println("x1 = " + wynik.getX1() + ", x2 = " + wynik.getX2());
        }
    }
}

