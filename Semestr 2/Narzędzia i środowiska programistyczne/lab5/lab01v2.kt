import kotlin.math.sqrt
const val pi=3.14

fun main() {

    val a=5
    val h=10

    val wynik=0.5*(a*h)
    println(wynik)
val r=20
    val kolowynik=pi*r*r
    println(kolowynik)
val x1:Double
val x2:Double
    val akwadrat=2.0

    val bkwadrat=5.0
    val ckwardat=3.0
    val delta=bkwadrat*bkwadrat-4*akwadrat*ckwardat
    println(delta)
    if (delta > 0) {
        val x1 = (-bkwadrat - sqrt(delta)) / (2 * akwadrat)
        val x2 = (-bkwadrat + sqrt(delta)) / (2 * akwadrat)
        println(x1)
        println(x2)
        println("Miejsca zerowe: x1 = $x1, x2 = $x2")
    } else if (delta == 0.0) {
        val x = -bkwadrat / (2 * a)
        println("Miejsce zerowe: x = $x")
    } else {
        println("Funkcja kwadratowa nie ma miejsc zerowych.")
    }

    println("Delta: $delta")





}