% Listing 8.5 - program cps_08_iir_intro.m
clear all; close all;

% Parametry
N = 8;       % liczba biegunów transmitanci prototypu analogowego
fpr = 48000; % częstotliwość próbkowania
f0 = 100;    % dla filtrow LowPass oraz HighPass
f1 = 10;
f2 = 100;    % dla filtrow BandPass oraz BandStop
Rp = 3;      % dozwolony poziom oscylacji w paśmie przepustowym (w dB)
Rs = 100;    % dozwolony poziom oscylacji w paśmie zaporowym (w dB)

% Projekt analogowego filtra prototypowego - dolnoprzepustowy z w0 = 1
[z, p, wzm] = buttap(N);

b = wzm * poly(z); % [z, wzm] --> b
a = poly(p);       % p --> a

% Transformacja czestotliwosci: znormalizowany (w0=1) LowPass --> LowPass, HighPass, BandPass, BandStop
[b_lp2lp, a_lp2lp] = lp2lp(b, a, 2 * pi * f0);
[b_lp2hp, a_lp2hp] = lp2hp(b, a, 2 * pi * f0);
[b_lp2bp, a_lp2bp] = lp2bp(b, a, 2 * pi * sqrt(f1 * f2), 2 * pi * (f2 - f1));
[b_lp2bs, a_lp2bs] = lp2bs(b, a, 2 * pi * sqrt(f1 * f2), 2 * pi * (f2 - f1));

% Rysuj zera i bieguny po transformacji
figure;
subplot(2, 2, 1);
[z_lp2lp, p_lp2lp, ~] = bilinearMY(z, p, wzm, fpr);
plot(real(z_lp2lp), imag(z_lp2lp), 'bo', real(p_lp2lp), imag(p_lp2lp), 'r*');
grid;
title('Zera (o) i Bieguny (*) LP na LP');
xlabel('Real()');
ylabel('Imag()');


subplot(2, 2, 2);
[z_lp2hp, p_lp2hp, ~] = bilinearMY(z, p, wzm, fpr);
plot(real(z_lp2hp), imag(z_lp2hp), 'bo', real(p_lp2hp), imag(p_lp2hp), 'r*');
grid;
title('Zera (o) i Bieguny (*) LP na HP');
xlabel('Real()');
ylabel('Imag()');

subplot(2, 2, 3);
[z_lp2bp, p_lp2bp, ~] = bilinearMY(z, p, wzm, fpr);
plot(real(z_lp2bp), imag(z_lp2bp), 'bo', real(p_lp2bp), imag(p_lp2bp), 'r*');
grid;
title('Zera (o) i Bieguny (*) LP na BP');
xlabel('Real()');
ylabel('Imag()');

subplot(2, 2, 4);
[z_lp2bs, p_lp2bs, ~] = bilinearMY(z, p, wzm, fpr);
plot(real(z_lp2bs), imag(z_lp2bs), 'bo', real(p_lp2bs), imag(p_lp2bs), 'r*');
grid;
title('Zera (o) i Bieguny (*) LP na BS');
xlabel('Real()');
ylabel('Imag()');
pause;

% Sygnał wejściowy x(n) - dwie sinusoidy: 20 and 500 Hz
Nx = 1000; % liczba probek sygnalu
dt = 1 / fpr;
t = dt * (0:Nx - 1);

x = sin(2 * pi * 20 * t + pi / 3) + sin(2 * pi * 500 * t + pi / 7);

% Rekursywna filtracja cyfrowa IIR: x(n) --> [ b, a ] --> y(n)
M = length(b); % liczba wspolczynnikow {b}
N = length(a);
a = a(2:N);
N = N - 1;

bx = zeros(1, M);
by = zeros(1, N);

for n = 1:Nx % PETLA GLOWNA
    bx = [x(n) bx(1:M - 1)];
    y(n) = sum(bx .* b) - sum(by .* a);
    by = [y(n) by(1:N - 1)];
end

% RYSUNKI: porownanie wejscia i wyjscia filtra
figure;
subplot(211);
plot(t, x);
grid;
title('Sygnal wejsciowy x(n)');

subplot(212);
plot(t, y);
grid;
title('Sygnal wyjsciowy y(n)');
pause;

% Widma FFT drugiej połowy sygnałów x(n) i y(n) (bez stanów przejściowych)
k = Nx / 2 + 1:Nx;
f0 = fpr / (Nx / 2);
f = f0 * (0:Nx / 2 - 1);

figure;
subplot(211);
plot(f, 20 * log10(abs(2 * fft(x(k))) / (Nx / 2)));
grid;
title('Widmo FFT sygnalu wejsciowego x(n)');

subplot(212);
plot(f, 20 * log10(abs(2 * fft(y(k))) / (Nx / 2)));
grid;
title('Widmo FFT sygnalu wyjsciowego y(n)');
pause;

% Rysuj zera i bieguny po transformacji
figure;
subplot(2, 2, 1);
[z_lp2lp, p_lp2lp, ~] = bilinearMY(z, p, wzm, fpr);
plot(real(z_lp2lp), imag(z_lp2lp), 'bo', real(p_lp2lp), imag(p_lp2lp), 'r*');
grid;
title('Zera (o) i Bieguny (*) LP na LP');
xlabel('Real()');
ylabel('Imag()');

% okrag z elipsa
hold on;
center = [0 0];
radius = 1;
eccentricity = 0.7;  % reguluje kształt elipsy
theta = linspace(0, 2*pi, 100);
x_ellipse = center(1) + radius * cos(theta);
y_ellipse = center(2) + eccentricity * radius * sin(theta);
plot(x_ellipse, y_ellipse, 'k--');  % rysowanie elipsy
hold off;