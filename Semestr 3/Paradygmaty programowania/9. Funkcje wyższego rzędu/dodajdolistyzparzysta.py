#do sprawdzenia
#Funkcja nie robi tego co w poleceniu - listy bez parzystych miału być usuwane, a u Pana są do nich dokładane te dodatkowe liczby (tyle, że nie na początek tyko na koniec)
#return list(filter(None, map(przeksztalcona_lista, lista_list))) --- Filter(None, ... nic nie robi
#def przeksztalcona_lista(lista): -- ta funkcja w sumie jest zbędna (nie mówiąc o tym, że nie robi tego co w instrukcji)
def przeksztalc(liczba, lista_list):
    parzysta = lambda lst: any(x % 2 == 0 for x in lst)
    filtr = filter(parzysta, lista_list)
    modf = map(lambda lista: [liczba] + lista, filtr)
    return list(modf)
    
def main():
    liczba = 10
    lista_list = [[1, 3, 5], [2, 4, 6], [7, 9, 11], [8, 10, 12]]
    wynik = przeksztalc(liczba, lista_list)
    print(wynik)

if __name__ == "__main__":
    main()
