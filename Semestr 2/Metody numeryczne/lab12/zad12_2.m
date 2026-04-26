% PDE_pret.m
clear all; close all;
N=10; % zwiększyłem liczbę punktów dyskretyzacji 
Tp=30; %nowa wartość brzegowa lewego końca pręta
Tk=-30; %now wartość brzegowa prawego końca pręta

D = diag( -2*ones(N,1),0 ) + diag(ones(N-1,1),1) + diag(ones(N-1,1),-1);
b = zeros(N,1); b(1) = -Tp; b(N) = -Tk;
D, pause
b, pause
T = D\b;
plot([Tp; T; Tk]);
xlabel('Punkty x'); 
ylabel('Temperatura [oC]'); 
title('Temp(x) [oC]'); 
grid;