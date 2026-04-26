package com.company;

import java.io.*;
import java.util.Scanner;

public class zad4 {
    public static void echo(Reader r, Writer w) throws IOException {
        int i;
        while ((i = r.read()) != -1) {
            w.write(i);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Podaj nazwę pliku źródłowego:");
        String sourceFileName = scanner.nextLine();

        System.out.println("Podaj nazwę pliku docelowego:");
        String destinationFileName = scanner.nextLine();

        Reader r = null;
        Writer w = null;
        try {
            r = new BufferedReader(new FileReader(sourceFileName));
            w = new BufferedWriter(new FileWriter(destinationFileName));
            echo(r, w);
            System.out.println("Plik został skopiowany.");
        } catch (IOException e) {
            System.out.println("Wystąpił błąd podczas kopiowania plików.");
        } finally {
            try {
                if (r != null) {
                    r.close();
                }
            } catch (IOException e) {
                System.out.println("Wystąpił błąd przy zamykaniu pliku wejściowego.");
            }
            try {
                if (w != null) {
                    w.close();
                }
            } catch (IOException e) {
                System.out.println("Wystąpił błąd przy zamykaniu pliku wyjściowego.");
            }
            scanner.close();
        }
    }
}
