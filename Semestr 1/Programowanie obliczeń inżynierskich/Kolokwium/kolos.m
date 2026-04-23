% zadanie 2 - Tablice - obliczamy odleglosc wektorow
clc, clear all

N = input('Podaj rozmiar wektora: ');
x = zeros(1, N);
y = zeros(1, N);

for i = 1 : N
    x(i) = input('Podaj element wektora x: ');
    y(i) = input('Podaj element wektora y: ');
end

odleglosc = norma(x - y);

disp(x);
disp(y);
disp(odleglosc);

% zadanie 3 - Wykres funkcji y=ctg(x), dla x (0, 2*pi)
clc, clear all

x1 = 0 + 0.01 : 0.01 : pi - 0.01;
x2 = pi + 0.01 : 0.01 : 2 * pi - 0.01;

y1 = cot(x1);
y2 = cot(x2);

plot(x1, y1, x2, y2);
grid on;