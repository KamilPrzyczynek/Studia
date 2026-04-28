from functools import reduce

def usun(lst):
    return reduce(lambda acc, x: acc + [x] if not acc or acc[-1] != x else acc, lst, [])
def main():
    lista = [1, 1, 2, 2, 2, 2, 3, 3, 1]
    result_list = usun(lista)
    print(result_list)
if __name__ == "__main__":
    main()