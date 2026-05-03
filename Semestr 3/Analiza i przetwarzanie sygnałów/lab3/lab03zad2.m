% Tworzenie wektorów
v1 = [1, 1, 1, 1, -1, -1, -1, -1];
v2 = [1, 1, -1, -1, 1, 1, -1, -1];
v3 = [1, -1, 1, -1, 1, -1, 1, -1];
v4 = [1, -1, -1, 1, -1, 1, 1, -1];
v5 = [1, 1, 1, 1, 1, 1, 1, 1];
v6 = [1, 1, -1, -1, -1, -1, 1, 1];
v7 = [1, -1, 1, -1, -1, 1, -1, 1];
v8 = [1, -1, -1, 1, 1, -1, -1, 1];

% Przeskalowanie wektorów
v1 = v1 / sqrt(8);
v2 = v2 / sqrt(8);
v3 = v3 / sqrt(8);
v4 = v4 / sqrt(8);
v5 = v5 / sqrt(8);
v6 = v6 / sqrt(8);
v7 = v7 / sqrt(8);
v8 = v8 / sqrt(8);

% Utworzenie macierzy A z wektorów
A = [v1; v2; v3; v4; v5; v6; v7; v8];

% Znalezienie macierzy odwrotnej inv(A)
invA = inv(A);

vectors = [v1; v2; v3; v4; v5; v6; v7; v8];

% Sprawdź, czy wektory są ortogonalne
is_orthogonal = true;

%obliczyć iloczyn skalarny między wszystkimi parami wektorów i sprawdzić, czy wynik wynosi 0. Wektory są ortogonalne, jeśli iloczyn skalarny między nimi wynosi 0.
for i = 1:8
    for j = 1:8
        if i ~= j
            dot_product = dot(vectors(i, :), vectors(j, :));
            if dot_product ~= 0
                is_orthogonal = false;
                break;
            end
        end
    end
    if ~is_orthogonal
        break;
    end
end

if is_orthogonal
    disp('Wektory są ortogonalne.');
else
    disp('Wektory nie są ortogonalne.');
end
%sprawdzdanie pojedynczych macierzy


dot_product = dot(v1, v2);

if dot_product == 0
    disp('Wektory v2 i v6 są ortogonalne.');
else
    disp('Wektory v2 i v6 nie są ortogonalne.');
end
% Obliczenie transpozycji macierzy A
ATranspose = A';

% Porównanie macierzy inv(A) i A'
isEqual = isequal(invA, ATranspose);

if isEqual
    disp('Macierze inv(A) i A'' są identyczne.');
else
    disp('Macierze inv(A) i A'' nie są identyczne.');
end
% Wyświetlenie macierzy A
disp('Macierz A:');
disp(A);

% Wyświetlenie macierzy odwrotnej inv(A)
disp('Macierz odwrotna inv(A):');
disp(invA);

% Wyświetlenie transpozycji macierzy A
disp('Transpozycja macierzy A:');
disp(ATranspose);

%Dyskretna Transformacja Haara  kompresji obrazów (np. standard JPEG 2000)
%i innych zastosowaniach. ortonormalna, co oznacza, że zachowuje długość i zachowuje ortogonalność wektorów w przekształconym przestrzeni.
%Dyskretna Transformacja Hadamarda: przekształcania, co czyni ją użyteczną w algorytmach kompresji obrazów.adamard nie jest zawsze ortogonalny, ale jest odwracalny, co oznacza, że można go odwrócić do oryginalnych danych.
% Transformacja Walsha: odzajem dyskretnej transformacji wykorzystywanej w
% analizie sygnałów i przetwarzaniu obrazów. w kompresji danych, transmisji danych 

% Przekształć macierze na zakres 0-1
maxA = max(max(A));
imageA = A / maxA;

maxInvA = max(max(invA));
imageInvA = invA / maxInvA;

maxATranspose = max(max(ATranspose));
imageATranspose = ATranspose / maxATranspose;

% Wyświetlenie macierzy A jako obrazu
subplot(1, 3, 1);
imshow(imageA, []);
title('Macierz A');

% Wyświetlenie macierzy odwrotnej inv(A) jako obrazu
subplot(1, 3, 2);
imshow(imageInvA, []);
title('Macierz odwrotna inv(A)');

% Wyświetlenie transpozycji macierzy A jako obrazu
subplot(1, 3, 3);
imshow(imageATranspose, []);
title('Transpozycja macierzy A');

% Skonfiguruj wykresy
sgtitle('Wykresy macierzy');
