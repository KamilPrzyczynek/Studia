% approx_line.m
% Linear regression: y = a*x + b
clear all; close all;

% Z pomiarów uzyskano następujące wartości (x = numer pomiaru, y = wartość)
x = [1 2 3 4 5 6 7 8 9 10];
y = [0.912 0.945 0.978 0.997 1.013 1.035 1.057 1.062 1.082 1.097];

figure; plot(x, y, 'b*'); title('y=f(x)'); grid; pause

% Linear approximation: y = a * x + b

%Instrukcja if - rozwiązanie ogólne z wykorzystaniem równania macierzowego
if (0)
    xt = x'; yt = y'; N = length(xt);
    X = [xt, ones(N,1)];
    ab = X \ yt;
    a = ab(1), b = ab(2),
else
    % W tym przypadku - przy użyciu formuł pochodnych
    xm = mean(x);
    ym = mean(y);
    xr = x - xm;
    yr = y - ym;
    a = (xr * yr') / (xr * xr')
    % Alternatywnie: a = sum(xr .* rok) / sum(xr .* xr)
    b = ym - a * xm
end

figure; plot(x, y, 'b*', x, a*x+b, 'k-'); title('y=f(x)'); grid; pause

% Również wielomiany wyższego rzędu
% p = polyfit(x, y, 1), % a=p(1), b=p(2)
% figure; plot(x, y, 'b*', x, polyval(p,x), 'r-'); title('y=f(x)'); grid; pause