#do sprawdzenia
from functools import reduce
from operator import add, truediv, mul

class Haskell:
    def __init__(self, func, num_args=None):
        self.func = func
        self.num_args = func.__code__.co_argcount if num_args is None else num_args

    def __pow__(self, other):
        return lambda *args, **kw: self.func(other(*args, **kw))

    def __call__(self, *a):
        if len(a) == self.num_args:
            return self.func(*a)

        def q(*b):
            return self.func(*(a + b))

        return Haskell(q, self.num_args - len(a))

def power(n, x):
    return x ** n

@Haskell
def lift1(f, ma):
    if ma is None: return None
    return f(ma)

@Haskell
def lift2(mf, ma, mb):
    if ma is None or mb is None or mf is None:
        return None
    return mf(ma, mb)

def flip(f):
    return Haskell(lambda y, x: f(x, y), 2)


power = Haskell(power)
sum_ = Haskell(sum, 1)
add_ = Haskell(add, 2)
truediv_ = flip(truediv)
map_ = Haskell(map, 2)
reduce_ = Haskell(reduce, 2)
add_1 = add_(1)

lista_plus1 = map_(lift1(add_1))
lista_suma = reduce_(lift2(add_))
mul_ = Haskell(mul, 2)

length_vector = lift1( power(0.5)) ** lista_suma ** map_(lift1(power(2)))

def normalize_vector(vector):
    length_value = length_vector(vector)

    multiply_by_length = lift2(truediv_)(length_value)
    return list(map_(multiply_by_length,vector))

def main():
    lista1 = [1, 2, 3, 4, 5]
    lista2 = [1, 2, 3, 4, None]

    wynik1 = list(lista_plus1(lista1))
    wynik2 = list(lista_plus1(lista2))
    print(wynik1, wynik2)

    wynik3 = lista_suma(lista1)
    wynik4 = lista_suma(lista2)
    print(wynik3, wynik4)

    wynik5 = normalize_vector(lista1)
    wynik6 = normalize_vector(lista2)
    print(wynik5, wynik6)

if __name__ == "__main__":
    main()
