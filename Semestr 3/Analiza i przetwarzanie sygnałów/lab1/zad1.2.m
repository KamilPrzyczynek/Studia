clear all; close all;
fpr = 1000; Nx = 1000; % Parametry: częstotliwość próbkowania, liczba próbek
dt = 1 / fpr; % Okres próbkowania
n = 0 : Nx - 1; % Numery próbek
t = dt * n; % Chwile próbkowania
A1 = 0.5; f1 = 10; p1 = pi/4; % Sinusoida: amplituda, częstotliwość, faza

% Generowanie trzech sinusoid o różnych częstotliwościach
f2 = fpr + f1;
f3 = 2 * fpr + f1;
x1 = A1 * sin(2 * pi * f1 * t + p1); % Pierwszy składnik sygnału
x2 = A1 * sin(2 * pi * f2 * t + p1); % Drugi składnik
x3 = A1 * sin(2 * pi * f3 * t + p1); % Trzeci składnik

% Rysowanie trzech sinusoid na jednym wykresie
plot(t, x1, 'o-', t, x2, 'o-', t, x3, 'o-');
grid; title('Sygnały x(t)'); xlabel('Czas [s]'); ylabel('Amplituda');
legend('x1', 'x2', 'x3');

% Odsłuchaj x1 za pomocą funkcji sound
sound(x1, fpr);
