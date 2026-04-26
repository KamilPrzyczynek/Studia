A = [1 2; 3 4];
b = [5; 11];
x_jac = fITER(A,b);
x_inv = inv(A)*b;
x_backslash = A\b;
diff_jac_inv = x_jac - x_inv;
diff_jac_backslash = x_jac - x_backslash;
disp('Różnica między metodą Jacobiego a rozwiązaniem odwrotnym:')
disp(diff_jac_inv)
disp('Różnica między metodą Jacobiego a rozwiązaniem z ukośnikiem odwrotnym:')
disp(diff_jac_backslash)
