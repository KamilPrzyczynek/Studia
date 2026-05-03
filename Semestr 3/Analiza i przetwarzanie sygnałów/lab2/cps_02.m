% cps_02_sygnaly.m
clear all; close all;
fpr=100; Nx=1000; % czestotliwosc probkowania, liczba probek
dt = 1/fpr; % okres probkowania
t = dt*(0:Nx-1); % chwile pobierania probek
x1=sin(2*pi*10*t); % sinus 10 Hz
x2=sin(2*pi*1*t); % sinus 1 Hz
x3=exp(-5*t); % eksponenta opadajaca w czasie
x4=exp(-25*(t-0.5).^2); % gaussoida
x5=sin(2*pi*(0*t+0.5*20*t.^2)); % liniowy przyrost czest. (LFM): od 0 Hz, +20Hz/s
x6=sin(2*pi*(10*t-(9/(2*pi*1)*cos(2*pi*1*t)))); % sinus. FM: 9Hz wokol 10Hz 1x na sec
x7=sin(2*pi*(10*t+9*cumsum(x2)*dt)); % to samo co x6; dlaczego?
x = x1; % wybor: x1,x2,...,x7, 0.23*x1 + x2, x1.*x3, ...
plot(t,x,'o-'); grid; title('Sygnal x(t)'); xlabel('czas [s]'); ylabel('Amplituda');

% Obejrzenie osobno każdego sygnału
figure;
subplot(4, 2, 1);
plot(t, x1);
title('Sygnał x1(t)');
xlabel('czas [s]');
ylabel('Amplituda');

subplot(4, 2, 2);
plot(t, x2);
title('Sygnał x2(t)');
xlabel('czas [s]');
ylabel('Amplituda');

subplot(4, 2, 3);
plot(t, x3);
title('Sygnał x3(t)');
xlabel('czas [s]');
ylabel('Amplituda');

subplot(4, 2, 4);
plot(t, x4);
title('Sygnał x4(t)');
xlabel('czas [s]');
ylabel('Amplituda');

subplot(4, 2, 5);
plot(t, x5);
title('Sygnał x5(t)');
xlabel('czas [s]');
ylabel('Amplituda');

subplot(4, 2, 6);
plot(t, x6);
title('Sygnał x6(t)');
xlabel('czas [s]');
ylabel('Amplituda');

subplot(4, 2, 7);
plot(t, x7);
title('Sygnał x7(t)');
xlabel('czas [s]');
ylabel('Amplituda');

% Suma różnych sygnałów
suma_sygnalow = 0.25 * x1 + 2 + x2;
subplot(4, 2, 8);
plot(t, suma_sygnalow);
title('Suma sygnałów: 0.25*x1 + 2 + x2');
xlabel('czas [s]');
ylabel('Amplituda');

% Iloczyny różnych sygnałów
iloczyn_sygnalow = (1 + 0.5 * x2) .* x1;
figure;
subplot(2, 1, 1);
plot(t, iloczyn_sygnalow);
title('Iloczyn sygnałów: (1 + 0.5 * x2) * x1');
xlabel('czas [s]');
ylabel('Amplituda');

% Ostatnie dwie sinusoidy z modulacją w amplitudzie (AM) i częstotliwości (FM)
amplituda_AM = 1 + 0.5 * x2;
czestotliwosc_FM = 10 + 9 * cumsum(x2) * dt;

subplot(2, 1, 2);
plot(t, amplituda_AM);
hold on;
plot(t, czestotliwosc_FM);
hold off;
title('Modulacja AM i FM');
xlabel('czas [s]');
ylabel('Amplituda / Częstotliwość');

legend('Amplituda (AM)', 'Częstotliwość (FM)');