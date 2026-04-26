package pliki;
import javax.imageio.IIOException;
import java.io.*;

public class Zad3 {
    static BufferedReader sin;
    public static BufferedReader plikDoOdczytu() {
        String odp ="";
        while (true)
            try {
                System.out.println("Podaj nazwe pliku do wypisania.");
                System.out.println("Jezeli chcesz zakonczyc wpisz \"koniec\".");
                odp = sin.readLine();
                if (odp.equals("koniec"))
                    return null;
                else
                    return new BufferedReader(new FileReader(odp));

            } catch (IOException e) {
                System.out.println("Blad: Nie udalo sie otworzyc pliku: " +odp);
            }
    }

    public static void main(String[] args) {
        sin = new BufferedReader(new InputStreamReader(System.in));
        BufferedReader br;
        while ((br = plikDoOdczytu()) != null)
            try {
                PrintWriter pw = new PrintWriter(System.out, true);
                String s;
                while ((s = br.readLine()) != null)
                    pw.println(s);
                br.close();
            } catch (IOException e) {
                System.out.println("Blad: Nie udalo sie odczytac pliku.");
            }
        System.out.println("Do nastepnego razu!");

    }
}
