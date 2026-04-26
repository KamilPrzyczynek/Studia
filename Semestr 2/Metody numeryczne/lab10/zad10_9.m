clear all; close all;
% minimalizacja z gradientem
opt = optimset('GradObj','on');
[x,fx,info,output] = fminunc(@rosenbrock,[0 0],opt);
disp(['Minimum funkcji: f(',num2str(x(1)),',',num2str(x(2)),') = ',num2str(fx)]);
disp(['Liczba ewaluacji funkcji celu: ',num2str(output.funcCount)]);
disp(['Komunikat zwrócony przez solver: ',info]);
disp(' ');

function [f,fp]=rosenbrock(x)
f = (1-x(1)).^2 + 100*(x(2)-x(1).^2).^2;
fp = [-2*(1-x(1)) - 400*x(1)*(x(2)-x(1).^2); 200*(x(2)-x(1).^2)];
end
