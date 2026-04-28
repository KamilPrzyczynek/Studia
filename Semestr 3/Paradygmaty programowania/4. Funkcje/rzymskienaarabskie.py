
liczba_rzymska = input("Podaj liczby rzymskie: ")
slownik = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}
result = 0
poprzednia_wartosc=0
liczba_rzymska = liczba_rzymska[:1]
for liczba in liczba_rzymska[::-1]:
    value=slownik[liczba]
    result+=value if value >=poprzednia_wartosc else -value
    poprzednia_wartosc=value
print(result)