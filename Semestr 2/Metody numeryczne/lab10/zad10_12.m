clear all; close all;

% Dane
h0 = 50; % początkowa wysokość ciała [m]
g = 9.81; % przyspieszenie ziemskie [m/s^2]

% Definicja funkcji h(t)
h = @(t) h0 - (1/2)*g*t.^2;

% Wykres funkcji h(t)
t = linspace(0, 10, 1000); % przedział czasu [s]
plot(t, h(t), 'LineWidth', 2);
xlabel('Czas [s]');
ylabel('Wysokość [m]');
title('Wysokość spadającego ciała w funkcji czasu');

% Metoda złotego podziału
a = 0; % początek przedziału czasu [s]
b = 10; % koniec przedziału czasu [s]
k = 2/(1+sqrt(5)); % stała złotego podziału
xL = b - k*(b-a);
xR = a + k*(b-a);
iter = 0;
while (abs(b-a) > 1e-6)
    if (h(xL) < h(xR))
        b = xR;
        xR = xL;
        xL = b - k*(b-a);
    else
        a = xL;
        xL = xR;
        xR = a + k*(b-a);
    end
    iter = iter + 1;
end

% Wynik
t_opt = (a+b)/2;
h_opt = h(t_opt);
fprintf('Czas, po którym ciało uderzy w ziemię: %.4f s\n', t_opt);
fprintf('Wysokość, na jakiej ciało uderzy w ziemię: %.4f m\n', h_opt);

% Wykres funkcji h(t) z zaznaczonym czasem uderzenia w ziemię
hold on;
plot(t_opt, h_opt, 'ro', 'MarkerSize', 10, 'MarkerFaceColor', 'r');
text(t_opt+0.5, h_opt-10, sprintf('(%.2f, %.2f)', t_opt, h_opt), 'Color', 'r');
hold off;
