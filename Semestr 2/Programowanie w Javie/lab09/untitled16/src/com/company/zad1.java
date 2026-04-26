package com.company;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;

public class zad1 {

    public static void main(String[] args) {
        try (BufferedInputStream is = new BufferedInputStream(new FileInputStream("plik.txt"))) {
            for (int i = 0; i < 4; i++) {
                System.out.println(Integer.toHexString(is.read()));
            }
        } catch (IOException e) {
            System.out.println("Błąd: Nie udało się odczytać pliku.");
        }
    }
}
