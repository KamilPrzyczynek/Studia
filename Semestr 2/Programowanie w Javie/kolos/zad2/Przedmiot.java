public class Przedmiot {
    private String nazwa;
    private String typ;
    private double ocena;

    public Przedmiot(String nazwa, String typ, double ocena) throws EmptyName {
        if(nazwa.isEmpty() || nazwa == null || typ.isEmpty() || typ == null) {
            throw new EmptyName("Brak nazwy lub typu wykładu!");
        }
        if(ocena < 2.0 || ocena > 5.0) {
            throw new EmptyName("Brak wpisanej oceny lub nieprawidłowa ocena!");
        }
        this.nazwa = nazwa;
        this.typ = typ;
        this.ocena = ocena;
    }

    public String getNazwa() {
        return nazwa;
    }

    public void setNazwa(String nazwa) {
        this.nazwa = nazwa;
    }

    public String getTyp() {
        return typ;
    }

    public void setTyp(String typ) {
        this.typ = typ;
    }

    public double getOcena() {
        return ocena;
    }

    public void setOcena(double ocena) {
        this.ocena = ocena;
    }
}
