import java.io.IOException;

public class BrakDanych extends RuntimeException {
    public BrakDanych(String blad) {
        super(blad);
    }
}
