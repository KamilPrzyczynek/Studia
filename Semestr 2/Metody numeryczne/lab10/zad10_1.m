% Ustawienie parametrów funkcji Rosenbrocka
a = 1;
b = 100;

% Definicja funkcji Rosenbrocka
rosenbrock = @(x) (a - x(1))^2 + b*(x(2) - x(1)^2)^2;

% Generowanie siatki punktów
[x, y] = meshgrid(-2:0.1:2, -1:0.1:3);
z = arrayfun(@(x,y) rosenbrock([x,y]), x, y);

% Wykres funkcji Rosenbrocka
figure;
surf(x, y, z);
xlabel('x');
ylabel('y');
zlabel('f(x,y)');
title('Funkcja Rosenbrocka');

% Punkt startowy
x0 = [0, 0];

% Opcje algorytmu
options = optimoptions('fminunc', 'Display', 'iter', 'Algorithm', 'quasi-newton');

% Wywołanie funkcji fminunc
[xmin, fval, exitflag, output] = fminunc(rosenbrock, x0, options);

% Wykres funkcji Rosenbrocka z zaznaczonym minimum
figure;
surf(x, y, z);
hold on;
plot3(x0(1), x0(2), rosenbrock(x0), 'ro', 'MarkerSize', 10, 'LineWidth', 2);
plot3(xmin(1), xmin(2), fval, 'go', 'MarkerSize', 10, 'LineWidth', 2);
xlabel('x');
ylabel('y');
zlabel('f(x,y)');
title('Funkcja Rosenbrocka z zaznaczonym minimum');
legend('Funkcja Rosenbrocka', 'Punkt startowy', 'Minimum');

