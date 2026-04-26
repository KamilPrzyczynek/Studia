import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class zapiszDoPliku {
    public static void zapiszDoPliku(String nazwaPliku, MojaData data) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(nazwaPliku))) {
            writer.write(data.toString());
        } catch (IOException e) {
            System.out.println("Błąd podczas zapisu do pliku: " + e.getMessage());
        }
    }
}
