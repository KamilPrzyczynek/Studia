%% Zadanie 1 - Ciąg Gp
p = 1:15;
Gp = (1./p) .* (10.^p .* (1 + p.*pi.*10.^-p) - 10.^p);
% Uproszczenie algebraiczne: Gp = (1/p) * (10^p + p*pi - 10^p) = pi
fprintf('Wyrazy ciągu Gp (powinny wynosić pi):\n');
disp(Gp');

%% Zadanie 2 - Rozbieżność wyników (utrata cyfr znaczących)
a = 1.123456789 * 10^15;
S_a = a - (1/a) + 0.1;
S_b = a + 0.1 - (1/a);
P = a + 0.1 - a;

fprintf('Zad 2: S_a = %f, S_b = %f\n', S_a, S_b);
fprintf('Zad 2: P = %f (oczekiwane 0.1)\n', P);

%% Zadanie 3 - Przybliżona pochodna
h_vec = [0.1, 0.01, 0.001, 0.0001, 0.000001, 10^-16];
c = 1.1; f_exact = 2.2;
f = @(x) x^2;

fprintf('\nh | f''(c) approx | Błąd względny\n');
for h = h_vec
    df_approx = (f(c + h) - f(c)) / h;
    err = abs(f_exact - df_approx) / f_exact;
    fprintf('%.e | %.10f | %.e\n', h, df_approx, err);
end

%% Zadanie 4 - Wyznaczanie epsilona maszynowego
m = 1;
while (1 + 2^-m) > 1
    m = m + 1;
end
m = m - 1; % Największe m spełniające warunek
fprintf('\nZad 4: m = %d, 2^-m = %e, Matlab eps = %e\n', m, 2^-m, eps);

%% Zadanie 5 - Największa liczba maszynowa
max_double = realmax;
min_double = realmin;
fprintf('Zad 5: Realmax = %e, Realmin = %e\n', max_double, min_double);

%% Zadanie 6 - Algorytmy dla (1-cos(x))/x^2
x_vec = [1.123*10^-2, 1.123*10^-3, 1.123*10^-7, 1.123*10^-8, 1.123*10^-10];
f1 = @(x) (1 - cos(x)) ./ x.^2;
f2 = @(x) 0.5 * (sin(x./2)./(x./2)).^2;

res1 = f1(x_vec);
res2 = f2(x_vec);

figure;
loglog(x_vec, res1, 'ro-', x_vec, res2, 'bx--');
title('Porównanie algorytmów obliczania funkcji');
legend('Wzór standardowy', 'Wzór zmodyfikowany');

%% Zadanie 7 - Stabilność wielomianów (Horner vs Rozwinięty)
x = linspace(0.99, 1.01, 101);
f_poly = x.^8 - 8*x.^7 + 28*x.^6 - 56*x.^5 + 70*x.^4 - 56*x.^3 + 28*x.^2 - 8*x + 1;
f_horner = (((((((x-8).*x+28).*x-56).*x+70).*x-56).*x+28).*x-8).*x+1;
f_simple = (x-1).^8;

figure;
plot(x, f_poly, 'r', x, f_horner, 'g', x, f_simple, 'b');
title('Stabilność numeryczna różnych postaci wielomianu');
legend('Rozwinięty', 'Horner', '(x-1)^8');

%% Zadanie 8 - Błąd algorytmu y = 4x
x_vals = [10^-10, 10^-15, 1.123456789*10^7];
for x = x_vals
    y_exact = 4*x;
    y_alg = (x+1).*(x+1) - (x-1).*(x-1);
    err_abs = abs(y_exact - y_alg);
    err_rel = err_abs / abs(y_exact);
    fprintf('\nx = %e: Błąd bezwzgl = %e, wzgl = %e\n', x, err_abs, err_rel);
end