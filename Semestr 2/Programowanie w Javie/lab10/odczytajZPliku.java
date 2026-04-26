import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class odczytajZPliku {
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
