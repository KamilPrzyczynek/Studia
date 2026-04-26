% generate random symmetric matrixA = randn(100);
A = A'*A;

L = myChol(A);
Um = chol(A);

% check if L == Um
disp("Czy L jest równe Um?");
disp(norm(L-Um,'fro')/norm(Um,'fro') < 1e-10);
