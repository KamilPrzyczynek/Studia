% Listing 8.3 - funkcja bilinearMY
function [zz, pp, ggain] = bilinearMY(z, p, gain, fpr)
    pp = [];
    zz = [];
    ggain = gain;
    
    for k = 1:length(z) % transformacja zer "analogowych"
        zz = [zz (2 * fpr + z(k)) / (2 * fpr - z(k))];
        ggain = ggain * (2 * fpr - z(k));
    end
    
    for k = 1:length(p) % transformacja biegunów "analogowych"
        pp = [pp (2 * fpr + p(k)) / (2 * fpr - p(k))];
        ggain = ggain / (2 * fpr - p(k));
    end
    
    if (length(p) > length(z))
        zz = [zz -1 * ones(1, length(p) - length(z))];
    end
    
    if (length(p) < length(z))
        pp = [pp -1 * ones(1, length(z) - length(p))];
    end
end