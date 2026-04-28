#do sprawdzenia
from operator import add, mod

class Haskell:
    def __init__(self, func, num_args=None):
        self.func = func
        self.num_args = func.__code__.co_argcount if num_args is None else num_args

    def __pow__(self, other):
        return (lambda *args, **kw: self.func(other(*args, **kw)))

    def __call__(self, *a):
        if len(a) == self.num_args:
            return self.func(*a)
        def q(*b):
            return self.func(*(a + b))
        return Haskell(q, self.num_args - len(a))

def flip(f):
    return Haskell(lambda y,x:f(x,y),2)
ascii_kod=Haskell(ord,1)
kod_ascii=Haskell(chr,1)
add_=Haskell(add,2)
mod_=flip(mod)(127)
map_=Haskell(map,2)


@Haskell
def cezar_kodowanie(text, shift):
    return ''.join(map(kod_ascii ** mod_  ** add_(shift) ** ascii_kod,text))


def main():
    text = "Ala ma kota"
    klucz = 3

    zakodowany = cezar_kodowanie(text, klucz)

    odkodowany = cezar_kodowanie(zakodowany, -klucz)
    print(zakodowany,odkodowany)

if __name__ == "__main__":
    main()