public class Student implements Comparable<Student> {
    private String imie;
    private String nazwisko;
    private String nrAlbumu;

    public Student(String imie, String nazwisko, String nrAlbumu) throws BrakDanych {
        if(imie.isEmpty() || imie == null || nazwisko.isEmpty() || nazwisko == null || nrAlbumu.isEmpty() || nrAlbumu == null) {
            throw new BrakDanych("Brak imienia lub nazwiska lub numeru albumu!");
        }
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.nrAlbumu = nrAlbumu;
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

    @Override
    public int compareTo(Student o) {
        return Integer.compare(Integer.parseInt(this.getNrAlbumu()), Integer.parseInt(o.getNrAlbumu()));
    }
}
