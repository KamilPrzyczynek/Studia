function [log2_val, log10_val] = calculateLogs(x)
    % Obliczanie log2(x)
    y = x;
    power = 0;
    
    % Obliczanie części całkowitej log2(x)
    while y > 1
        y = bitshift(y, -1); %Dzielenie zmiennej y przez 2 (przesunięcie bitowe w prawo o 1).
        power = power + 1; %Zwiększenie wartości zmiennej power o 1.
    end
    
    % Kompensacja części całkowitej
    x = x - bitshift(1, power); %: Odjęcie od x wartości 2^power.
    
    % Przygotowanie czynnika dla części ułamkowej log2(x)
    log2_val = single(x) / bitshift(1, power); %Podzielenie x przez 2^power i rzutowanie na typ single (pojedyncza precyzja).
    
    % Wykorzystanie aproksymacji Pade dla ln(1+x) w przedziale x=[0,1)
    log2_val = log2_val / (2 + log2_val);
    log2_val = 2 * log2_val * (15 - 4 * log2_val^2) / (15 - 9 * log2_val^2);
    %: Wykorzystanie wzoru aproksymacji Pade


    % Konwersja z ln na log2: log2(x) = ln(x) / ln(2)
    log2_val = log2_val / 0.693147181; % Podzielenie log2_val przez wartość ln(2).
    log2_val = log2_val + power; %: Dodanie wartości power do log2_val.
    
    % Obliczanie log10(x) na podstawie log2(x)
    log10_val = log2_val / log2(10);%Podzielenie log2_val przez logarytm o podstawie 2 z 10.
end
