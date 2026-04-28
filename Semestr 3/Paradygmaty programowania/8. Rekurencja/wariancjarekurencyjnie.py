#do sprawdzenia

#Nie ten wzór na liczenie wariancji. Proszę policzyć wg wzoru z ćwiczenia gdzie liczyliśmy wariancję w pętlach (W instrukcji było napisane, że wariancję należy liczyć przy powrotach a nie przy wchodzeniu w rekurencję)


def sredniaandwariancja(seq, lenght, suma=0):
    if len(seq)==0:
        srednia = suma / lenght
        return srednia,0
    else:
        head, *tail = seq
        suma,b=sredniaandwariancja(tail,lenght,suma+head)
        if len(seq)<lenght:
            roznica=head-suma
            return suma,(b+(roznica*roznica))
        else:
            roznica=head-suma
            return suma,(b+(roznica*roznica))/(lenght-1)


def main():
    sqe1 = [3,3,3,3]
    sqe2 = [5,6,7,8,9]
    lenght1=len(sqe1)
    wynik1=sredniaandwariancja(sqe1,lenght1)
    lenght2=len(sqe2)
    wynik2=sredniaandwariancja(sqe2,lenght2)
    print(f"{sqe1} Srednia: ={wynik1[0]} warnacja={wynik1[1]}")
    print(f"{sqe2} Srednia: ={wynik2[0]} warnacja={wynik2[1]}")
if __name__ == "__main__":
    main()
