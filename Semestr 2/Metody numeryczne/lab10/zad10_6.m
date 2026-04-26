% optim_golden_fibonacci.m
clear all; close all;
% Bungee
z0 = 100; m = 80; c = 15; v0 = 55; g = 9.81;
f = @(t) -( z0 + m/c*(v0+(m*g)/c)*(1-exp(-(c/m)*t))-((m*g)/c)*t );
t0 = (m/c)*log(1+(c*v0)/(m*g));

% Quadratic search
x1 = 1; x2 = 3; x3 = 5; tol = 1e-6; maxiter = 100; ifigs = 1; x = [x1:0.1:x3];
[xmax, hmax] = quadsearch(f, x1, x2, x3, tol, maxiter, ifigs, x);
fprintf('QUADRATIC SEARCH\nMaximum height: %f m\n', -hmax);

% Golden search
a=1; b=7;
k = 2/(1+sqrt(5)); % = (sqrt(5)-1)/2;
xL = b-k*(b-a);
xR = a+k*(b-a);
iter = 0;
while( (b-a)>1e-6 )
if( f(xL)<f(xR) )
b = xR; xR = xL; xL = b-k*(b-a);
else
a = xL; xL = xR; xR = a+k*(b-a);
end
iter = iter + 1;
end
disp('GOLDEN SEARCH');
fprintf('Iterations: %d, Maximum height: %f m\n', iter, -f((a+b)/2));

% Fibonacci search
a=1; b=7;
tol = 10^(-5);
F = [ 0, 1 ]; n=2;
while( F(n) <= (b-a)/tol )
n = n+1;
F(n) = F(n-1)+F(n-2);
end
(b-a)/tol, F(n),
imax = n, pause
k = (1-F(imax-2)/F(imax)); % pause
xL = b - k*(b-a);
xR = a + k*(b-a);
i = imax-1;
while( i > 3 )
k = (1-F(i-2)/F(i)), pause
if( f(xL)<f(xR) )
b = xR; xR = xL; xL = b-k*(b-a);
else
a = xL; xL = xR; xR = a+k*(b-a);
end
i = i - 1;
end
disp('FIBONACCI SEARCH');
fprintf('t0: %f s, Iterations: %d, Maximum height: %f m\n', t0, iter, -f((a+b)/2));
