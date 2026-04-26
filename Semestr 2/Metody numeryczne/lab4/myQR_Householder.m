function [Q, R] = myQR_Householder(A)
    [m, n] = size(A);
    Q = eye(m);
    R = A;
    for j = 1:n
        x = R(j:m, j);
        v = sign(x(1)) * norm(x) * eye(length(x), 1) + x;
        v = v / norm(v);
        R(j:m, j:n) = R(j:m, j:n) - 2 * v * (v' * R(j:m, j:n));
        Q(j:m, :) = Q(j:m, :) - 2 * v * (v' * Q(j:m, :));
    end
end
