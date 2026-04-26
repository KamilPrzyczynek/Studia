% optim_analyticgrad1.m
clear all; close all;

% Bungee jump
% z(t) - funkcja wysokosci
% z1p(t), z2p(t) - jej pierwsza i druga pochodna
z0 = 100; m = 80; c = 15; v0 = 55; g = 9.81;
z = @(t) ( z0 + m/c * (v0+(m*g)/c) * (1-exp(-(c/m)*t)) - ((m*g)/c)*t );
z1p = @(t) ( v0*exp(-(c/m)*t)-((m*g)/c)*(1-exp(-(c/m)*t)) );
z2p = @(t) ( (-(c/m)*v0-g)*exp(-(c/m)*t) );
t0 = (m/c)*log(1+(c*v0)/(m*g));

% Znajdz sam maksimum funkcji z(t) ...
t = t0; % punkt startowy
tol = 1e-8; % tolerancja
maxiter = 1000; % maksymalna liczba iteracji
for k = 1:maxiter
    z1pk = z1p(t);
    z2pk = z2p(t);
    tnew = t - z1pk/z2pk; % metoda Newtona
    if abs(tnew - t) < tol % warunek stopu
        break;
    end
    t = tnew;
end
if k == maxiter % nie znaleziono rozwiazania
    disp('Nie znaleziono rozwiazania.');
else % znaleziono rozwiazanie
    disp(['Czas osiagniecia maksymalnej wysokosci: ' num2str(t) ' s']);
end

% Wykres z(t)
tvec = linspace(0, 20, 1000); % wektor czasow
zvec = z(tvec); % wektor wysokosci
figure;
plot(tvec, zvec); % wykres z(t)
hold on;
plot(t, z(t), 'ro'); % punkt maksimum
plot([t t], [0 z(t)], 'r--'); % linia wskazujaca maksimum
xlabel('Czas [s]');
ylabel('Wysokosc [m]');
title('Bungee jump');
grid on;
