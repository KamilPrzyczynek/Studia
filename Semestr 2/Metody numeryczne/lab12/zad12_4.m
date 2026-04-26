% PDE_plyta.m
clear all; close all;
Tp = 20; Tk = -5; % temperatura: dom (początek), otoczenie (koniec)
N = 9; % liczba punktów, 3 x 3
% Warunki brzegowe
% p1 p2 p3
% ----------
% (Tp) | p1 p2 p3 | (Tk)
% (Tp) | p4 p5 p6 | (Tk)
% (Tp) | p7 p8 p9 | (Tk)
% ----------
% p7 p8 p9
b = [ -Tp; ... % punkt 1
    0; ... % punkt 2
    -Tk; ... % punkt 3
    -Tp; ... % punkt 4
    0; ... % punkt 5
    -Tk; ... % punkt 6
    -Tp; ... % punkt 7
    0; ... % punkt 8
    -Tk]; % punkt 9
% Równanie Laplace'a wewnątrz płyty - punkty powyżej i poniżej są uwzględnione w CENTRUM
A=[-4 1 0 1 0 0 0 0 0 ; ... % pkt 1 - (-4)
    1 -4 1 0 1 0 0 0 0; ... % pkt 2 - (-4)
    0 1 -4 0 0 1 0 0 0; ... % pkt 3 - (-4)
    1 0 0 -4 1 0 1 0 0; ... % pkt 4 - (-4)
    0 1 0 1 -4 1 0 1 0; ... % pkt 5 - (-4)
    0 0 1 0 1 -4 0 0 1; ... % pkt 6 - (-4)
    0 0 0 1 0 0 -4 1 0; ... % pkt 7 - (-4)
    0 0 0 0 1 0 1 -4 1; ... % pkt 8 - (-4)
    0 0 0 0 0 1 0 1 -4 ]; % pkt 9 - (-4)
% Punkty lewego i prawego boku są po lewej stronie równania: suma daje zero po prawej stronie
% Po przeniesieniu punktów boków, o znanych wartościach, na prawą stronę,
% zostają one zanegowane: A*x = b.
disp('Rozkład temperatury 3x3:')
x = A \ b,
reshape( x, 3, 3)', pause
