% zad10_5.m
clear all; close all;
% Dane
m = 1000; % masa pocisku [kg]
g = 9.81; % przyspieszenie ziemskie [m/s^2]
c = 300; % wspolczynnik oporu powietrza [kg/s]
v0 = 2000; % predkosc poczatkowa [m/s]
% Równanie ruchu
f = @(t) m*log((v0+m*g/c)/(v0+m*g/c-c*t))-g*t/c;
% Ograniczenia czasu
t_min = 0; t_max = 50;
% Wyszukiwanie maksimum
options = optimset('TolX', 1e-6);
[t_max, max_height] = fminbnd(@(t) -f(t), t_min, t_max, options);
% Wyswietlenie wynikow
fprintf('Maksymalna wysokosc: %.2f m\n', -max_height);
fprintf('Czas lotu: %.2f s\n', t_max);



