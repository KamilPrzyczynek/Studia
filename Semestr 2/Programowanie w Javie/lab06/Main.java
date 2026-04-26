public class Main {
    public static void main(String[] args) {
        MojaData dzisiaj = new MojaData(2023, 4, 21);
        System.out.println("Dzisiaj: " + dzisiaj);

        dzisiaj.przestawTydzienWPrzod();
        System.out.println("Za tydzień: " + dzisiaj);

        dzisiaj.przestawTydzienWTyl();
        System.out.println("Tydzień temu: " + dzisiaj);
    }
}