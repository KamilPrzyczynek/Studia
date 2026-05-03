% Wczytaj plik audio z płyty CD
[x, fs_cd] = audioread('ridethedisk.wav');

% Wyznacz parametry dla DAB
fs_dab = 48000;
up_factor = 160;
down_factor = 147;

% Nad-próbkowanie (ekspander + filtr LP)
x_up = resample(x, up_factor, 1);
lp_filter_up = fir1(100, 1/up_factor);  % Długość filtra
x_up_filtered = filter(lp_filter_up, 1, x_up);

% Pod-próbkowanie (filtr LP + reduktor)
x_dab = resample(x_up_filtered, 1, down_factor);
lp_filter_down = fir1(100, 1/down_factor);  % Długość filtra 
x_dab_filtered = filter(lp_filter_down, 1, x_dab);

% Odsłuchaj sygnały
sound(x, fs_cd);  % Oryginalny sygnał z płyty CD
pause(4);
sound(x_dab_filtered, fs_dab);  % Przepróbkowany sygnał DAB

% Wykresy
figure;

% Amplituda oryginalnego sygnału
subplot(3, 1, 1);
plot((0:length(x)-1)/fs_cd, x);
title('Oryginalny sygnał z płyty CD');
xlabel('Czas (s)');
ylabel('Amplituda');

% Amplituda sygnału po nad-próbkowaniu
subplot(3, 1, 2);
plot((0:length(x_up_filtered)-1)/fs_dab, x_up_filtered);
title('Sygnał po nad-próbkowaniu');
xlabel('Czas (s)');
ylabel('Amplituda');

% Amplituda sygnału po przepróbkowaniu
subplot(3, 1, 3);
plot((0:length(x_dab_filtered)-1)/fs_dab, x_dab_filtered);
title('Sygnał po przepróbkowaniu (DAB)');
xlabel('Czas (s)');
ylabel('Amplituda');

% Dodatkowe informacje
disp(['Częstotliwość próbkowania przed nad-próbkowaniem: ' num2str(fs_cd) ' Hz']);

disp(['Częstotliwość próbkowania po przepróbkowaniu (DAB): ' num2str(fs_dab) ' Hz']);
