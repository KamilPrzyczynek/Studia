% Parametry filtru
fpr = 48000;        % Częstotliwość próbkowania
fc = 2000;          % Częstotliwość odcięcia

% Projekt filtru Butterwortha
n = 10;              % Rząd filtra
[b, a] = butter(n, fc / (fpr / 2), 'low');

% Zapisz współczynniki do pliku
filename = 'wspolczynniki_filtru.txt';
dlmwrite(filename, b, 'precision', 10, 'delimiter', '\t');
dlmwrite(filename, a, 'precision', 10, 'delimiter', '\t', '-append');

% Wizualizacja charakterystyki filtra
figure;
freqz(b, a, 1024, fpr);
title('Charakterystyka częstotliwościowa Dolnoprzepustowy  D');
xlabel('Częstotliwość [Hz]');
ylabel('Amplituda [dB]');

wykres_filename = 'charakterystyka_filtra.png';
saveas(gcf, wykres_filename);


pause(1200);

clear all;