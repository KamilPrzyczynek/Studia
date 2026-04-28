#do sprawdzenia po poprawie 
from operator import mul

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

def curry(f):
    return lambda a: lambda b: f(a, b)

def power(n, x):
    return x ** n

power = Haskell(power)

sum_ = Haskell(sum,1)
length_squared = power(2) ** sum_
map_=Haskell(map,2)
length = power(0.5)**sum_**map_(power(2))
mul_=Haskell(mul,2)
length_lambda = Haskell(lambda x: power(0.5, sum(x)))

def normalize_vector(vector):
    length_value = length(vector)
    multiply_by_length = Haskell(mul, 2) (1 / length_value)
    return list(map(multiply_by_length, vector))

def main():
    vector = [1, 2, 3, 4, 5]

    normalized_vector = normalize_vector(vector)
    print(normalized_vector)

    length_squared_value = length_squared(vector)
    print(length_squared_value)
    length_value = length(vector)
    print(length_value)

    length_lambda_value = length_lambda(vector)
    print(length_lambda_value)

if __name__ == "__main__":
    main()
