function x = qr_solve(A,b)
% Metoda rozwiązywania układu równań liniowych Ax=b za pomocą dekompozycji QR
% A - macierz współczynników
% b - wektor wyrazów wolnych
% x - wektor rozwiązań

[Q,R] = qr(A); % dekompozycja QR
y = Q' * b; % rozwiązanie równania Q'y = b
x = R \ y; % rozwiązanie równania Rx = y
end
%A = [1 2 3; 4 5 6; 7 8 10];
%b = [1; 2; 3];
%x = qr_solve(A,b);
%disp(x);
