N = 1000;
x = randn(1,N);

M = 3;
h = [0,1,2];
y = conv(x,h,'same');

rxx = xcorr(x,x);
rxy = xcorr(x,y);

c = 0:M-1;                                                                  % interesujące nas przesunięcia c
rxx = rxx(N:N+M-1);
rxy = rxy(N:N+M-1);

R = toeplitz(rxx);                                                          % tworzymy macierz toeplitza na podstawie wartości autokorelacji syngału x. Macierz Toeplitza to macierz kwadratowa, w której każda przekątna równoległa do głównej przekątnej zawiera te same wartości.
H = chol(R);                                                                % macierz tą dekomponujemy za pomocą dekompozycji cholesykiego
Ht = H.';                                                                   % transpozycja macierzy H
h_ident = Ht \ (H \ rxy.');                                                 % wzór z pdf stworzonego przed zadaniem

if isequal(h, h_ident)
    disp('Obliczone wagi splotu są identyczne z tymi, które były użyte podczas funkcji splotu.');
else
    disp('Obliczone wagi splotu nie są identyczne z tymi, które były użyte podczas funkcji splotu.');
end