function [] = rysuj(y, R, H)
    % Rysowanie podłoża (czerwony prostokąt)
    fill([-2 -2 2 2], [-0.1 0 0 -0.1], 'r') 
    hold on
    
    % Obliczanie odkształcenia piłki
    if y < R
        Rx = R + (R - y); % Rozszerzenie w poziomie
        Ry = y;           % Spłaszczenie w pionie
    else
        Rx = R;
        Ry = R;
    end
    
    % Generowanie punktów elipsy/koła
    alfa = linspace(0, 2*pi, 20);
    fill(Rx * sin(alfa), Ry * cos(alfa) + y, 'b') 
    
    % Ustawienia widoku
    xlim([-2 2])
    ylim([-0.1 H + R])
    axis off
    hold off
    
    drawnow
end