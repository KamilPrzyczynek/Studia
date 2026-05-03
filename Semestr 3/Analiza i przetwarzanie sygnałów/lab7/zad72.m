clear all;
close all;

% filtry do wyboru:
% 1: low-pass, [0-250] Hz
% 2: high-pass, [250-inf] Hz
% 3: band-pass, [400-600] Hz
% 4: band-stop, [0-400] Hz and [600-inf] Hz
filter_option = 1;

% filtr parametry
switch filter_option
    case 1
        fpass = 250;
        fstop = 300;
    case 2
        fpass = 300;
        fstop = 250;
    case 3
        fpass1 = 400;
        fpass2 = 600;
        fstop1 = 300;
        fstop2 = 700;
    case 4
        fpass1 = 300;
        fpass2 = 500;
        fstop1 = 400;
        fstop2 = 600;
end

% filtry z wyboru
if filter_option == 1 || filter_option == 2
    [z, p, b, a] = design_filter_low_high_pass(fpass, fstop);
elseif filter_option == 3 || filter_option == 4
    [z, p, b, a] = design_filter_band(fpass1, fstop1, fpass2, fstop2);
end

% Rysuj zera i bieguny
figure; 
plot(real(z), imag(z), 'bo', real(p), imag(p), 'r*'); 
grid;
title('Zeros (o) and Poles (*)'); 
xlabel('Real()'); 
ylabel('Imag()'); 
pause;

% Weryfikacja odpowiedzi (charakterystyki) filtra: amplitudowej fazowej, impulsowej, skokowej
f = 0 : 0.1 : 1000; % czestotliwosc w hercach
w = 2*pi*f; % czestotliwosc katowa, pulsacja
s = j*w; % zmienna transformacji Laplace’a
H = freqs(b, a, w);% h(s) --> H(f) dla s=j*w: iloraz dwoch wielomianow

% Amplitudowa charakterystyka częstotliwościowa
figure; 
plot(f, 20*log10(abs(H))); 
xlabel('f [Hz]'); 
title('|H(f)| [dB]'); 
grid; 
pause;a

% Fazowa charakterystyka częstotliwościowa
figure; 
plot(f, unwrap(angle(H))); 
xlabel('f [Hz]'); 
title('angle(H(f)) [rad]'); 
grid; 
pause;

% odpowiedz filtra na pobudzenie impulsowe (z Control Toolbox)
figure; 
impulse(b, a); 
pause;

% odpowiedz filtra na pobudzenie skokowe (z Control Toolbox)
figure; 
step(b, a);

% Function designing low/high-pass filter
function [z, p, b, a] = design_filter_low_high_pass(fpass, fstop)
    z = [];
    p = -2 * pi * fstop;
    b = [1];
    a = [1, -2 * pi * fpass];
end

% Function designing band-pass/band-stop filter
function [z, p, b, a] = design_filter_band(fpass1, fstop1, fpass2, fstop2)
    z = [];
    p = [-2 * pi * fstop1, -2 * pi * fstop2];
    b = [1, 0, -1]; % Dodano zerowy współczynnik dla poprawienia charakterystyki
    a = [1, -2 * pi * fpass1, 2 * pi * fpass1 * fpass2];
end

