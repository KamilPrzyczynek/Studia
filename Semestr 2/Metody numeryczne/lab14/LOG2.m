function result = LOG2(x)
    y = x;
    power = 0;
    
    % Obliczanie części całkowitej log2(x)
    while y > 1
        y = bitshift(y, -1);
        power = power + 1;
    end
    
    % Kompensacja części całkowitej
    x = x - bitshift(1, power);
    
    % Obliczanie części ułamkowej log2(x) przy użyciu aproksymacji Pade
    log2_val = x / bitshift(1, power);
    log2_val = log2_val / (2 + log2_val);
    log2_val = 2 * log2_val * (15 - 4 * log2_val^2) / (15 - 9 * log2_val^2);
    
    % Konwersja z ln na log2: log2(x) = ln(x) / ln(2)
    log2_val = log2_val / 0.693147181;
    
    % Dodanie części całkowitej
    result = log2_val + power;
end
