package com.company;

import java.io.*;

public class zad3 {
    static BufferedReader plikDoOdczytania() {
        BufferedReader sin = new BufferedReader(new InputStreamReader(System.in));
        String odp = "";
        while (true) {
            try {
                System.out.println("Podaj nazwę pliku do wypisania.");
                System.out.println("Jeżeli chcesz zakończyć, wpisz \"Koniec\".");
                odp = sin.readLine();
                if (odp.equalsIgnoreCase("Koniec")) {
                    return null;
                } else {
                    return new BufferedReader(new FileReader(odp));
                }
            } catch (IOException e) {
                System.out.println("Błąd: Nie udało się otworzyć pliku " + odp);
            }
        }
    }

    public static void main(String[] args) {
        BufferedReader br;
        while ((br = plikDoOdczytania()) != null) {
            try {
                PrintWriter pw = new PrintWriter(System.out, true);
                String s;
                while ((s = br.readLine()) != null) {
                    pw.println(s);
                }
                br.close();
            } catch (IOException e) {
                System.out.println("Błąd: Nie udało się otworzyć pliku.");
            }
        }
        System.out.println("Do następnego razu!");
    }
}
