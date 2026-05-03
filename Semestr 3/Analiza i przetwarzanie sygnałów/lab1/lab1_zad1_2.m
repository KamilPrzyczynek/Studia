% cps_01_sinus.m
clear all; close all;

fpr=1000; Nx=1000;              % parametry: czestotliwosc probkowania, liczba probek
dt = 1/fpr;                     % okres probkowania
n = 0 : Nx-1;                   % numery probek
t = dt*n;                       % chwile probkowania

A1 = 0.5; f1 = 1;            p1 = pi/4; % sinusoida: amplituda, czestotliwosc, faza
A2 = 0.5; f2 = fpr + f1;     p2 = pi/4;
A3 = 0.5; f3 = 2 * fpr + f1; p3 = pi/4;

x1 = A1*sin(2*pi*f1*t+p1);    % pierwszy skladnik sygnalu
x2 = A2*sin(2*pi*f2*t+p2);    % drugi skladnik
x3 = A3*sin(2*pi*f3*t+p3);    % trzeci skladnik



figure;
plot(t,x1,'bo-'); grid; title('Sygnal x(t) - Normalne wartości'); xlabel('Czas [s]'); ylabel('Amplituda');
hold on;
plot(t,x2,'g-'); grid;
plot(t,x3,'b-'); grid; 
hold off; pause;

% Zmiana częstotliwości
A1 = 0.5; f1 = 1;            p1 = pi/4; % sinusoida: amplituda, czestotliwosc, faza
A2 = 0.5; f2 = fpr - f1;     p2 = pi/4;
A3 = 0.5; f3 = 2 * fpr - f1; p3 = pi/4;

x1 = A1*sin(2*pi*f1*t+p1);    % pierwszy skladnik sygnalu
x2 = A2*sin(2*pi*f2*t+p2);    % drugi skladnik
x3 = A3*sin(2*pi*f3*t+p3);    % trzeci skladnik

figure;
plot(t,x1,'r-'); grid; title('Sygnal x(t) - zmiana częstotliwości (-)'); xlabel('Czas [s]'); ylabel('Amplituda');
hold on;
plot(t,x2,'g-'); grid;
plot(t,x3,'bo-'); grid;
hold off;
pause;


% Zmiana częstotliwości f1 = 5
A1 = 0.5; f1 = 5;            p1 = pi/4; % sinusoida: amplituda, czestotliwosc, faza
A2 = 0.5; f2 = fpr + f1;     p2 = pi/4;
A3 = 0.5; f3 = 2 * fpr + f1; p3 = pi/4;

x1 = A1*sin(2*pi*f1*t+p1);    % pierwszy skladnik sygnalu
x2 = A2*sin(2*pi*f2*t+p2);    % drugi skladnik
x3 = A3*sin(2*pi*f3*t+p3);    % trzeci skladnik

figure;
plot(t,x1,'o-'); grid; title('Sygnal x(t) - f1 = 5'); xlabel('Czas [s]'); ylabel('Amplituda');
hold on;
plot(t,x2,'g-'); grid;
plot(t,x3,'b-'); grid; 
hold off;
pause;


% Zmiana częstotliwości f1 = 5 i zmiana sin na cos
A1 = 0.5; f1 = 5;            p1 = pi/4; % sinusoida: amplituda, czestotliwosc, faza
A2 = 0.5; f2 = fpr + f1;     p2 = pi/4;
A3 = 0.5; f3 = 2 * fpr + f1; p3 = pi/4;

x1 = A1*cos(2*pi*f1*t+p1);    % pierwszy skladnik sygnalu
x2 = A2*cos(2*pi*f2*t+p2);    % drugi skladnik
x3 = A3*cos(2*pi*f3*t+p3);    % trzeci skladnik

figure;

plot(t,x1,'r-'); grid; title('Sygnal x(t) - zmiana sin na cos'); xlabel('Czas [s]'); ylabel('Amplituda');
hold on;
plot(t,x2,'g-'); grid;
plot(t,x3,'b-'); grid; 
hold off;
pause;

% Zmiana częstotliwości i generowanie 3 sinusoid x1, x2, x3

fpr=8000; Nx=3*fpr;             % parametry: czestotliwosc probkowania, liczba probek

A1 = 0.5; f1 = 200;           p1 = pi/4; % sinusoida: amplituda, czestotliwosc, faza
A2 = 0.5; f2 = fpr + f1;      p2 = pi/4;
A3 = 0.5; f3 = 2 * fpr + f1;  p3 = pi/4;


x1 = A1*sin(2*pi*f1*t+p1);    % pierwszy skladnik sygnalu
x2 = A2*sin(2*pi*f2*t+p2);    % drugi skladnik
x3 = A3*sin(2*pi*f3*t+p3);    % trzeci skladnik

%Generowanie sinusoidy dla x1
figure;
plot(t,x1,'r-'); grid; title('Sygnal x1(t) - generowanie sinusoid'); xlabel('Czas [s]'); ylabel('Amplituda');
sound(x1, fpr);
pause;

%Generowanie sinusoidy dla x2
plot(t,x2,'g-'); grid;  title('Sygnal x2(t) - generowanie sinusoid'); xlabel('Czas [s]'); ylabel('Amplituda');
sound(x2, fpr);
pause;

%Generowanie sinusoidy dla x3
plot(t,x3,'b-'); grid;  title('Sygnal x3(t) - generowanie sinusoid'); xlabel('Czas [s]'); ylabel('Amplituda');
sound(x3, fpr);
pause;





