% Skrypt inicjalizujący dane do modelu fizycznego
clc; clear;

% Dane liczbowe
m = 0.5;        % Masa [kg]
g = 9.81;       % Przyspieszenie ziemskie [m/s^2]
f = 10;         % Współczynnik tłumienia [Ns/m]
k = 10000;      % Stała sprężystości podłoża [N/m]
R = 0.1;        % Promień piłki [m]
H0 = 1;         % Wysokość początkowa [m]

fprintf('Dane załadowane. Możesz uruchomić symulację Simulink.\n');