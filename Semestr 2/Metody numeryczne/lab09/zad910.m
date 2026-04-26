% zad9_10.m

% Zdefiniuj funkcje, dla ktorej bedziemy szukac miejsca zerowego
A = 4;
f1 = @(x) x.^2 - A; % funkcja fi(x) = x²-A
f2 = @(x) (x-4).^2;
f3 = @(x) (x-4).^3;

% Narysuj wykres funkcji
x = 0 : .02 : 5;
y1 = f1(x);
y2 = f2(x);
y3 = f3(x);
figure;
subplot(1,3,1);
plot(x, y1);
title('Funkcja y=x^2-A');
grid on;
subplot(1,3,2);
plot(x, y2);
title('Funkcja y=(x-4)^2');
grid on;
subplot(1,3,3);
plot(x, y3);
title('Funkcja y=(x-4)^3');
grid on;

% Znajdz miejsca zerowe korzystajac z funkcji fzero
x0 = 2; % poczatkowe przyblizenie
options = optimset('TolX',1e-6); % tolerancja
z1 = fzero(f1, x0, options);
z2 = fzero(f2, x0, options);
z3 = fzero(f3, x0, options);
% Wyswietl wyniki
fprintf('Miejsce zerowe funkcji y=x^2-A: %f\n', z1);
fprintf('Wartość funkcji y=x^2-A dla miejsca zerowego: %f\n', f1(z1));
fprintf('Miejsce zerowe funkcji y=(x-4)^2: %f\n', z2);
fprintf('Wartość funkcji y=(x-4)^2 dla miejsca zerowego: %f\n', f2(z2));
fprintf('Miejsce zerowe funkcji y=(x-4)^3: %f\n', z3);
fprintf('Wartość funkcji y=(x-4)^3 dla miejsca zerowego: %f\n', f3(z3));