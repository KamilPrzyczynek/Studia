% cps10_resample_combined.m - K-krotne nad-próbkowanie i L-krotne pod-próbkowanie

clear all;
close all;

% K-krotne nad-próbkowanie (interpolacja)
K = 3; % K - rząd nad-próbkowania
M = 50; 
N = 2 * M + 1; 
Nx = 1000; % liczba próbek sygnału

% Wczytaj plik audio
[x, fs] = audioread('ridethedisk.wav');

% Zastosuj filtrowanie polifazowe
xz = zeros(1, K * length(x));
xz(1:K:end) = x;
h = K * fir1(N-1, 1/K, kaiser(N, 12)); % projekt filtra interpolującego
yi = filter(h, 1, xz);

% L-krotne pod-próbkowanie (decymacja)
L = 2; % L - rząd pod-próbkowania

% Filtr decymacyjny
g = fir1(N-1, 1/L - 0.1 * (1/L), kaiser(N, 12)); 

% Wczytaj plik audio ponownie, aby zachować oryginalną długość
[x, fs] = audioread('ridethedisk.wav');

% Zastosuj filtrowanie polifazowe
x_padded = [x, zeros(1, L - mod(length(x), L))];

ydpp = zeros(1, length(x) / L);

for k = 1:L
    ydpp = ydpp + filter(g(k:L:end), 1, x_padded(L-k+1:L:end));
end

% Ręczne podpróbkowanie
yd_manual = x(1:L:end);

% Porównaj wyniki uzyskane za pomocą jednego i dwóch filtrów
figure;
subplot(3, 1, 1);
plot(yi);
title('Wynik K-krotnego nad-próbkowania');

subplot(3, 1, 2);
plot(ydpp);
title('Wynik L-krotnego pod-próbkowania');

subplot(3, 1, 3);
plot(yd_manual);
title('Wynik ręcznego pod-próbkowania');

% Odsłuchaj sygnały
sound(x, fs);
pause(2); % Pauza dla odsłuchania sygnału przed zmianą
sound(yd_manual, fs / L);
pause(2); % Pauza dla odsłuchania sygnału po zmianie
sound(x, fs / L);
