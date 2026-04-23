%% Zadanie 1 - Kalkulator (6 działań)
clc; clear;
a = input('Podaj pierwszą liczbę: ');
b = input('Podaj drugą liczbę: ');
fprintf('Wybierz działanie:\n1. Dodawanie\n2. Odejmowanie\n3. Mnożenie\n4. Dzielenie\n5. Średnia arytmetyczna\n6. Średnia geometryczna\n');
wybor = input('Twój wybór: ');

switch wybor
    case 1
        wynik = a + b;
        fprintf('Wynik: %.2f\n', wynik);
    case 2
        wynik = a - b;
        fprintf('Wynik: %.2f\n', wynik);
    case 3
        wynik = a * b;
        fprintf('Wynik: %.2f\n', wynik);
    case 4
        if b ~= 0
            wynik = a / b;
            fprintf('Wynik: %.2f\n', wynik);
        else
            disp('Błąd: Dzielenie przez zero!');
        end
    case 5
        wynik = (a + b) / 2;
        fprintf('Średnia arytmetyczna: %.2f\n', wynik);
    case 6
        if a * b >= 0
            wynik = sqrt(a * b);
            fprintf('Średnia geometryczna: %.2f\n', wynik);
        else
            wynik = sqrt(complex(a * b));
            fprintf('Średnia geometryczna (zespolona): %.2f + %.2fi\n', real(wynik), imag(wynik));
        end
    otherwise
        disp('Nieprawidłowy wybór.');
end

%% Zadanie 2 - Równanie kwadratowe (liczby zespolone)
disp('--- Równanie kwadratowe ax^2 + bx + c = 0 ---');
aa = input('Podaj a: ');
bb = input('Podaj b: ');
cc = input('Podaj c: ');

delta = bb^2 - 4*aa*cc;

if delta > 0
    x1 = (-bb + sqrt(delta)) / (2*aa);
    x2 = (-bb - sqrt(delta)) / (2*aa);
    fprintf('Dwa miejsca zerowe rzeczywiste: x1=%.2f, x2=%.2f\n', x1, x2);
elseif delta == 0
    x0 = -bb / (2*aa);
    fprintf('Jedno miejsce zerowe: x0=%.2f\n', x0);
else
    x1 = (-bb + sqrt(complex(delta))) / (2*aa);
    x2 = (-bb - sqrt(complex(delta))) / (2*aa);
    fprintf('Miejsca zerowe zespolone:\nx1 = %.2f + %.2fi\nx2 = %.2f - %.2fi\n', real(x1), imag(x1), real(x2), abs(imag(x2)));
end

%% Zadanie 3 - Kwadrat z gwiazdek
N = input('Podaj długość boku kwadratu N: ');

disp('Kwadrat (pętla for):');
for i = 1:N
    for j = 1:N
        if i == 1 || i == N || j == 1 || j == N
            fprintf('* ');
        else
            fprintf('  ');
        end
    end
    fprintf('\n');
end

%% Zadanie 4 - Sortowanie bąbelkowe
N_sort = input('Podaj rozmiar tablicy N: ');
tab = randi([1, 100], 1, N_sort); % losowanie liczb z zakresu 1-100

fprintf('Tablica przed sortowaniem: ');
disp(tab);

% Algorytm bąbelkowy
for i = 1 : N_sort-1
    for j = 1 : N_sort-i
        if tab(j) > tab(j+1)
            % Zamiana elementów
            temp = tab(j);
            tab(j) = tab(j+1);
            tab(j+1) = temp;
        end
    end
end

fprintf('Tablica po sortowaniu: ');
disp(tab);