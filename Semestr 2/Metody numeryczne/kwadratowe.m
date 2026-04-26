function [x1, x2] = kwadratowe(a, b, c)
% funkcja do rozwiązywania równania kwadratowego
% a, b, c - współczynniki równania ax^2 + bx + c = 0
% x1, x2 - pierwiastki równania

% obliczenie pierwiastków równania
delta = b^2 - 4*a*c;
x1 = (-b - sqrt(delta)) / (2*a);
x2 = (-b + sqrt(delta)) / (2*a);

% wybór liczby o większej wartości bezwzględnej
if abs(x1) > abs(x2)
    tmp = x1;
    x1 = x2;
    x2 = tmp;
end

% obliczenie drugiej liczby z równania x1 * x2 = c/a
tmp = c / a / x1;

% wybór lepszego rozwiązania dla b bliskiego 0
if abs(b) < 1e-10
    x2 = tmp;
elseif b < 0
    x2 = tmp / 2 / b;
else
    x1 = tmp / 2 / b;
end
end
