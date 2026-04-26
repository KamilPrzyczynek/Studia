% A*x = b, x=?
clear all; close all;
A = [ 1 2; ...
3 4 ];
b = [ 5; ...
11 ];

% Dekompozycja LU macierzy A
[L,U] = lu(A);

% Rozwiązanie układu równań przez podstawienie w przód (dla L*y = b)
y = zeros(size(b));
y(1) = b(1);
for i = 2:length(b)
    y(i) = b(i) - L(i,1:i-1)*y(1:i-1);
end

% Rozwiązanie układu równań przez podstawienie wstecz (dla U*x = y)
x = zeros(size(b));
x(end) = y(end) / U(end,end);
for i = length(b)-1:-1:1
    x(i) = (y(i) - U(i,i+1:end)*x(i+1:end)) / U(i,i);
end

% Sprawdzenie rozwiązania
bhat = A*x
err = max(abs(A*x - b))
