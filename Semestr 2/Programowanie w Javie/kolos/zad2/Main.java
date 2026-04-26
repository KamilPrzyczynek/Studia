import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) throws EmptyName {
        try {
            Przedmiot p1 = new Przedmiot("C++", "Lab", 5.0);
            Przedmiot p2 = new Przedmiot("Java", "Lab", 3.5);
            Przedmiot p3 = new Przedmiot("Fizyka W", "Wykład", 3.0);
            Przedmiot p4 = new Przedmiot("Matematyka", "Lab", 4.5);
            Przedmiot p5 = new Przedmiot("Fizyka L", "Lab", 3.5);

            Student o1 = new Student("Jan", "Kowalski", "4");
            Student o2 = new Student("Maciej", "Kowalski", "1");

            o1.dodajPrzedmiot(p1);
            o1.dodajPrzedmiot(p2);
            o1.dodajPrzedmiot(p3);
            o2.dodajPrzedmiot(p4);
            o2.dodajPrzedmiot(p5);

            o2.usunPrzedmiot("Fizyka L");

            o2.dodajPrzedmiot(p1);

            List<Student> listaStudentow = new ArrayList<>();
            listaStudentow.add(o1);
            listaStudentow.add(o2);

            listaStudentow.sort(Student::compareTo);

            for (Student st : listaStudentow) {
                System.out.println("Numer Albumu: " + st.getNrAlbumu());
                System.out.println("Imię: " + st.getImie());
                System.out.println("Nazwisko: " + st.getNazwisko());
                System.out.println("Średnia ocen: " + st.wyznaczSrednia());
                System.out.println();

            }

        } catch(NullPointerException e) {
            System.out.println("Pojawił się błąd!! " + e.getMessage());
        }
    }
}