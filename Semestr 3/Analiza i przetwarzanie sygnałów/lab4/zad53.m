clear all; close all;

N = 100;
x = rand(1, N);

% Pierwszy etap podziału próbek
xe = x(1:2:N);
xo = x(2:2:N);

% Drugi etap podziału próbek parzystych i nieparzystych
xee = xe(1:2:end);
xeo = xe(2:2:end);
xoe = xo(1:2:end);
xoo = xo(2:2:end);

% Obliczanie widm DFT dla poszczególnych sygnałów
Xee = fft(xee);
Xeo = fft(xeo);
Xoe = fft(xoe);
Xoo = fft(xoo);

% Rekonstrukcja całego widma DFT dzielona na kawałki
Xe = [Xee, Xee] + exp(-1i * 2 * pi / (N /2)* (0:N/2-1)) .* [Xeo, Xeo];
Xo = [Xoe, Xoe] + exp(-1i * 2 * pi / (N /2)* (0:N/2-1)) .* [Xoo, Xoo];
%Składanie widma z tych kawałków
Xzlozone = [Xe, Xe] + exp(-1i * 2 * pi / (N)* (0:N-1)) .* [Xo, Xo];

% Obliczenie błędu
Xm = fft(x);
error_FINAL = max(abs(Xm - Xzlozone)) % biore czesc xm

