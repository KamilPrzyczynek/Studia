function [z, p, b, a] = design_filter_low_pass(fpass)
    fs = fpass / 2; % Normalize stopband frequency
    fp = fpass; % Normalize passband frequency
    % Design the filter using normalized cutoff frequencies
    [z, p, k] = butter(6, fp/fs);
    [b, a] = zp2tf(z, p, k);
end