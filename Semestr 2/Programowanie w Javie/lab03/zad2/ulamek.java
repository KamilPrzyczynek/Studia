package com.company;

class Ulamek {
    private int licznik;
    private int mianownik;

    public Ulamek(int licznik, int mianownik) {
        this.licznik = licznik;
        this.mianownik = mianownik;
    }

    public int getLicznik() {
        return licznik;
    }

    public void setLicznik(int licznik) {
        this.licznik = licznik;
    }

    public int getMianownik() {
        return mianownik;
    }

    public void setMianownik(int mianownik) {
        this.mianownik = mianownik;
    }

    public Ulamek dodaj(Ulamek u) {
        int nowyLicznik = this.licznik * u.mianownik + u.licznik * this.mianownik;
        int nowyMianownik = this.mianownik * u.mianownik;
        return skroc(new Ulamek(nowyLicznik, nowyMianownik));
    }

    public Ulamek odejmij(Ulamek u) {
        int nowyLicznik = this.licznik * u.mianownik - u.licznik * this.mianownik;
        int nowyMianownik = this.mianownik * u.mianownik;
        return skroc(new Ulamek(nowyLicznik, nowyMianownik));
    }

    private Ulamek skroc(Ulamek u) {
        int nwd = nwd(u.licznik, u.mianownik);
        u.licznik /= nwd;
        u.mianownik /= nwd;
        return u;
    }

    private int nwd(int a, int b) {
        return b == 0 ? a : nwd(b, a % b);
    }

    @Override
    public String toString() {
        return licznik + "/" + mianownik;
    }
}