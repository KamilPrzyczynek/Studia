% 9.2 equnonlin_solve.m
% Aby zmienić funkcję na parabolę y = ax^2 + bx + c, można skorzystać z funkcji anonimowej w Matlabie: £ = @(x) ax.^2+bx+c; fp= @(x) 2ax+b;. Należy również ustawić parametry a, b i c tak, aby nachylenie krzywej w miejscu zerowym było równe około 45 stopni, 5-10 stopni lub 80 stopni. W zależności od wartości tych parametrów, można zmienić szybkość zbieżności i dokładność wyniku końcowego dla różnych metod numerycznych.

clear all; close all;
it = 12;
a = pi-pi/5; b = pi+pi/5; % znajdz zero funkcji y=sin(x) dla x=pi
f = @(x) sin(x); % definicja funkcji
fp = @(x) cos(x); % definicja pochodnej funkcji
x = 0:0.01:2*pi;
plot(x, f(x), 'b-', x, fp(x), 'r-'); grid; xlabel('x'); title('f(x), fp(x)');
cb = nonlinsolvers(f, fp, a, b, 'bisection', it);
cr = nonlinsolvers(f, fp, a, b, 'regula-falsi', it);
cn = nonlinsolvers(f, fp, a, b, 'newton-raphson', it);
plot(1:it, cb, 'o-', 1:it, cr, '*', 1:it, cn, '^ -'); xlabel('iter'); title('c(iter)');
grid on, legend('Bisection', 'Regula-Falsi', 'Newton-Raphson');

% Testowanie metody bisekcji
% Znajdowanie miejsca zerowego paraboli
a = 0.1; b = -1; c = pi;
f = @(x) a*x.^2+b*x+c; fp = @(x) 2*a*x+b;
x = -10:0.1:10;
plot(x, f(x), 'b-', x, fp(x), 'r-'); grid; xlabel('x'); title('f(x), fp(x)');
cb = nonlinsolvers(f, fp, -10, 10, 'bisection', 1000);
plot(1:length(cb), cb, 'o-'); xlabel('iter'); title('c(iter)');
grid on, legend('Bisection');