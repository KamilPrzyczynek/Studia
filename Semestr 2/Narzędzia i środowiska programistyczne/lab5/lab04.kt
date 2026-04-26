fun main() {
    //zad1
    val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8)
    val evenNumbers = filterEvenNumbers(numbers)
    println(evenNumbers)

    //zad2
    val names = mutableListOf("Mike", "Tom")
    val sum = sumNameLengths(names)
    println(sum)
    //zad3
    val roman1 = "V"
    val arabic1 = zamianaarabska(roman1)
    println(arabic1)
//zad4
    val credentials = mapOf(
        "user1" to "pass1",
        "user2" to "pass2",
        "user3" to "pass3"
    )
    val login1 = login("user1", "pass1", credentials)
    println(login1) // true

    val login2 = login("user2", "incorrectPassword", credentials)
    println(login2) // false


}
//zad1
fun filterEvenNumbers(numbers: List<Int>): List<Int> {
    val evenNumbers = mutableListOf<Int>()
    for (number in numbers) {
        if (number % 2 == 0) {
            evenNumbers.add(number)
        }
    }
    return evenNumbers
}
//zad2
fun sumNameLengths(names: List<String>): Int {
    var sum = 0
    for (name in names) {
        sum += name.length
    }
    return sum
}
//zad3
fun zamianaarabska(roman: String): Int? {
    val map = mapOf(
        "I" to 1,
        "II" to 2,
        "III" to 3,
        "IV" to 4,
        "V" to 5,
        "VI" to 6,
        "VII" to 7,
        "VIII" to 8,
        "IX" to 9,
        "X" to 10
    )
    return map[roman]
}
//zad4
fun login(login: String, password: String, credentials: Map<String, String>): Boolean {
    if(credentials.containsKey(login)) {
        if(credentials[login] == password) {
            return true
        }
    }
    return false
}
