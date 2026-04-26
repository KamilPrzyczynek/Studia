import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Grupa {
    private Integer n;
    private List<Student> listaStudentow;

    public Grupa(Integer n) {
        this.n = n;
        this.listaStudentow = new ArrayList<>();
    }

    public Integer getN() {
        return n;
    }

    public void setN(Integer n) {
        this.n = n;
    }


    public void podajDane() throws BrakDanych {
        Scanner wczytaj = new Scanner(System.in);
        for(int i=0; i < n; i++) {
            System.out.println("Podaj dane dla studenta: " + (i + 1));
            System.out.println("Podaj imię: ");
            String imie = wczytaj.nextLine();
            System.out.println("Podaj nazwisko: ");
            String nazwisko = wczytaj.nextLine();
            System.out.println("Podaj numer albumu: ");
            String nrAlbumu = wczytaj.nextLine();


            Student s1 = new Student(imie, nazwisko, nrAlbumu);
            listaStudentow.add(s1);

            listaStudentow.sort(Student::compareTo);
        }
    }

    @Override
    public String toString() {
        String wyjscie = "";
        for(Student student : listaStudentow) {
            wyjscie += student.getImie() + " " + student.getNazwisko() + "\n" + student.getNrAlbumu() + "\n";
        }
        return wyjscie;
    }

}
