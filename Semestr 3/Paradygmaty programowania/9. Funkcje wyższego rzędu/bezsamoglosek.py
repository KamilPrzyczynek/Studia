#sprawdzone na zajeciach
def delsamoglo(listanapi):
    def czytrue(char):
        return char.lower() not in  {'a','ą','ę','y','ó', 'e', 'i', 'o', 'u'}

    def usunsam(napis):
        return ''.join(filter(czytrue, napis))

    return list(map(usunsam, listanapi))


def main():
    napis = ['Python', 'Java', 'C++']
    wynik = delsamoglo(napis)
    print(wynik)


if __name__ == "__main__":
    main()
