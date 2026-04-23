% Zadanie 3
v = 20;
alfa = 0.05;
wartosc_krytyczna = chi2inv(1 - alfa, v)

% Zadanie 4
obwod = [205, 212, 213, 216, 217, 218, 219, 221, 226, 207, 222, 212, 211];
masa = [641, 620, 633, 651, 640, 666, 650, 688, 680, 670, 630, 665, 661];

srednia_obwod = mean(obwod)
odchylenie_obwod = std(obwod)
srednia_masa = mean(masa)
odchylenie_masa = std(masa)

[r, p] = corrcoef(obwod, masa)

% Zadanie 5
n = 100;
s = 2;
poziom_ufnosci = 0.99;
blad_dopuszczalny = 0.1;

alfa_ufnosc = 1 - poziom_ufnosci;
z = norminv(1 - alfa_ufnosc/2);

n_wymagane = (z * s / blad_dopuszczalny)^2

czy_wystarczajaca = n >= n_wymagane