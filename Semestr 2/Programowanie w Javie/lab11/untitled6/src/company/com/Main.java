import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void Main(String[] args) {
        Ulamek[] tablicaUlamek = { new Ulamek(1, 2), new Ulamek(3, 4), new Ulamek(5, 6) };
        List listaUlamkow = new ArrayList<>();
        listaUlamkow.add(new Ulamek(2, 3));
        listaUlamkow.add(new Ulamek(4, 5));
        listaUlamkow.add(new Ulamek(6, 7));

        System.out.println("Tablica:");
        for (Ulamek u : tablicaUlamek) {
            System.out.println(u);
        }

        System.out.println("Lista:");
        for (Object u : listaUlamkow) {
            System.out.println(u);
        }

        Arrays.sort(tablicaUlamek);
        Collections.sort(listaUlamkow, Collections.reverseOrder());

        System.out.println("Tablica po sortowaniu:");
        for (Ulamek u : tablicaUlamek) {
            System.out.println(u);
        }

        System.out.println("Lista po sortowaniu:");
        for (Object u : listaUlamkow) {
            System.out.println(u);
        }
    }
}

class Ulamek implements Comparable {
    private int licznik;
    private int mianownik;

    public Ulamek(int licznik, int mianownik) {
        this.licznik = licznik;
        this.mianownik = mianownik;
    }

    public int getLicznik() {
        return licznik;
    }

    public int getMianownik() {
        return mianownik;
    }

    public String toString() {
        return licznik + "/" + mianownik;
    }

    public int compareTo(Ulamek other) {
        double thisValue = (double) licznik / mianownik;
        double otherValue = (double) other.licznik / other.mianownik;
        return Double.compare(thisValue, otherValue);
    }
    public int compareTo(Object o) {
        return 0;
    }
}