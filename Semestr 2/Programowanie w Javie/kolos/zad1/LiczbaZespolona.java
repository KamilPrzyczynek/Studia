public class LiczbaZespolona implements Comparable<LiczbaZespolona> {
    private double rzeczywista;
    private double urojona;

    public LiczbaZespolona(double rzeczywista, double urojona) {
        this.rzeczywista = rzeczywista;
        this.urojona = urojona;
    }


    public double getRzeczywista() {
        return rzeczywista;
    }

    public void setRzeczywista(double rzeczywista) {
        this.rzeczywista = rzeczywista;
    }

    public double getUrojona() {
        return urojona;
    }

    public void setUrojona(double urojona) {
        this.urojona = urojona;
    }

    @Override
    public String toString() {
        return rzeczywista + " + " + urojona + "i";
    }
    public LiczbaZespolona dodajZespolone(LiczbaZespolona inna) {
        double nowaRzeczywista = this.rzeczywista + inna.rzeczywista;
        double nowaUrojona= this.urojona + inna.urojona;
        return new LiczbaZespolona(nowaRzeczywista, nowaUrojona);
    }

    public double pokazModul() {
        return Math.sqrt(rzeczywista*rzeczywista + urojona*urojona);
    }

    @Override
    public int compareTo(LiczbaZespolona o) {
        return Double.compare(this.pokazModul(), o.pokazModul());
    }
}

