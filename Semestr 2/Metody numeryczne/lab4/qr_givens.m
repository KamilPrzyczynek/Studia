function [Q, R] = qr_givens(A)
% Dekompozycja QR macierzy A za pomocą obrotów Givensa
% A - macierz wejściowa
% Q - macierz ortogonalna
% R - macierz trójkątna górna

[m, n] = size(A);
Q = eye(m);
R = A;

for j = 1:n
    for i = m:-1:j+1
        % Obliczanie macierzy Givensa
        G = eye(m);
        [c, s] = givens(R(i-1, j), R(i, j));
        G(i-1:i, i-1:i) = [c -s; s c];
        
        % Mnożenie macierzy przez Givensa
        R(1:m, j:j+1) = G' * R(1:m, j:j+1);
        Q(:, 1:m) = Q(:, 1:m) * G;
    end
end
end

% Funkcja pomocnicza do obliczania macierzy Givensa
function [c, s] = givens(a, b)
if b == 0
    c = sign(a);
    s = 0;
elseif abs(b) > abs(a)
    t = -a / b;
    s = 1 / sqrt(1 + t^2);
    c = s * t;
else
    t = -b / a;
    c = 1 / sqrt(1 + t^2);
    s = c * t;
end
end
