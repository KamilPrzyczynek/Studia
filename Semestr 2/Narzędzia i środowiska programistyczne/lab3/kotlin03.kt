fun main() {
    println("Podaj imie: ")
    var message  = readLine()
    var licznik=0

    message=message?: ""

    for (m in message){
        if(m !=' ' && m!= '\t')
        {
            licznik+=1
        }
    }

    println(message)
    println(licznik)
}
fun main() {

    println("Podaj 1 cyfre: ")
    var a  = readLine()
    println("Podaj 2  cyfre: ")
    var b  = readLine()

    var aAsInt = a?.toInt() ?:0
    var bAsInt = b?.toInt() ?:0

    var wynik=aAsInt+bAsInt

    println(wynik)
}
fun main() {

    println("Podaj 1 cyfre: ")
    var a = readLine()
    var aAsInt = a?.toInt() ?: 0
    try {
        val result = a.get(2)
        println("Result: $result")
    } catch (e: StringIndexOutOfBoundsException) {
        println("Mamy blad!!!")
        println("Blok 'catch' wykona sie w przypadku bledu")
        println("Zlapano wyjatek: $e")

        println(aAsInt)
    }
}


fun main() {
    var message  =  "ANS Tarnow"

    message=message?: ""

    for (m in message){
        if(m !=' ' && m!= '\t')
        {

        }
    }

    println(message)
}