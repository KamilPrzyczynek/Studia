//class Car constructor(mark: String, color: String) {
//    private val mark = mark
//    private var color = color
//    private var speed: Int = 0
//    private var engineStarted = false
//    public var engineStart = engineStarted
//    public var engineStop : Int =0
//
//
//    fun engineStart() { // funkcja publiczna
//
//    }
//    fun engineStop() { // funkcja publiczna
//
//    }
//
//
//    private fun incSpeed() { // funkcja prywatna
//if(engineStarted){
//    speed++
//}
//    }
//
//    fun run() { // funkcja publiczna
//        incSpeed()
//    }
//
//    fun checkSpeed(): Int { // funkcja publiczna
//        return speed
//    }
//
//
//
//}
//fun main() {
//    // tworzenie obiektu, czyli konkretnego pojazdu
//    val audi = Car("Audi", "SILVER")
//
//    val tesla = Car("Tesla", "black")
//    val bmv = Car("bmv", "blue")
//
//    val ferrari = Car("ferrari", "red")
//    for(i in car step 2){
//        car=engineStart
//
//    }
//
//    println("bmv ma na liczniku ${bmv.checkSpeed()} km/h")
//    println("bmv przyspiesza...")
//    println("bmv ma na liczniku ${bmv.checkSpeed()} km/h")
//    println("bmv przyspiesza...")
//
//    //audi.color = "RED" // prywatny -błąd, dostęp prywatny
//    //audi.speed = 200 // private - błąd, dostęp prywatny
//
//    // dostęp do metody publicznej: [nazwa obiektu].[wywołanie metody]
//    println("Audi ma na liczniku ${audi.checkSpeed()} km/h")
//    println("Audi przyspiesza...")
//
//    audi.run() // przyspiesza...
//    audi.run() // przyspiesza...
//    audi.run() // nadal przyspiesza...
//
//    println("Audi ma na liczniku ${audi.checkSpeed()} km/h")
//}

class ManageStudent(Students: MutableList<ManageStudent>) {
    public var oceny: Float = 0
    public var failed=ManageStudent



    fun avg() { // funkcja publiczna
        oceny()
    }
    fun failed() { // funkcja publiczna
        if(avg>=2.0)
        {
            return failed()
        }
    }
    fun add(){

    }


}
fun main() {
    // tworzenie obiektu, czyli konkretnego pojazdu
    val audi = Car("Audi", "SILVER")

    audi.color = "RED" // public - ok, dostęp publiczny
    //audi.speed = 200 // private - błąd, dostęp prywatny

    // dostęp do metody publicznej: [nazwa obiektu].[wywołanie metody]
    println("Audi ma na liczniku ${audi.checkSpeed()} km/h")
    println("Audi przyspiesza...")

    audi.run() // przyspiesza...
    audi.run() // przyspiesza...
    audi.run() // nadal przyspiesza...

    println("Audi ma na liczniku ${audi.checkSpeed()} km/h")
}