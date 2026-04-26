% ode_vanderpol.m
clear all; close all;

mi_values = [1.5, 3, 5, 7]; % różne wartości parametru mi
x0_values = [0, 0.9]; % różne wartości początkowe x0

for mi = mi_values
    for x0 = x0_values
        t0 = 0; % czas początkowy obserwacji
        tfinal = 20; % czas końcowy obserwacji
        tspan = [t0 tfinal]; % razem
        x0_vec = [x0; 0.25]; % zakładane wartości początkowe zmiennych stanu [x1,x2]
        trace = 1; % wymagane śledzenie
        options = odeset('RelTol',1e-4,'AbsTol',[1e-4 1e-4]); % wybór opcji
        [t,x] = ode23(@(t,x) fun_diff(t, x, mi), tspan, x0_vec, options); % rozwiazanie numeryczne
        
        figure;
        subplot(2,1,1);
        plot(t,x(:,1));
        xlabel('t [s]');
        title(['x1(t) dla mi = ' num2str(mi) ', x0 = ' num2str(x0)]);
        grid on;
        
        subplot(2,1,2);
        plot(t,x(:,2));
        xlabel('t [s]');
        title(['x2(t) dla mi = ' num2str(mi) ', x0 = ' num2str(x0)]);
        grid on;
        
        pause;
        
        figure;
        plot(x(:,1),x(:,2));
        xlabel('x1(t)');
        ylabel('x2(t)');
        title(['Portret fazowy dla mi = ' num2str(mi) ', x0 = ' num2str(x0)]);
    end
end

% Funkcja opisująca równanie różniczkowe
function dxdt = fun_diff(t, x, mi)
    dxdt = [x(2); mi*(1 - x(1)^2)*x(2) - x(1)];
end