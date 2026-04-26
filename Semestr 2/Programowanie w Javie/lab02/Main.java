package com.company;
import java.io.*;
import java.util.Scanner;
public class Main {
    static void rozklad(int x) {
        int liczba=2;

        while (x>1) {
            while (x%liczba==0) {
                System.out.println(x+":"+liczba);
                x /= liczba;
            }
            liczba+=1;
        }
        System.out.println(x);
    }

    public static void main(String[] args) throws IOException {
        System.out.println("Argumenty wiersza poleceń: ");
        for (int i=0;i< args.length;i++) {
            System.out.println(args[i]);
        }
        BufferedReader stdin = new BufferedReader(new InputStreamReader(System.in), 1);

        int x, y, wynik;

        System.out.print("Podaj x = ");
        x = Integer.parseInt(stdin.readLine());
        System.out.print("Podaj y = ");
        y = Integer.parseInt(stdin.readLine());
        wynik=x+y;
        System.out.println("wynik: " + wynik);
        Scanner scanner = new Scanner(System.in);

        System.out.print("Podaj pierwszą liczbę: ");
        int aa = scanner.nextInt();

        System.out.print("Podaj drugą liczbę: ");
        int b = scanner.nextInt();

        int wynik1 = aa + b;

        System.out.println("Wynik dodawania: " + wynik1);

        int a;
        System.out.print("Liczba: ");
        a = Integer.parseInt(stdin.readLine());
        rozklad(a);
    }
}
