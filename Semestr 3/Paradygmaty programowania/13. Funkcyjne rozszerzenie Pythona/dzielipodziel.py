#do sprawdzenia 
from operator import add, truediv

class Haskell:
    def __init__(self, func, num_args=None):
        self.func = func
        self.num_args = func.__code__.co_argcount if num_args == None else num_args

    def __pow__(self, other):
        return (lambda *args, **kw: self.func(other(*args, **kw)))

    def __call__(self, *a):
        if len(a) == self.num_args:
            return self.func(*a)

        def q(*b):
            return self.func(*(a + b))

        return Haskell(q, self.num_args - len(a))

def flip(f):
    return Haskell(lambda y, x: f(x, y), 2)

map_ = Haskell(map, 2)

add_ = Haskell(add, 2)
add_1=add_(1)
truediv_ = flip(truediv)
truediv_1=truediv_(2)

zlozeniev1=truediv_1 ** add_1
zlozeniev2=map_(truediv_1) ** map_(add_1)

def dodaj_i_podziel_v1(lst):
    wynik1= list(map_(zlozeniev1, lst))
    return wynik1

def dodaj_i_podziel_v2(lst):
    wynik2 = list(zlozeniev2(lst))
    return wynik2
def main():
    lista=[5,6,7]
    wynik1 = dodaj_i_podziel_v1(lista)
    print(wynik1)
    wynik2 = dodaj_i_podziel_v2(lista)
    print(wynik2)

if __name__ == "__main__":
    main()
