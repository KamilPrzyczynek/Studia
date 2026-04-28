#skonczone
import random
print("Maszyna losuje liczbę......")
liczba=random.randint(1, 10)
proby=3

for _ in range(proby):
    zgaduje=int(input("Podaj liczbę:"))
    if zgaduje==liczba:
        print("brawo wygrałeś")
        break
    else:
        if liczba > zgaduje:
            print("liczba jest wieksza")
        else:
            print("liczba jest mniejsza")
    
else:
    print("Przegraleś.Wysoloswana liczba  to:",liczba)
        
