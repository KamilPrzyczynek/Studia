#skończone

from functools import partial

def power(n, x):
    return x ** n

sq = lambda x: power(2, x)
cube = lambda x: power(3, x)
sqrt = lambda x: power(0.5, x)

sq2 = partial(power, 2)
cube2 = partial(power, 3)
sqrt2 = partial(power, 0.5)

def make_power(n):
    return lambda x: power(n, x)

sq3 = make_power(2)
cube3 = make_power(3)
sqrt3 = make_power(0.5)

def main():
    x = 25
    print(sq(x), cube(x), sqrt(x))
    print(sq2(x), cube2(x), sqrt2(x))
    print(sq3(x), cube3(x), sqrt3(x))


if __name__ == "__main__":
    main()
