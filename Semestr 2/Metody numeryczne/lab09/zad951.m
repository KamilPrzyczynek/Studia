%9.5
a = -0.5;
b = 2*sqrt(2)*a;
c = 1;
f = @(x) a*x.^2 + b*x + c;
fp = @(x) 2*a*x + b;
fpp = @(x) 2*a;
x1 = 0;
x2 = 1;
x3 = 2;
iter = 20;
C = nonlinsolvers2(f, fp, x1, x2, 'muller', iter, x3);
disp(C(end))
%Funkcja nonlinsolvers zawiera implementacje różnych metod do rozwiązywania równań nieliniowych, w tym metodę Mullera. Zwraca ona wektor C zawierający kolejne oszacowania miejsca zerowego.
plot(x, f(x), 'b-', x, fp(x), 'r-'); grid; xlabel('x'); title('f(x), fp(x)');
%W przypadku tego kodu funkcja nonlinsolvers jest wywoływana z argumentami f, fp, fpp, x1, x2, x3, 'muller' i iter. f jest funkcją, której pierwiastek szukamy, fp i fpp to jej pochodne pierwszego i drugiego rzędu, x1, x2, i x3 to trzy punkty początkowe, a 'muller' to wybrana metoda rozwiązywania równania nieliniowego. iter oznacza liczbę iteracji, którą chcemy wykonać.

%Wartości a, b i c są obliczane na podstawie podanych współczynników a następnie używane do utworzenia funkcji f, fp i fpp.

%Wartość zwrócona przez program to szacowany pierwiastek równania kwadratowego.