% dodaj wizualizację
figure;
hold on;
grid on;
scatter(x0(1), x0(2), 'filled', 'r');
quiver(x0(1), x0(2), -Jinv(1,1)*f(1), -Jinv(2,1)*f(1), 'b');
xlim([-5,5]);
ylim([-5,5]);
title('Dochodzenie algorytmu do rozwiązania');

% algorytm Newtona
x = x0;
tol = 1e-6;
maxiter = 100;
for iter = 1:maxiter
    f = [x(1)^2 + 4*x(2)^2 - 5; 2*x(1) - 2*x(2)*3 - 2.5];
    J = [2*x(1), 8*x(2); 4*x(1)-2, -3];
    Jinv = inv(J);
    d = -Jinv * f;
    x = x + d;
    
    % aktualizuj wykres
    scatter(x(1), x(2), 'filled', 'r');
    quiver(x(1), x(2), -Jinv(1,1)*f(1), -Jinv(2,1)*f(1), 'b');
    
    if norm(f) < tol
        fprintf('Rozwiązanie znalezione po %d iteracjach.\n', iter);
        break;
    end
end
