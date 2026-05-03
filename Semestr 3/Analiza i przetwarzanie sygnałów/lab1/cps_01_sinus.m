% cps_01_sinus.m
clear all; close all;

fpr=1000; Nx=1000;              % parametry: czestotliwosc probkowania, liczba probek
dt = 1/fpr;                     % okres probkowania
n = 0 : Nx-1;                   % numery probek
t = dt*n;                       % chwile probkowania

A1 = 0.5;    f1=10;     p1=pi/4;   % sinusoida: amplituda, czestotliwosc, faza
f1_2 = 7.0;  % zmieniona wartość jednego parametru

A2 = 1.0;    f2 = 15;    p2 = pi/3;
A3 = 1.5;    f3 = 3;    p3 = pi/2;
x1 = A1*sin(2*pi*f1*t+p1);    % pierwszy skladnik sygnalu
x1_2 = A1*sin(2*pi*f1_2*t+p1); % pierwszy składnik sygnału ze zmienioną częstotliwością

% x1 = A1*sin(2*pi*f1/fpr*n+p1);  % pierwszy składnik inaczej zapisany
x2 = A2*sin(2*pi*f2*t+p2);       % drugi skladnik
x3 = A3*sin(2*pi*f3*t+p3);       % trzeci skladnik
x = x1 + x2 + x3;                % wybor skladowych: x = x1, x1 + 0.123*x2 + 0.456*x3

%Zmienione wartości, dwa sygnały na jednym rysunku
plot(t,x1,'o-'); grid; title('Sygnal x1(t) - dwa sygnały'); xlabel('Czas [s]'); ylabel('Amplituda');
hold on 
plot(t,x1_2,'r-'); grid; legend("częstotliwość f -> 10", "częstotliwość f -> 7");
hold off; pause;

% Trzy sinusoidy z różnymi parametrami
plot(t,x1,'o-'); grid; title('Sygnal x1(t)'); xlabel('Czas [s]'); ylabel('Amplituda');
pause;

plot(t,x2,'b-'); grid; title('Sygnal x2(t)'); xlabel('Czas [s]'); ylabel('Amplituda');
pause;

plot(t,x3,'g-'); grid; title('Sygnal x3(t)'); xlabel('Czas [s]'); ylabel('Amplituda');
pause;

% Zsumowanie parametrów, oraz zaprezentowanie wyniku
plot(t,x,'o-'); grid; title('Sygnal x(t) - suma parametrów x1,x2,x3'); xlabel('Czas [s]'); ylabel('Amplituda');
x % zaprezentowanie wyniku
pause;

% Większa częstotliwość, wygenerowanie sumy trzech sinusoid
fpr = 8000; Nx = 3 * fpr;

A1 = 5.0;   f1 = 2137;     p1 = pi/4;   % sinusoida: amplituda, czestotliwosc, faza
A2 = 5.0;   f2 = 3218;     p2 = pi/4;
A3 = 5.0;   f3 = 1997;     p3 = pi/4;

x1 = A1*sin(2*pi*f1*t+p1);       % pierwszy skladnik sygnalu
x2 = A2*sin(2*pi*f2*t+p2);       % drugi skladnik
x3 = A3*sin(2*pi*f3*t+p3);       % trzeci skladnik
x = x1 + x2 + x3;                % suma trzech składników

plot(t,x,'o-'); grid; title('Sygnal x(t) - nowe f oraz suma, dźwięk'); xlabel('Czas [s]'); ylabel('Amplituda');
sound(x, fpr)
pause;




 