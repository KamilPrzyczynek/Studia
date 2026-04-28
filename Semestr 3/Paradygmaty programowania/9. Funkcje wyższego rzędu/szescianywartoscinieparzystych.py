#sprawdzdone na zajeciach
def wersjaszczescianu_v1(lst):
    return (x**3 for x in lst if x%2!=0)
def weersjaszczescianu_v2(lst):
    nieparz=filter(lambda x:x%2!=0,lst)
    szesc=map(lambda x:x**3,nieparz)
    return szesc

def main():
    lista=[1,2,3,4,5,6,7,8,9]
    wynik1=list(wersjaszczescianu_v1(lista))
    print(wynik1)
    wynik2=weersjaszczescianu_v2(lista)
    print(wynik2)


if __name__ == "__main__":
    main()