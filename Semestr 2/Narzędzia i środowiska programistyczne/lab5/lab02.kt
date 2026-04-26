import java.lang.NumberFormatException

fun main() {

    //zad1
    print("Wprowadź ciąg znaków: ")
    val input = readLine()
    var count = 0
    if (input != null) {
        for (c in input) {
            if (!c.isWhitespace()) {
                count++
            }
        }
    }
    println("Liczba znaków (bez białych znaków): $count")





    //zad2
    print("Podaj pierwszą liczbę: ")
    val a = readLine()?.toInt() ?: 0

    print("Podaj drugą liczbę: ")
    val b = readLine()?.toInt() ?: 0
    val wynik = a + b
    println(wynik)
//zad3
    print("Podaj pierwszą liczbę: ")
    val a1 = readLine()?.toInt() ?: 0
    print("Podaj druga liczbę: ")
    val a2= readLine()?.toInt() ?: 0
    print("Podaj trzecia liczbę: ")
    val a3 = try {
        readLine()?.toInt() ?: throw NumberFormatException()
    } catch (e: NumberFormatException) {
        0
    }
    val wynik2 = a1 + a2 + a3
    println(wynik2)

    //zad4
    val message="Alamakota"
    for(i in message.indices step 2){
        println(message[i])
    }
    //zad5
    val hero = "Spiderman"
    val deleteChar = 3
    var result = ""

    for (ii in hero.indices) {
        if (ii == deleteChar) {
            continue
        }
        result += hero[ii]
    }

    println("Zaktualizowany ciąg: $result")

    //zad6
    val tablica = arrayOf(1,2,3,4,5,6,7,8,9,10)
    for (i in tablica.size - 1 downTo 0) {
        println(tablica[i])
    }
}

