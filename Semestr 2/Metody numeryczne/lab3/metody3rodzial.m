
3.4
\% matrix_transform.m
clear all; close all;

% Load input data
[x,fpr]=audioread('mowa.wav',[1,2^14]);
N = length(x);
figure; plot(x); title('x(n)');

% Linear/orthogonal transformation - ANALYSIS
n=0:N-1; k=0:N-1;
A = sqrt(2/N)*cos(pi/N*(k'*n));
% Select rows of the cosine matrix to analyze
rows = [500 1000];
P = A(rows,:);
y = P*x;
figure; plot(y); title('y(k)');

% Modify the result to keep coefficients in a range
keep_range = [100 1000];
y([1:keep_range(1)-1, keep_range(2)+1:end]) = 0;
figure; plot(y); title('y(k)');

% Linear/orthogonal transformation - SYNTHESIS
xback = P'*y;
figure; plot(xback); title('xback(n)');

% Play the original and synthesized audio
soundsc(x,fpr);
pause;
soundsc(xback,fpr);

3.2 
a=10; 
u=[1;2]; 
v=[3;4]; 
A=[1,2;3,4]; 
B=[5,6;7,8]; 


R1 = 10; 
R2 = 20; 
R3 = 30; 
R0 = 40;
E1 = 1; 
E2 = 2; 
E3 = 3;
A = [ R1+R2, -R2, 0; ...      -R2, R2+R3, -R3; ...      0, -R3, R3+R0 ],
b = [ E1-E2; ...      E2-E3; ...      E3 ],
x1 = inv(A)*b; 
x2 = pinv(A)*b; 
x3 = A \ b; 
for k=1:length(b)
  Ak = A; 
  Ak(:,k) = b; 
  x4(k) = det( Ak ) / det(A);
end
x4 = x4.’;
[ x1, x2, x3, x4 ], pause


