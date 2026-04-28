#poprawione 
#zamienione dzielniki (w średniej ma być n a w wariancji n-1) poza tym / n-1 podzieli przez n i odejmie 1 od ilorazu
def funkcja_liczaca(tablica):
    n = len(tablica)
    if n==0:
        return 0,0
    srednia = sum(tablica) / n
    wariancja = sum((x - srednia) ** 2 for x in tablica) / (n-1)
    return srednia, wariancja

def main():
    tablica = []

    while True:
        liczba = float(input("Podaj liczbę (wpisz 0, aby zakończyć): "))
        if liczba == 0:
            break
        else:
            tablica.append(liczba)

    srednia, wariancja = funkcja_liczaca(tablica)
    print("Średnia wynosi:", srednia)
    print("Wariancja wynosi:", wariancja)
    
    srednia1, wariancja1 = funkcja_liczaca([3, 3, 3, 3])
    srednia2, wariancja2 = funkcja_liczaca([5, 6, 7, 8, 9])
    
    print("Średnia 1 wynosi:", srednia1)
    print("Wariancja 1 wynosi:", wariancja1)
    
    print("Średnia 2 wynosi:", srednia2)
    print("Wariancja 2 wynosi:", wariancja2)

if __name__ == "__main__":
    main()
