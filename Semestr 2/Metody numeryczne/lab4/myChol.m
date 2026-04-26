function L = myChol(A)
    N = size(A,1);
    L = zeros(N,N);
    for i = 1:N
        for j = 1:i
            if i == j
                L(i,i) = sqrt(A(i,i) - sum(L(i,1:i-1).^2));
            else
                L(i,j) = (A(i,j) - sum(L(i,1:j-1).*L(j,1:j-1))) / L(j,j);
            end
        end
    end
end
