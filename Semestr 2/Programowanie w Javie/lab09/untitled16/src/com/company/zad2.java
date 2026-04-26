package com.company;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class zad2 {

    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("plik.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Błąd: Nie udało się odczytać pliku.");
        }
    }
}
