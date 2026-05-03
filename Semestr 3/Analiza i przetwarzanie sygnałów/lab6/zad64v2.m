% Parametry sygnału
Fs = 1000; % Częstotliwość próbkowania
f = 10; % Częstotliwość sygnału sinusoidalnego
t = 0:1/Fs:1-1/Fs; % Wektor czasu

% Generowanie sygnału sinusoidalnego
x = sin(2*pi*f*t);

% Dodawanie szumu o różnym odchyleniu standardowym
std_dev_values = [0.1:0.1:2]; % Tablica różnych odchyleń standardowych
num_std_dev = numel(std_dev_values);

% Obliczanie i wyświetlanie widma mocy dla różnych odchyleń standardowych
figure;
for i = 1:num_std_dev
    noise = std_dev_values(i) * randn(size(t)); % Generowanie szumu o danym odchyleniu standardowym
    x_noisy = x + noise; % Dodanie szumu do sygnału
    X = fft(x_noisy); % Obliczenie FFT
    Pxx = abs(X).^2 / (Fs*numel(t)); % Obliczenie widma mocy
    f_axis = Fs*(0:(numel(t)/2))/numel(t); % Oś częstotliwości

    % Wyskalowanie widma w częstotliwości i mocy
    subplot(num_std_dev, 1, i);
    plot(f_axis, 10*log10(Pxx(1:numel(f_axis))));
    title(['Odchylenie standardowe szumu: ', num2str(std_dev_values(i))]);
    xlabel('Częstotliwość (Hz)');
    ylabel('Moc (dB/Hz)');
end

% Zwiększenie długości sygnału i obliczenie widma dla poszczególnych fragmentów
new_length = 10*numel(t); % Nowa długość sygnału
x_long = sin(2*pi*f*(0:1/Fs:(new_length-1)/Fs)); % Nowy, dłuższy sygnał sinusoidalny
num_segments = 10; % Liczba segmentów
segment_length = new_length / num_segments; % Długość segmentu

% Inicjalizacja macierzy do przechowywania widm poszczególnych fragmentów
segment_power = zeros(num_segments, numel(t)/2+1);

% Obliczanie widma dla poszczególnych fragmentów
for i = 1:num_segments
    segment_start = (i-1)*segment_length + 1;
    segment_end = i*segment_length;
    segment = x_long(segment_start:segment_end);
    X_segment = fft(segment);
    Pxx_segment = abs(X_segment).^2 / (Fs*segment_length);
    segment_power(i, :) = Pxx_segment(1:numel(t)/2+1);
end

% Wyświetlenie usrednionego widma
mean_power = mean(segment_power, 1);
figure;
plot(f_axis, 10*log10(mean_power));
title('Usrednione widmo mocy');
xlabel('Częstotliwość (Hz)');
ylabel('Moc (dB/Hz)');