
A = rand(100);

[L,U,Ahat,err] = myLU(A);
[Lm,Um,Pm] = lu(A);
Am = Pm*A;

disp("Czy L*U i Ahat to to samo?");
disp(isequal(L*U, Ahat));

disp("Czy L*U jest równe A, a L i U mają prawidłowe wartości?");
disp(norm(A - L*U, 'fro') < 1e-10 && norm(L*tril(U,-1), 'fro') < 1e-10 && norm(triu(U), 'fro') < 1e-10);


disp("Error :");
disp(err);

disp("Czy dekompozycja LU z myLU() jest zbliżona do dekompozycji z lu()?");
disp(norm(L-Lm,'fro')/norm(Lm,'fro') < 1e-10 && norm(U-Um,'fro')/norm(Um,'fro') < 1e-10 && norm(A-Am,'fro')/norm(Am,'fro') < 1e-10);
