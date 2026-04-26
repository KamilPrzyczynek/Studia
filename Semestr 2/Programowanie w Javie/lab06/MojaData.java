import java.time.LocalDate;

public class MojaData {
    private int rok;
    private int miesiac;
    private int dzien;

    public MojaData(int rok, int miesiac, int dzien) {
        this.rok = rok;
        this.miesiac = miesiac;
        this.dzien = dzien;
    }

    public int getRok() {
        return rok;
    }

    public int getMiesiac() {
        return miesiac;
    }

    public int getDzien() {
        return dzien;
    }

    public void przestawTydzienWPrzod() {
        LocalDate aktualnaData = LocalDate.of(rok, miesiac, dzien);
        LocalDate dataZaTydzien = aktualnaData.plusWeeks(1);
        this.rok = dataZaTydzien.getYear();
        this.miesiac = dataZaTydzien.getMonthValue();
        this.dzien = dataZaTydzien.getDayOfMonth();
    }

    public void przestawTydzienWTyl() {
        LocalDate aktualnaData = LocalDate.of(rok, miesiac, dzien);
        LocalDate dataOTydzienWstecz = aktualnaData.minusWeeks(1);
        this.rok = dataOTydzienWstecz.getYear();
        this.miesiac = dataOTydzienWstecz.getMonthValue();
        this.dzien = dataOTydzienWstecz.getDayOfMonth();
    }

    public String toString() {
        return String.format("%04d-%02d-%02d", rok, miesiac, dzien);
    }
}
