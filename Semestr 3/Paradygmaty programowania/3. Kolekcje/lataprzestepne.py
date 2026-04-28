#skończone
startrok = int(input("Podaj rok początkowy: "))
endrok = int(input("Podaj rok kończowy: "))
latazprzedzialu = [year for year in range(startrok, endrok) if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)]
print("Lata przestępne od", startrok, "do", endrok - 1, "to:")
print(latazprzedzialu)
