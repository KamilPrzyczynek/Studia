from functools import partial
#poprawione
#multiplbylength = partial(lambda x, y: power(-1, x) * y, length)

#jak robimy lambdę to można ją od razu tak zrobić, żeby nie trzeba było używać partial (czyli:

#multiplbylength = lambda y: power(-1, lenght) * y

#Natomiast należało użyć operatora * (czyli funkcji mul) zaaplikowanej 1/lenght

from operator import mul

def power(n, x):
    return x ** n

def curry(f):
    return lambda a: lambda b: f(a, b)

def length_squared(vector):
    power_curried = curry(power)
    squares = map(power_curried(2), vector)
    return sum(squares)

def vector_length(vector):
    return length_squared(vector) ** 0.5

def normalize_vector(vector):
    length = vector_length(vector)
    multiplbylength = partial(mul, 1 / length)
    return list(map(multiplbylength, vector))

def main():
    vector = [1, 2, 3, 4, 5]
    normalized_vector = normalize_vector(vector)
    normalized_vector_length = vector_length(normalized_vector)
    print(normalized_vector, normalized_vector_length)

if __name__ == "__main__":
    main()
