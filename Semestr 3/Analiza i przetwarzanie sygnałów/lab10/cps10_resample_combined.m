% cps10_resample_combined.m - K-krotne nad-próbkowanie i L-krotne pod-próbkowanie

% K-krotne nad-próbkowanie (interpolacja)
clear all; close all;

% Wejście - parametry i sygnał wejściowy x
K = 3; % K - rząd nad-próbkowania
M = 50; 
N = 2 * M + 1; 
Nx = 1000; % liczba próbek sygnału

x = sin(2 * pi * (0:Nx-1) / 100); % sygnał do nad-próbkowania

% Zastosuj filtrowanie polifazowe tworze macierz xz wstawiam zera miedzy
% kolejnymi próbkami
xz = zeros(1, K * Nx);
xz(1:K:end) = x;

%kaiser wygładzanie widma częstotliwośći 
h = K * fir1(N-1, 1/K, kaiser(N, 12)); % projekt filtra interpolującego 
%, fir używana jest do stworzenia filtrów dolnoprzepustowych, zarówno do nadpróbkowania, jak i podpróbkowania. 
% Tworzy filtr interpolacyjny dla nadpróbkowania o rzędzie N-1, częstotliwości normalizowanej 1/K i oknie Kaiser o współczynniku 12.
yi = filter(h, 1, xz);

% L-krotne pod-próbkowanie (decymacja) 
%x jest przygotowywany do podpróbkowania poprzez dodanie zer na początku, aby zrekompensować opóźnienie wprowadzone przez filtr decymacyjny.
%Tworzony jest filtr decymacyjny (g) za pomocą funkcji fir1, który również jest filtrem dolnoprzepustowym.
L = 2; % L - rząd pod-próbkowania

% Filtr decymacyjny
g = fir1(N-1, 1/L - 0.1 * (1/L), kaiser(N, 12)); 

% Zastosuj filtrowanie polifazowe
x = [zeros(1, L-1), x(1:end-(L-1))];
ydpp = zeros(1, Nx / L);

for k = 1:L
    ydpp = ydpp + filter(g(k:L:end), 1, x(L-k+1:L:end));
    % filtrowania sygnału za pomocą filtru o skończonej odpowiedzi impulsowej (FIR lub IIR). Sy
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
sound(x, 48000);
pause(2); % Pauza dla odsłuchania sygnału przed zmianą
sound(yd_manual, 32000);
pause(2); % Pauza dla odsłuchania sygnału po zmianie
sound(yd_manual,48000);

