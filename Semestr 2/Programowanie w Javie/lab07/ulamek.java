package com.company;

public class ulamek {
    private int licznik;
    private int mianownik;

    public ulamek(int licznik, int mianownik) {
        if (mianownik == 0) {
            throw new ZeroDenominator();
        }
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
        if (mianownik == 0) {
            throw new ZeroDenominator();
        }
        this.mianownik = mianownik;
    }

    public ulamek dodaj(ulamek u) {
        int nowyLicznik = this.licznik * u.mianownik + u.licznik * this.mianownik;
        int nowyMianownik = this.mianownik * u.mianownik;
        return skroc(new ulamek(nowyLicznik, nowyMianownik));
    }

    public ulamek odejmij(ulamek u) {
        int nowyLicznik = this.licznik * u.mianownik - u.licznik * this.mianownik;
        int nowyMianownik = this.mianownik * u.mianownik;
        return skroc(new ulamek(nowyLicznik, nowyMianownik));
    }

    public double dzielenie(ulamek u) {
        return (double) this.licznik / u.mianownik;
    }

    private ulamek skroc(ulamek u) {
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
