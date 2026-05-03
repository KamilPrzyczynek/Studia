% cps_07_analog_transform.m
clear all; close all;
%5.0 ocena
% Wymagania
N = 8; % liczba biegunow transmitanci prototypu analogowego
f0 = 100; % dla filtrow LowPass oraz HighPass
f1 = 10; f2=100; % dla filtrow BandPass oraz BandStop
Rp = 3; % dozwolony poziom oscylacji w pasmie przepustowym (w dB) - ripples in pass
Rs = 100; % dozwolony poziom oscylacji w pasmie zaporowym (w dB) - ripples in stop

% Projekt analogowego filtra prototypowego - dolnoprzepustowy z w0 = 1
%[z,p,wzm] = buttap(N); % N rząd filtra z zera bieguny p i wzmocnieni
% zmienna zespolona,  laplaca X(s) Butterwortha iloraz dwóch wierlomianow
[z,p,wzm] = cheb1ap(N,Rp); % analogowy prototyp Czebyszewa typu-I
%rp poziom oscylaci w pasmie przepustowoym
% [z,p,wzm] = cheb2ap(N,Rs); % analogowy prototyp Czebyszewa typu-II
%Rs= dowolny poziom oscylacji w pasmie dB
% [z,p,wzm] = ellipap(N,Rp,Rs); % analogowy prototyp Cauera (eliptyczny)
% RP w pasmie przepistowym rs w pasmie zaporowym
b = wzm*poly(z); % [z,wzm] --> b
a = poly(p); % p --> a
f = 0 : 0.01 : 1000; w=2*pi*f; % zakres czestotliwosci
H = freqs(b,a,w); % odpowiedz czestotliwosciowa filtra (funkcja Matlaba)
fi=0:pi/1000:2*pi; c=cos(fi); s=sin(fi);
figure; semilogx(w,20*log10(abs(H))); grid; xlabel('w [rad*Hz]'); title('Analog Proto |H(f)'); pause
figure; plot(real(z),imag(z),'ro',real(p),imag(p),'b*',c,s,'k-'); grid; title('Analog Proto ZP'); pause

% Transformacja czestotliwosci: znormalizowany (w0=1) LowPass --> xxxPass, xxxStop
% Funkcje xx2yy z Signal Processing Toolbox
[b_lp2lp,a_lp2lp] = lp2lp(b,a,2*pi*f0); % LowPass na LowPass
[b_lp2hp,a_lp2hp] = lp2hp(b,a,2*pi*f0); % LowPass na HighPass
[b_lp2bp,a_lp2bp] = lp2bp(b,a,2*pi*sqrt(f1*f2),2*pi*(f2-f1)); % LowPass na BandPass
[b_lp2bs,a_lp2bs] = lp2bs(b,a,2*pi*sqrt(f1*f2),2*pi*(f2-f1)); % LowPass na BandStop

% Rysuj zera i bieguny po transformacji
figure; 
subplot(2,2,1);
z_lp2lp=roots(b_lp2lp); p_lp2lp=roots(a_lp2lp);
plot(real(z_lp2lp), imag(z_lp2lp), 'bo', real(p_lp2lp), imag(p_lp2lp), 'r*'); 
grid;
title('Zera (o) i Bieguny (*) LP na LP'); 
xlabel('Real()'); 
ylabel('Imag()');

subplot(2,2,2);
z_lp2hp=roots(b_lp2hp); p_lp2hp=roots(a_lp2hp);
plot(real(z_lp2hp), imag(z_lp2hp), 'bo', real(p_lp2hp), imag(p_lp2hp), 'r*'); 
grid;
title('Zera (o) i Bieguny (*) LP na HP'); 
xlabel('Real()'); 
ylabel('Imag()');

subplot(2,2,3);
z_lp2bp=roots(b_lp2bp); p_lp2bp=roots(a_lp2bp);
plot(real(z_lp2bp), imag(z_lp2bp), 'bo', real(p_lp2bp), imag(p_lp2bp), 'r*'); 
grid;
title('Zera (o) i Bieguny (*) LP na BP'); 
xlabel('Real()'); 
ylabel('Imag()');

subplot(2,2,4);
z_lp2bs=roots(b_lp2bs); p_lp2bs=roots(a_lp2bs);
plot(real(z_lp2bs), imag(z_lp2bs), 'bo', real(p_lp2bs), imag(p_lp2bs), 'r*'); 
grid;
title('Zera (o) i Bieguny (*) LP na BS'); 
xlabel('Real()'); 
ylabel('Imag()');
pause;

% ...
