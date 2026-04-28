#sprawdzone
podajnapis=input("Podaj liczby:")
slownik={
    '0':'zero',
    '1':'jeden',
    '2':'dwa',
    '3':'trzy',
    '4':'cztery',
    '5':'pięć',
    '6':'sześć',
    '7':'siedem',
    '8':'osiem',
    '9':'dziewieć',
    
}
slowo=""
for znak in podajnapis:
    if znak.isdigit():
        slowo+=slownik[znak]+" "
print(slowo)

