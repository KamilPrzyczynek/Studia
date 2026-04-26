import java.io.*;

public class Main {
    public static void main(String[] args) {
        MojaData dzisiaj = new MojaData(2023, 4, 21);
        System.out.println("Dzisiaj: " + dzisiaj);

        dzisiaj.przestawTydzienWPrzod();
        System.out.println("Za tydzień: " + dzisiaj);

        dzisiaj.przestawTydzienWTyl();
        System.out.println("Tydzień temu: " + dzisiaj);

        zapiszDoPliku("plik.txt", dzisiaj);
        MojaData odczytanaData = odczytajZPliku("plik.txt");
        System.out.println("Odczytana data: " + odczytanaData);
    }

    public static void zapiszDoPliku(String nazwaPliku, MojaData data) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(nazwaPliku))) {
            writer.write(data.toString());
        } catch (IOException e) {
            System.out.println("Błąd podczas zapisu do pliku: " + e.getMessage());
        }
    }

    public static MojaData odczytajZPliku(String nazwaPliku) {
        try (BufferedReader reader = new BufferedReader(new FileReader(nazwaPliku))) {
            String linia = reader.readLine();
            String[] podzielone = linia.split("-");
            int rok = Integer.parseInt(podzielone[0]);
            int miesiac = Integer.parseInt(podzielone[1]);
            int dzien = Integer.parseInt(podzielone[2]);
            return new MojaData(rok, miesiac, dzien);
        } catch (IOException e) {
            System.out.println("Błąd podczas odczytu pliku: " + e.getMessage());
            return null;
        }
    }
}
