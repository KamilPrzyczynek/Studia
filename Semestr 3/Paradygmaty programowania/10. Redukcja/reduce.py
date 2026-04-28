#skonczone
from functools import reduce
def srednia(lista):
    return reduce(lambda x,y:x+y,lista)/len(lista)
def najwiekszyelement(lista):
    return reduce(lambda x, y: x if x > y else y, lista)
def spolaszcz(lista):
    return reduce(lambda x, y: x + y, lista, [])
def manhattan(vec1,vec2):
    return reduce(lambda acc,xy:acc+abs(xy[0]-xy[1]),zip(vec1,vec2),0)
def odwroc(lista):
    return reduce(lambda acc, el: [el] + acc, lista, [])
def main():
    lista=[1,2,3,5,8,9,10]
    wynik1=srednia(lista)
    print(wynik1)
    wynik2=najwiekszyelement(lista)
    print(wynik2)
    lista_list=[[1,2,3],[5],[8,9]]
    wynik3=spolaszcz(lista_list)
    print(wynik3)
    vec1=(1,2,3)
    vec2=(5,6,7)
    wynik4=manhattan(vec1,vec2)
    print(wynik4)
    wynik5=odwroc(lista)
    print(wynik5)

if __name__ == "__main__":
    main()