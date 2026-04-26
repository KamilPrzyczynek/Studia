package com.company;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {

        ulamek[] ulamkiTablica = new ulamek[3];
        ulamkiTablica[0] = new ulamek(3, 4);
        ulamkiTablica[1] = new ulamek(1, 2);
        ulamkiTablica[2] = new ulamek(6, 7);

        ArrayList<ulamek> ulamekiLista = new ArrayList<>();
        ulamekiLista.add(new ulamek(2, 3));
        ulamekiLista.add(new ulamek(4, 8));
        ulamekiLista.add(new ulamek(2, 8));

        System.out.println("Tablica:");
        for (int i = 0; i < ulamkiTablica.length; i++) {
            System.out.println("Ulamek " + (i + 1) + ": " + ulamkiTablica[i]);
        }

        Arrays.sort(ulamkiTablica);
        System.out.println("Tablica po sortowaniu:");
        for (int i = 0; i < ulamkiTablica.length; i++) {
            System.out.println("Ulamek " + (i + 1) + ": " + ulamkiTablica[i]);
        }

        System.out.println("Lista:");
        for (int i = 0; i < ulamekiLista.size(); i++) {
            System.out.println("Ulamek " + (i + 1) + ": " + ulamekiLista.get(i));
        }

        Collections.sort(ulamekiLista);

        System.out.println("Lista po sortowaniu:");
        for (int i = 0; i < ulamekiLista.size(); i++) {
            System.out.println("Ulamek " + (i + 1) + ": " + ulamekiLista.get(i));
        }

    }
}
