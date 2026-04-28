#skonczone
wysokosc = int(input("Podaj liczbę od 1 do 7: "))

if wysokosc < 1 or wysokosc > 7:
    print("Liczba musi być z przedziału od 1 do 7.")
else:
    for i in range(1, wysokosc + 1):
        linia = " " * (wysokosc - i)
        liniagwi = 2 * i - 1
        
        if wysokosc % 2 == 0:
            linia += "*" * liniagwi
        else:
            linia += "#" * liniagwi
                    
        print(linia)
