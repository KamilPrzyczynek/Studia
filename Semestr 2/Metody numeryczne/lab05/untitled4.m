
% 6.4
% approx_channel.m
% Estymacja odpowiedzi impulsowej kanalu transmisji, u nas karty dzwiekowej

clear all; % clear all variables
close all; % close all figures

h = [3; -2; 1]; % simulated channel impulse response
%load h.dat % load actual channel impulse response
L = length(h); % number of weights

% wykreślić odpowiedź impulsową kanału
figure;
stem(h,'filled');
title('h(n)');
grid;
pause

% wygenerować pseudolosową sekwencję binarną, aby wzbudzić kanał
prbs = 2*randi([0 1],7*L,1) - 1; % [-1, 1] PRBS
%prbs=[-1,-1,-1,-1,1,-1,1,-1,1,1,1,-1,1,1,-1,1,-1,1,-1,-1,1]’; % short PRBS
%prbs=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]’; % test for X

x = [prbs]; % sekwencja wejściowa
N = length(x); % 
długość sekwencji wejściowej

r = x(L:-1:1); % pierwszy rząd
c = x(L:N); % pierwsza kolumna
X = toeplitz(c,r); % macierz Toeplitza
pause

% symulować wyjście kanału poprzez splot odpowiedzi impulsowej kanału z sekwencją wejściową
y = X*h;

SNR = 120; % stosunek sygnału do szumu w dB
y = awgn(y,SNR); % dodanie biały szum Gaussa do wyjścia

% oszacować odpowiedź impulsową kanału metodą inwersji macierzy Toeplitza
he = X \ y;

% sporządzić wykres estymowanej i rzeczywistej odpowiedzi impulsowej kanału
plot(1:L,h,'ro',1:L,he,'bx');
title('Zadane i obliczone h(n)');
grid;
pause
