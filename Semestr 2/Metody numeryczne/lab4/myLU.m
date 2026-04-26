function [L,U,Ahat,err] = myLU(A)
    N = size(A,1);
    L = eye(N);
    U = zeros(N,N);
    for i = 1:N
        for j = i:N
            U(i,j) = A(i,j) - L(i,1:i-1)*U(1:i-1,j);
        end
        for j = i+1:N
            L(j,i) = 1/U(i,i) * (A(j,i) - L(j,1:i-1)*U(1:i-1,i));
        end
    end
    Ahat = L*U;
    err = norm(A - Ahat, 'fro')/norm(A, 'fro');
end
