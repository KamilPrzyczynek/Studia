import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {
    public final static ArrayList<String> listaZespolonych = new ArrayList<>();

    public static void main(String[] args) throws IOException {

//        try(BufferedWriter zapiszTUTAJ = new BufferedWriter(new FileWriter("dane.txt"))) {
//
//            listaZespolonych.add(new LiczbaZespolona(2.1, 0.10));
//            listaZespolonych.add(new LiczbaZespolona(-2.0, 0.76));
//            listaZespolonych.add(new LiczbaZespolona(1.7, 1.90));
//
//            listaZespolonych.sort(LiczbaZespolona::compareTo);
//
//            for (LiczbaZespolona liczba : listaZespolonych) {
//                zapiszTUTAJ.write(liczba.toString() + "\n");
//                zapiszTUTAJ.write("Moduł: " + liczba.pokazModul() + "\n");
//
//            }
//        } catch(IOException e) {
//            System.out.println("BŁĄD" + e.getMessage());
//        }


        try (BufferedReader wczytajTo = new BufferedReader(new FileReader("dane.txt"))) {
            String nazwa;
            while ((nazwa = wczytajTo.readLine()) != null) {
                listaZespolonych.add(nazwa);
                for (String liczba : listaZespolonych) {
                    System.out.println(liczba.toString() + "\n");
                }

            }
            wczytajTo.close();
        } catch(IOException e) {
            System.out.println("BŁĄD" + e.getMessage());
        }


    }
}