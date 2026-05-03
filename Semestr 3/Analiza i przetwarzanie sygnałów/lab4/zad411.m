clear all; close all;

% Wczytanie dźwięków
[sig1, fs1] = audioread('bellbird.wav');
[sig2, fs2] = audioread('bellphone.wav');
% Dźwięk do analizy
x = sig1'; % Możesz zmienić x na sig2 lub sig3, aby analizować inne dźwięki

% Parametry sygnału
N = length(x); % liczba próbek sygnału
fpr = fs1; % częstotliwość próbkowania
t = (0:N-1) / fpr; % oś czasu w sekundach

% Okno prostokątne
w = ones(1, N)';

% Zastosowanie okna do sygnału
x = x .* w;

% DFT
f0 = fpr/N; f1 = f0*(0:N-1);
M = min(5000, N); % Select a subset of the signal
X1 = fft(x(1:M))/N;

% DFT
f0 = fpr/N; f1 = f0 * (0:M-1);
X1 = fft(x(1:M))/N;

% DtFT
df = 1; % krok w częstotliwości dla DtFT
fmax = fpr/2; % maksymalna częstotliwość dla DtFT
f2 = -fmax : df : fmax;
X2 = zeros(size(f2));

for k = 1:length(f2)
    X2(k) = sum(x(1:M) .* exp(-1j * 2 * pi * (f2(k) / fpr) * (0:M-1))) / N;
end

% Widmo amplitudowe w skali liniowej
figure;
subplot(2,2,1);
plot(t(1:M), x(1:M));
title('Sygnał czasowy');
xlabel('Czas [s]');
ylabel('Amplituda');

% ...

subplot(2,2,3);
plot(f2, abs(X2), 'b-', 'LineWidth', 1);
title('Widmo DtFT');
xlabel('Częstotliwość [Hz]');
ylabel('Amplituda');

% Nakładanie widm DFT i DtFT
subplot(2,2,4);
plot(f1, abs(X1), 'ro-', 'LineWidth', 1);
hold on;
plot(f2, abs(X2), 'b-', 'LineWidth', 1);
hold off;
title('Nakładanie widm');
xlabel('Częstotliwość [Hz]');
ylabel('Amplituda');
legend('DFT', 'DtFT');

% Widmo amplitudowe w skali liniowej
figure;
subplot(2,2,1);
plot(t(1:M), x(1:M)); % Change t to t(1:M)
title('Sygnał czasowy');
xlabel('Czas [s]');
ylabel('Amplituda');

subplot(2,2,2);
plot(f1, abs(X1), 'ro-', 'LineWidth', 1);
title('Widmo DFT');
xlabel('Częstotliwość [Hz]');
ylabel('Amplituda');