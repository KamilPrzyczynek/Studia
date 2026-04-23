%% Zadanie 1 - Obliczanie wartości wyrażeń
% a
w1a = (0.635^1.5 - 356^(1/9)) / (2.98^2.5);
% b
w1b = log(nthroot(1.05, 3) + 0.69^(1/4) - 1);
% c
w1c = cos(pi/3) + sin(deg2rad(21)) + atan(0.3)^2;

%% Zadanie 2 - Obliczanie wartości wyrażeń z podstawieniem
% a
x = 0.1;
y2a = nthroot((1+x)/(1-x), 3);

% b (zamiana podstawy logarytmu: log_a(b) = log(b)/log(a))
n_val = [1, 16]; % Dla n=-16 logarytm w liczbie rzeczywistej nie istnieje
n = n_val; 
y2b = (log(n.^5)./log(2)) ./ (log(n)./log(8));

% c
x3 = 3;
y2c = (2^x3 * 3^(2*x3)) / factorial(x3);

% d
w = 10:1:20;
R = 2; L = 0.01; U = 10;
I = U ./ sqrt(R^2 + (w.*L).^2);

%% Zadanie 3 - Wykresy funkcji sin i cos-sin
x3 = 0:0.01:2*pi;
y3_1 = sin(x3);
y3_2 = cos(x3) - sin(x3);

figure;
plot(x3, y3_1, 'r-', 'LineWidth', 1.5); hold on;
plot(x3, y3_2, 'b--', 'LineWidth', 1.5);
title('Wykresy funkcji sin(x) oraz cos(x)-sin(x)');
xlabel('x'); ylabel('y');
legend('y = sin(x)', 'y = cos(x)-sin(x)');
grid on;

%% Zadanie 4 - Wykres parametryczny
t = -1:0.01:19;
% uniknięcie dzielenia przez zero dla t=0
y4 = -sin(t)./t; 
y4(t==0) = -1; % granica sin(t)/t w zerze
x4 = -cos(t);

figure;
plot(x4, y4, 'g', 'LineWidth', 2);
title('Wykres funkcji określonej parametrycznie');
xlabel('x = -cos(t)'); ylabel('y = -sin(t)/t');
grid on;

%% Zadanie 5 - Funkcja warunkowa
% Przykład dla wektora x
x5_test = -2:0.1:2;
f5 = zeros(size(x5_test));
for i = 1:length(x5_test)
    val = x5_test(i);
    if abs(val) < 1
        f5(i) = 1 + val + (val^2)/2;
    else
        f5(i) = sin(1 + val + (val^2)/2);
    end
end

%% Zadanie 6 - Suma ciągu
n6 = input('Podaj wartość n: ');
suma6 = sum(1./(1:n6));
fprintf('Suma ciągu dla n=%d wynosi: %f\n', n6, suma6);

%% Zadanie 7 - Symbol Newtona
n7 = input('Podaj n: ');
k7 = input('Podaj k: ');
wynik7 = nchoosek(n7, k7);
fprintf('Symbol Newtona (%d nad %d) wynosi: %d\n', n7, k7, wynik7);

%% Zadanie 8 - Układ równań liniowych
A = [3 2 1; 2 3 1; 2 1 3];
B = [5; 1; 11];
X = A\B; % Rozwiązanie x1, x2, x3

%% Zadanie 9 - Pierwiastki równania
% a) x^3 + 8 = 0
p9a = roots([1 0 0 8]);

% b) z^5 = 1 + i
% z^5 - (1+i) = 0
p9b = roots([1 0 0 0 0 -(1+1i)]);

%% Zadanie 10 - Pierwiastki stopnia 3
p10_i = (1i)^(1/3); % Pierwiastek 3-go stopnia z i
p10_1 = (1)^(1/3);  % Pierwiastek 3-go stopnia z 1
% Aby otrzymać wszystkie 3 pierwiastki:
all_p10_i = roots([1 0 0 -1i]);
all_p10_1 = roots([1 0 0 -1]);