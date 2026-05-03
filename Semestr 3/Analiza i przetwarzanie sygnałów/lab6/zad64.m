clear all; close all;

fpr = 8000; % czestotliwosc probkowania (Hz)
T = 3; % czas trwania sygnalu w sekundach
N = round(T*fpr); % liczba probek
dt = 1/fpr; t = dt*(0:N-1); % os czasu
n = 1:1000; % indeksy probkek sygnalu dla rysunkow

% Sygnał sinusoidalny
sinus_freq = 2000;
x_sin = sin(2*pi*sinus_freq*t);

% Inicjalizacja zmiennych do dodawania szumu
std_dev_values = [0.01, 0.1, 0.5, 1.0];

% Rysunek "x(t) with Noise"
figure;
subplot_count = length(std_dev_values) + 1; % +1 dla PSD Welcha

for i = 1:length(std_dev_values)
    std_dev = std_dev_values(i);
    noise = std_dev * randn(1, N); % generowanie szumu
    x = x_sin + noise;

    subplot(subplot_count, 1, i);
    plot(t(n), x(n), 'b-');
    xlabel('t [s]');
    title(['x(t) with Noise (Std Dev = ', num2str(std_dev), ')']);
    grid;
end

% Widmo FFT oraz PSD Welcha
for i = 1:length(std_dev_values)
    std_dev = std_dev_values(i);
    noise = std_dev * randn(1, N); % generowanie szumu
    x = x_sin + noise;

    % Widmo FFT
    subplot(subplot_count, 1, i + 1);
    Mwind = 256; Mstep = 16; Mfft = 2*Mwind; Many = floor((N-Mwind)/Mstep)+1;
    t = (Mwind/2+1/2)*dt + Mstep*dt*(0:Many-1); % czas
    f = fpr/Mfft*(0:Mfft-1); % czestotliwosc
    w = hamming(Mwind)'; % wybor okna
    X1 = zeros(Mfft, Many); X2 = zeros(1, Mfft);

    for m = 1:Many
        bx = x(1+(m-1)*Mstep : Mwind+(m-1)*Mstep);
        bx = bx .* w;
        X = fft(bx, Mfft)/sum(w);
        X1(1:Mfft, m) = X;
        X2 = X2 + abs(X).^2;
    end

    X1 = 20*log10(abs(X1));
    X2 = (1/Many)*X2/fpr;

    % Wyświetlanie widma mocy sygnału
    imagesc(t, f, X1);
    c = colorbar; c.Label.String = 'V (dB)'; ax = gca; ax.YDir = 'normal';
    xlabel('t (s)'); ylabel('f (Hz)');
    title(['STFT |X(t,f)| with Noise (Std Dev = ', num2str(std_dev), ')']);
end

% Wykres "PSD Welcha"
subplot(subplot_count, 1, subplot_count);
semilogy(f, X2); grid; title('PSD Welcha');
xlabel('f [Hz]'); ylabel('V^2 / Hz');
