#skonczone
def liczby_pierwszev1(n):
    def czy_pierwsza(num):
        reszty = list(map(lambda x: num % x, range(2, num)))
        return all(reszta != 0 for reszta in reszty)

    return list(filter(czy_pierwsza, range(2, n)))
    
def liczby_pierwszev2(n):
    czy_pierwsza = lambda num: all(num % x != 0 for x in range(2, num))
    return list(filter(czy_pierwsza, range(2, n)))

def main():
    wynikv1 = liczby_pierwszev1(20)
    wynikv2 = liczby_pierwszev2(20)
    print(wynikv1)
    print(wynikv2)


if __name__ == "__main__":
    main()