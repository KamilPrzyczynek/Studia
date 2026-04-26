//jedno linikowy komentarz

/* wielolinowy komtentarz
*
*
* */

/* dokumentacyjny
*/
fun main() {
var age: Int
    age=18
    var name ="ANS"
    var gender ='w'
    var salary =15888.9
    var juniorsalary =1567.9F
    var level=400

    var massage ="Mój wiek to: "+name

    println(massage)
    var age1: Int=18
    var result=if(age1 >=18) "Go to disco" else  "stay home"
    println(result)

when(age1) {
    in 10..100 -> println("Adult")
    else -> println("Teen")
}
    var age2=17
    var result2=when(age2){
        in 18..1000->"adult"
        else -> "lover"
    }
    println(result2)
    var digit: Int=15
    if(digit==0){
        println("It is zero")
    }else if(digit>0){
        println("Posirive")
    }else
    {
        println("Negative")
    }
var i=0
    var test:Int
    while(i<10){
        i++
        test=0
    }
    println("$i =  $i")
    var tekst:String="Mam lat ${age+10} lat."
    println(tekst)
    print("Enter text: ")
    var input= readLine()
    println("You entered: $input")


}