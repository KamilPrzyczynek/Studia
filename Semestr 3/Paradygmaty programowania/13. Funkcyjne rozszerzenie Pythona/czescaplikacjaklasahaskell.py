#
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

power = Haskell(power)

sq = power(2)
cube = power(4)
sqrt = power(0.5)


def main():
    x = 25
    print(sq(x), cube(x), sqrt(x))


if __name__ == "__main__":
    main()