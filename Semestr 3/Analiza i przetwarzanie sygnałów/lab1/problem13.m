clear all; close all;

% Parametry sygnału sinusoidalnego
N = 10000;
fs = 1000;
t = (0:N-1) / fs;
f = 5; % Częstotliwość sygnału sinusoidalnego (Hz)
A = 1; % Amplituda sygnału sinusoidalnego

% Generowanie sygnału sinusoidalnego
x = A * sin(2*pi*f*t);

% Generowanie szumu równomiernego [0,1] i dodanie do sygnału
s1 = rand(1, N); % Szum równomierny
x_rownoramieny = x + 0.1 * (2 * (s1 - 0.5));

% Generowanie szumu gaussowskiego i dodanie do sygnału
s2 = randn(1, N); % Szum gaussowski
x_gaussowski = x + 0.1 * s2;

% Wykres sygnału sinusoidalnego z różnymi poziomami szumu
figure;

subplot(311);
plot(t, x, '.-');
grid;
title('Sygnał sinusoidalny (bez szumu)');
xlabel('Czas [s]');
ylabel('Amplituda');

subplot(312);
plot(t, x_rownoramieny, '.-');
grid;
title('Sygnał sinusoidalny z szumem równomiernym');
xlabel('Czas [s]');
ylabel('Amplituda');

subplot(313);
plot(t, x_gaussowski, '.-');
grid;
title('Sygnał sinusoidalny z szumem gaussowskim');
xlabel('Czas [s]');
ylabel('Amplituda');

% Histogram sygnału sinusoidalnego bez szumu i z szumem
figure;

subplot(211);
hist(x, 20);
title('Histogram sygnału sinusoidalnego (bez szumu)');
xlabel('Amplituda');
ylabel('Liczba próbek');

subplot(212);
hist(x_rownoramieny, 20);
title('Histogram sygnału sinusoidalnego (z szumem równomiernym)');
xlabel('Amplituda');
ylabel('Liczba próbek');
