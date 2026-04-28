#sprawdzone na zajęciach
def suma_reurencyjna(seq):
    if not seq:
        return 0
    else:
        return seq[0] + suma_reurencyjna((seq[1:]))


def suma_ogonowa(seq, acc=0):
    if not seq:
        return acc
    else:
        head, *tail = seq
        return suma_ogonowa(tail, acc + head)
def main():
    sqe1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    sqe2 = []
    wynik1 = suma_reurencyjna(sqe1)
    wynik2 = suma_reurencyjna(sqe2)

    wynik3 = suma_ogonowa(sqe1)
    wynik4 = suma_ogonowa(sqe2)

    print(f"{sqe1} : {wynik1}  {sqe2} : {wynik2}")
    print(f"{sqe1} : {wynik3}  {sqe2} : {wynik4}")

if __name__ == "__main__":
    main()
