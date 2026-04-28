#skończone

from operator import add, truediv
class Haskell:        
    def __init__(self, func, num_args=None):
        self.func = func
        self.num_args = func.__code__.co_argcount if num_args==None else num_args

    def __pow__(self, other):
        return (lambda *args, **kw: self.func(other(*args, **kw)))

    def __call__(self, *a):
        if len(a) == self.num_args:
            return self.func(*a)
        def q(*b):
            return self.func(*(a + b))
        return Haskell(q, self.num_args - len(a))

@Haskell
def dodawanie(x):
    return x + 1

@Haskell
def dziel(x):
    return x / 2


def flip(f):
    return Haskell(lambda y, x: f(x, y), 2)


add_ = Haskell(add, 2)
truediv_ = flip(truediv)


def main():
    wynik1 = dziel(dodawanie(5))
    print(wynik1)

    funkcja = (dziel ** dodawanie)
    wynik3 = funkcja(5)
    print(wynik3)

    wynik4 = (truediv_(2) ** add_(1)) (5)
    print(wynik4)


if __name__ == "__main__":
    main()