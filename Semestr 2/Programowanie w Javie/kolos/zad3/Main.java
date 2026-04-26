import java.io.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args)  throws BrakDanych {

//        Scanner wczytaj = new Scanner(System.in);
//
//        System.out.println("Podaj ilość studentów w grupie: ");
//        Integer n = wczytaj.nextInt();

//            try(BufferedWriter zapisz = new BufferedWriter(new FileWriter("dane.txt"))) {
//
//                Grupa grupa = new Grupa(n);
//                grupa.podajDane();
//
//                zapisz.write("Studenci w grupie: ");
//                zapisz.write(grupa.toString());
//
//            } catch (IOException e) {
//                throw new RuntimeException(e);
//            }

        try(BufferedReader odczyt = new BufferedReader(new FileReader("dane.txt"))) {
            String nazwa = "";
            while((nazwa = odczyt.readLine()) != null) {
                System.out.println(nazwa);
            }

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


    }
}