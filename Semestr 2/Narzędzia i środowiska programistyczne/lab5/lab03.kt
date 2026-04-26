//zad2
const val pi=3.14
fun zad2(a: Int, b: Int) = if (a > b) a else b

fun zad3(radiu: Double):Double {
    return pi*radiu*radiu
}
private fun zad4(a4: Int = 1, b4: Int = 2) {
    println("Liczby $a4 $b4 :)")
}
fun zad5(n: Int): Int {
    if (n == 0) {
        return 0
    } else if (n > 0) {
        return n + zad5(n - 1)
    } else {
        return n + zad5(n + 1)
    }
}
//zad6
fun maxFromArray(digits: Array<Int>): Int {
    var max = digits[0]
    for (i in 1 until digits.size) {
        if (digits[i] > max) {
            max = digits[i]
        }
    }
    return max
}
fun main() {
    //zad1
    val example1 = 1..100

    for(num in example1) {
        when {
            num % 3 == 0 && num % 5 == 0 -> println("FizzBuzz")
            num % 3 == 0 -> println("Fizz $num")
            num % 5 == 0 -> println("Buzz $num")
            else -> println(num)
        }
    }
//zad2
    val returnValue = zad2(2, 3)
    println(returnValue)

    //zad3
    val radiu=15.0
val polekola=zad3(radiu)
    println(polekola)
//zad4
zad4(4,2)
    zad4()
    //zad5
    println(zad5(5))
    println(zad5(-5))

    //zad6
    println(maxFromArray(arrayOf(2, 4, 5, -1, 7, 8, 0, 4)))

}
