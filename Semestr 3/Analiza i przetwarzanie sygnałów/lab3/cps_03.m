clear all; close all
v1 = [ 1 0 0 0 0 0 0 0 ]; % wektor nr 1
v2 = [ 0 1 0 0 0 0 0 0 ]; % wektor nr 2
prod1 = sum( v1 .* conj(v2) ); % kiedy suma iloczynow odpowiadajacych sobie
prod2 = dot( v1, v2 ); % elementow dwoch wektorow jest rowna 0,
prod3 = v1 .* v2; % to wektory te sa ortogonalne w przestrzeni euklidusowej
A = eye(8); % diagonalna, ortogonalna macierz identycznosciowa
prod4 = inv(A) * A; % wynik powinien dac macierz identycznosciowa
prod5 = A * A; % inv(A)->A’ dla macierzy ortogonalnych
A = [1/2, 1/2, 1/2, 1/2;
     1/2, -1/2, 1/2, -1/2;
     -1/2, 1/2, 1/2, -1/2;
     1/2, 1/2, -1/2, -1/2];
inv_A = inv(A);
A_transpose = A';

% Porównaj wynik
isequal(inv_A, A_transpose)
