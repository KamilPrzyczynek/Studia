%1 zadanie
clc,clear
znak=input('Podaj znak:','s');
suma=1;
if znak=="+" || znak=="-" || znak=="*" || znak=="/" || znak=="sa" || znak=="sg"
    a=input("Podaj pierwszą   liczbę: ");
    b=input('Podaj drugą liczbę: ');
end
if znak=="!"
    a=intput("Podaj liczbe: ");
end
if znak=="+"
    wynik=a+b;
    fprintf("%d %s %d = %d",a,znak,b,wynik);
end
if znak=="-"
    wynik=a-b;
    fprintf("%d %s %d = %d",a,znak,b,wynik);
end
if znak=="*"
    wynik=a*b;
    fprintf("%d %s %d = %d",a,znak,b,wynik);
end
if znak=="/" && b~=0
    wynik=a/b;
    fprintf("%d %s %d = %d",a,znak,b,wynik);
end
if znak=="sa"
    wynik=sqrt(a*b);
    fprintf("%d %s %d = %d",a,znak,b,wynik);
end
if znak=="sg"
    wynik=(a+b)/2;
    fprintf("%d %s %d = %d",a,znak,b,wynik);
end
%3 ZADANIE
clc,clear
bok=input('Podaj bok kwadratu: ');
for i=1:bok==1;
    for j=0:bok-1;
        if i==1 || j==0 || bok-1
            fprintf("*");
        else
            fprintf(" ");
        end
    end
        fprintf("\n");
end
            
    aa=input('Podaj a: ');
    bb=input('Podaj b: ');
    cc=input('Podaj c: ');
        delta=(bb*bb)-4*aa*cc
if(delta>0)
    x1=(-bb+sqrt(detla)/(2*aa));
    x2=(-bb-sqrt(detla)/(2*aa));
    fprintf("Dwa miejsca zerowe %d , %d",x1,x2);
else
    fprintf("Brak rozwiązań");
    if(delta==0)
        xzero=-b/(2*a)
    end
end
%4 zadanie
n=input("Podaj rozmiar tablicy: ");
tab(n);




    
