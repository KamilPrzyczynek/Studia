class Car constructor(mark: String, private var color: String) {
    private val mark = mark
    private var speed: Int = 0
    private var engineStarted = false

    fun engineStart() {
        engineStarted = true
    }

    fun engineStop() {
        engineStarted = false
        speed = 0
    }

    private fun incSpeed() {
        if(engineStarted){
            speed++
        }
    }

    fun run() {
        incSpeed()
    }

    fun checkSpeed(): Int {
        return speed
    }
    fun getColor(): String {
        return color
    }
}
class Student(val idx: Int, val firstName: String, val lastName: String, var mark: Double) {
    // implementacja metody toString()
    override fun toString(): String {
        return "Student: $idx, $firstName $lastName, $mark"
    }
}

class ManageStudent(var students: MutableList<Student>) {
    // implementacja metody avg()
    fun avg(): Double {
        var sum = 0.0
        for (student in students) {
            sum += student.mark
        }
        return sum / students.size
    }

    // implementacja metody failed()
    fun failed(): List<Student> {
        val failedStudents = mutableListOf<Student>()
        for (student in students) {
            if (student.mark < 2.0) {
                failedStudents.add(student)
            }
        }
        return failedStudents
    }

    // implementacja metody add()
    fun add(student: Student) {
        students.add(student)
    }

    // implementacja metody update()
    fun update(idx: Int, student: Student) {
        for (i in students.indices) {
            if (students[i].idx == idx) {
                students[i] = student
                break
            }
        }
    }

    // implementacja metody remove()
    fun remove(idx: Int) {
        students.removeIf { it.idx == idx }
    }
}

fun main() {
    val audi = Car("Audi", "SILVER")

    println("Audi color: ${audi.getColor()}")
    println("Audi ma na liczniku ${audi.checkSpeed()} km/h")
    println("Audi przyspiesza...")

    audi.engineStart()
    audi.run()
    audi.run()
    audi.run()

    println("Audi ma na liczniku ${audi.checkSpeed()} km/h")

    audi.engineStop()
    println("Audi ma na liczniku ${audi.checkSpeed()} km/h")

    val students = mutableListOf(
        Student(1, "Adam", "Kowalski", 4.5),
        Student(2, "Anna", "Nowak", 3.0),
        Student(3, "Jan", "Nowacki", 2.5)
    )

    // utworzenie obiektu klasy ManageStudent
    val manageStudent = ManageStudent(students)

    // wywołanie metody avg()
    println("Średnia ocen: ${manageStudent.avg()}")

    // wywołanie metody failed()
    val failedStudents = manageStudent.failed()
    if (failedStudents.isNotEmpty()) {
        println("Nie zaliczyli:")
        for (student in failedStudents) {
            println(student)
        }
    } else {
        println("Wszyscy zaliczyli!")
    }

    // dodanie nowego studenta
    manageStudent.add(Student(4, "Katarzyna", "Nowacka", 1.5))

    // wyświetlenie listy studentów
    println("Lista studentów po dodaniu:")
    for (student in manageStudent.students) {
        println(student)
    }

    // aktualizacja danych studenta
    manageStudent.update(2, Student(2, "Anna", "Kwiatkowska", 4.0))

    // wyświetlenie listy studentów po aktualizacji
    println("Lista studentów po aktualizacji:")
    for (student in manageStudent.students) {
        println(student)
    }

    // usunięcie studenta o numerze indeksu 3
    manageStudent.remove(3)

    // wyświetlenie listy studentów po usunięciu
    println("Lista studentów po usunięciu:")
    for (student in manageStudent.students) {
        println(student)
    }
}
