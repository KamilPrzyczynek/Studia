#poprawione
def my_range(*args):
    if(len(args)==0 or len(args)>3):
        raise ValueError("Funkcja my_range przyujme od 1 do 3 argumentów")
    
    start=0
    stop=None
    krok=1
    if len(args)==1:
        stop=args[0]
    elif  len(args)==2:
        start,stop=args
    elif  len(args)==3:
        start,stop,krok=args
    if krok==0:
        raise ValueError("Nie może być 0")
    wynik=[]
    wybrany=start
    while (krok>0 and wybrany <stop) or (krok<0 and wybrany>stop):
        wynik.append(wybrany)
        wybrany+=krok

    return wynik
def main():
    try:
        print(my_range(1.1, 2.2, 0.5))
        print(my_range(1.1, 2.1, 0.5))
        print(my_range(1.1, 2.2))
        print(my_range(2.2))
        print(my_range(2.2, 0.1, -0.5))
        
        print(my_range(1,2,3,4))
    except ValueError as e:
        print(f"Error:{e}")
        
if __name__ =="__main__":
    main()