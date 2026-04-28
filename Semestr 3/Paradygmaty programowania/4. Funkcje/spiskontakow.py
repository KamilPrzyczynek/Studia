kontakty = {('Jan', 'Kowalski'):"123456789", ('Adam', 'Nowak'):"987654321" , ('Adam', 'Kowalski'): "600300900"}
print(kontakty[('Adam','Nowak')])

for imie,nazwisko in kontakty:
    if nazwisko=='Kowalski':
        print(kontakty[(imie,nazwisko)])
#skończone