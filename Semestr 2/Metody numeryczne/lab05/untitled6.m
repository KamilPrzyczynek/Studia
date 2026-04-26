
% 6_6
clear all; close all;
N=500; % Liczba definiowanych punktow czasowych
M=3; % Liczba sinusoid uzytych do aproksymacji
x = [0 : 2*pi/N : 2*pi*(N-1)/N]'; % Wektor pionowy [rad]: 0 : krok : maks
y = sawtooth(x); % Zadany przebieg piloksztaltny, od -1 do 1
noise = 0.2 * randn(N,1); % Dodanie szumu do sygnalu
y = y + noise;
figure; plot(x, y); title('Sygnał aproksymowany'); xlabel('Czas [rad]'); ylabel('Amplituda');
X = sqrt(2/N) * sin(x*[1:M]) ; % Macierz z ortogonalnymi sinusami w kolumnach
figure; plot(x, X(:,3)); title('Przykładowa kolumna macierzy X'); xlabel('Czas [rad]'); ylabel('Amplituda');
a = X'*y; % Wynik transformacji, szukany wektor wspolczynnikow
figure; plot(x,y,'r.',x,X*a); grid; title('Funkcja oryginalna i jej aproksymata'); xlabel('Czas [rad]'); ylabel('Amplituda');
legend('Funkcja oryginalna', 'Aproksymata');

%Aby sprawdzić, czy aproksymacja sygnału z użyciem pełnej rzeczywistej bazy trygonometrycznej zawsze kończy się sukcesem, można zastosować twierdzenie aproksymacyjne Fouriera, które mówi, że każdą funkcję okresową o okresie T można przedstawić jako sumę szeregu Fouriera, a więc jako nieskończoną sumę sinusów i kosinusów o określonych częstotliwościach i współczynnikach. Stosując skończenie wiele sinusów i kosinusów, czyli tworząc aproksymację za pomocą macierzy X, otrzymujemy przybliżenie funkcji, które zawsze jest skończonego rzędu i może być dokładniejsze lub mniej dokładne w zależności od liczby sinusów i kosinusów użytych do aproksymacji.

%Z powodu ortogonalności sinusów i kosinusów w macierzy X wynik transformacji a jest dokładnymi współczynnikami szeregu Fouriera funkcji sawtooth(x). Oznacza to, że aproksymacja sygnału z użyciem pełnej rzeczywistej bazy trygonometrycznej zawsze kończy się sukcesem, niezależnie od przesunięcia funkcji sawtooth(x).