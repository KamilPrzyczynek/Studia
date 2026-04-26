package com.company;

class ZeroDenominator extends RuntimeException {
    public ZeroDenominator() {
        System.out.println("Mianownik nie moze byc zerem!");
    }
}

class Ulamek {
    private int licznik;
    private int mianownik;

    public Ulamek(int licznik, int mianownik) {
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
