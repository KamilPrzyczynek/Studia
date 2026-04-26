% ode_vanderpol_alternatives.m
clear all; close all;

mi_values = [1.5, 3, 5, 7]; % różne wartości parametru mi
x0_values = [0, 0.9]; % różne wartości początkowe x0

t0 = 0; % czas początkowy obserwacji
tfinal = 20; % czas końcowy obserwacji
tspan = [t0 tfinal]; % razem

options = odeset('RelTol',1e-4,'AbsTol',[1e-4 1e-4]); % opcje

figure;

for i = 1:length(mi_values)
    for j = 1:length(x0_values)
        mi = mi_values(i); % aktualna wartość parametru mi
        x0 = [x0_values(j); x0_values(j)]; % aktualna wartość początkowa x0

        % ode23()
        [t_ode23, x_ode23] = ode23(@(t,x) fun_diff(t, x, mi), tspan, x0, options);

        % Wykresy
        subplot(length(mi_values), length(x0_values), (i-1)*length(x0_values)+j);
        plot(t_ode23, x_ode23(:,1), 'b', 'LineWidth', 2);
        xlabel('t [s]');
        ylabel('x1(t)');
        title(['mi = ' num2str(mi) ', x0 = ' num2str(x0(1))]);
        grid on;
    end
end

sgtitle('Porównanie rozwiązań dla różnych wartości mi i x0');

% Funkcja opisująca równanie różniczkowe
function dxdt = fun_diff(t, x, mi)
    dxdt = [x(2); mi*(1 - x(1)^2)*x(2) - x(1)];
end