% cps_04_dtft.m
clear all; close all;

% Wczytanie pierwszego dźwięku
[sig1, fs1] = audioread('bellbird.wav');

% Zamiana na drugi dźwięk
[sig2, fs2] = audioread('bellphone.wav');

% Dźwięk do analizy
x = sig1(1:100)'; %AKtualny analizowany dżwiek /sig1 sig2
%Biorę 100 próbek sygnału
x2 = sig2'; % Drugi dźwięk
% Parametry sygnału

N = length(x); % liczba próbek sygnału
fpr = fs1 % częstotliwość próbkowania fs2 ddrugi dzwiek / fs1
fpr2=fs2;% 2 dzwiek
t = (0:99) ./ fpr; % oś czasu w sekundach
t2=(0:99)
% Okno prostokątne
w1 = boxcar(N)'; % okno prostokątne
w2 = hanning(N)'; % okno Hanninga
w3 = chebwin(N, 140)'; % okno Czebyszewa, 80, 100, 120, 140
w = w3; % w1 --> w2, w3 (80, 100, 120, 140)

% Sygnał
x1 = cos(2*pi*100*t); % pierwsza skladowa
x2 = 0.001*cos(2*pi*250*t); % druga: 250Hz, 0.001 amplitude
x = x1 + x2; % wybór: x1, x1+x2, 20*log10(0.00001)=-100 dB
x22=x2.*w;
% Rysunek analizowanego sygnału
stem(x);
title('x(n)');

% Rysunek okna
figure;
stem(w);
title('w(n)');

% "Zokienkowany" sygnał
x = x .* w;

% DFT - czerwone kolka
f0 = fpr/N;
f1 = f0 * (0:N-1); % krok df w DF = f0 = 1/(N*dt)

X1 = zeros(1, N);

for k = 1:N
    X1(k) = sum(x .* exp(-j*2*pi/N*(k-1)*(0:N-1))) / N;
end

% DtFT - niebieska linia
df = 10; % krok w częstotliwości dla DtFT
fmax = 2.5*fpr; % max zakres czestotliwosci w DtFT: 2.5 --> 0.5

f2 = -fmax : df : fmax; % zakres czestotliwosci: od-krok-do, df=10-->1 first this freq. range
X2 = zeros(1, length(f2));

for k = 1:length(f2)
    X2(k) = sum(x .* exp(-j*2*pi*(f2(k)/fpr)*(0:N-1))) / N;
end

% Poprawne skalowanie dla dowolnego okna
X1 = N*X1/sum(w);

% Poprawne skalowanie dla dowolnego okna
X2 = N*X2/sum(w);

% Figures
figure;
plot(f1, abs(X1), 'ro', f2, abs(X2), 'b-');
xlabel('f (Hz)');
grid;
title('Amplituda w skali liniowej');

figure;
plot(f1, 20*log10(abs(X1)), 'ro', f2, 20*log10(abs(X2)), 'b-');
xlabel('f (Hz)');
grid;
title('Amplituda w skali decybelowej'); 

% Sprawdzenie próbkowania i długości dźwięków
disp(['Próbkowanie dźwięku 1: ', num2str(fs1), ' Hz']);
disp(['Długość dźwięku 1: ', num2str(length(sig1) / fs1), ' sekundy']);

disp(['Próbkowanie dźwięku 2: ', num2str(fs2), ' Hz']);
disp(['Długość dźwięku 2: ', num2str(length(sig2) / fs2), ' sekundy']);

if length(sig1) == length(sig2)
    disp('Wszystkie dźwięki mają tę samą długość.');
else
    disp('Dźwięki mają różne długości.');
end

% FFT dla każdego z dźwięków  właściwości symetrii funkcji
% sinusoidalnych,rekurencyjnie,O(N logN)
fft_sig1 = fft(sig1);
fft_sig2 = fft(sig2);

% Skalowanie osi częstotliwości
frequencies1 = (0:length(sig1)-1) * fs1 / length(sig1);
frequencies2 = (0:length(sig2)-1) * fs2 / length(sig2);

% Rysowanie porównawczych widm
figure;
subplot(2,1,1);
plot(frequencies1, abs(fft_sig1));
title('Widmo dźwięku 1');
xlabel('Częstotliwość [Hz]');
ylabel('Amplituda');
legend('Dźwięk 1');

subplot(2,1,2);
plot(frequencies2, abs(fft_sig2));
title('Widmo dźwięku 2');
xlabel('Częstotliwość [Hz]');
ylabel('Amplituda');
legend('Dźwięk 2');
