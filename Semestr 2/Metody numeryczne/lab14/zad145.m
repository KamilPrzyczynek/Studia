clear all; close all;

% Parametry
dx = 2*pi*1000/44100; % dx = phi = 2*pi*f0/fpr = 2*pi / (fpr/f0)
N = 100;

% Odniesienie
n = 0:N-1;
y1 = exp(1j*n*dx);

% Sekwencja rotacji
y2re(1) = cos(dx*0);
y2im(1) = sin(dx*0);
R = [cos(dx) -sin(dx); sin(dx) cos(dx)];
for n = 2 : N
    rot = R * [y2re(n-1); y2im(n-1)];
    y2re(n) = rot(1,1);
    y2im(n) = rot(2,1);
end

figure;
subplot(211);
plot(n, real(y1), 'r-', n, y2re, 'b-');
grid;
title('cos()');
legend('Exp. zespolona', 'Rotacja');
subplot(212);
plot(n, imag(y1), 'r-', n, y2im, 'b-');
grid;
title('sin()');
legend('Exp. zespolona', 'Rotacja');
pause;

% Metoda iteracyjna #3 (równania 14.19-14.22)
k1 = tan(dx/2);
k2 = sin(dx);
u(1) = 1;
v(1) = 0;
for n = 2 : N
    u(n) = u(n-1) + k1*v(n-1);
    v(n) = v(n-1) + k2*u(n-1);
end
y3a = u(1:end);
y3b = v(1:end);

figure;
subplot(211);
plot(n, real(y1), 'r-', n, y3a, 'g-');
grid;
title('cos()');
legend('Exp. zespolona', 'Metoda iteracyjna');
subplot(212);
plot(n, imag(y1), 'r-', n, y3b, 'g-');
grid;
title('sin()');
legend('Exp. zespolona', 'Metoda iteracyjna');

