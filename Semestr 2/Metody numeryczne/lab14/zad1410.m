x = 0 : 0.01 : 1;

% Obliczanie log2(x)
log2_val = zeros(size(x));
for i = 1:length(x)
    log2_val(i) = LOG2(x(i));
end

% Obliczanie log10(x)
log10_val = log2_val / log2(10);

figure;
plot(x, log2_val, 'r', x, log10_val, 'g');
grid;
legend('log2(x)', 'log10(x)');
title('Approximation of log2(x) and log10(x)');
xlabel('x');
ylabel('Value');
