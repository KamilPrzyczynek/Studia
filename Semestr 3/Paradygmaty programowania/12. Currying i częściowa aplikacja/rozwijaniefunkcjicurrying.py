#skonczone
from functools import partial
from operator import add,gt
def curry_l(f):
    return lambda a: lambda b: f(a, b)

def curry_d(f):
    def inner(a):
        return lambda b: partial(f, a, b)
    return inner

c_add= curry_l(add)

def c_less(a):
    return curry_d(gt)(a)

def inc(x):
    return c_add(1)(x)

def main():
    wynik1 = c_add(3)(5)
    print(wynik1)

    data = [1, 2, 3, 4, 3, 2, 1]
    wynik2 = list(filter(c_less(3), data))
    print(wynik2)

    wynik3 = inc(6)
    print(wynik3)

if __name__ == "__main__":
    main()
