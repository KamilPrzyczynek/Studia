import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;

public class Student implements Comparable<Student>{
    private String imie;
    private String nazwisko;
    private String nrAlbumu;
    private final ArrayList<Przedmiot> listaPrzedmiotow;

    public Student(String imie, String nazwisko, String nrAlbumu) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.nrAlbumu = nrAlbumu;;
        this.listaPrzedmiotow= new ArrayList<>();
    }

    public String getImie() {
        return imie;
    }

    public void setImie(String imie) {
        this.imie = imie;
    }

    public String getNazwisko() {
        return nazwisko;
    }

    public void setNazwisko(String nazwisko) {
        this.nazwisko = nazwisko;
    }

    public String getNrAlbumu() {
        return nrAlbumu;
    }

    public void setNrAlbumu(String nrAlbumu) {
        this.nrAlbumu = nrAlbumu;
    }

    public void dodajPrzedmiot(Przedmiot przedmiot) {
        listaPrzedmiotow.add(przedmiot);
    }
    public void usunPrzedmiot(String nazwa) {
        Integer i = 0;
        for(Przedmiot przedmiot : listaPrzedmiotow) {
            if(Objects.equals(przedmiot.getNazwa(), nazwa)) {
                listaPrzedmiotow.remove(przedmiot);
                break;
            }
            else {
                i++;
            }
        }
    }
    public double wyznaczSrednia() {
        int suma = 0;
        int licznik = 0;
        for(Przedmiot przedmiot : listaPrzedmiotow) {
            suma += przedmiot.getOcena();
            licznik++;
        }
        return (double) suma / licznik;
    }

    public void pokazPrzedmioty() {
        for(Przedmiot przedmiot : listaPrzedmiotow) {
            System.out.println(przedmiot.getNazwa());
        }
    }

    @Override
    public int compareTo(Student o) {
        return Integer.compare(Integer.parseInt(this.getNrAlbumu()), Integer.parseInt(o.getNrAlbumu()));
    }
}
