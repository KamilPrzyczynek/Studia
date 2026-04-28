#sprawdzone na zajęciach

from abc import ABC,abstractmethod
import math 
class Figura:
    def __init__(self,nazwa):
        self.__nazwa=nazwa
    @property
    def nazwa(self):
        return self.__nazwa
    @abstractmethod
    def pole(self):
        pass
class Kolo(Figura):
    def __init__(self,nazwa,promien):
        super().__init__(nazwa)
        self._promien=promien
    @property
    def promien(self):
        return self._promien
    def pole(self):
        return math.pi*self._promien**2
class Trojkat(Figura):
    def __init__(self,nazwa,a,b,c):
        super().__init__(nazwa)
        self._a=a
        self._b=b
        self._c=c
    def pole(self):
        p=(self._a+self._b+self._c)/2
        return math.sqrt(p * (p - self._a) * (p - self._b) * (p - self._c))


class Prostokat(Figura):
    def __init__(self,nazwa,a,b):
        super().__init__(nazwa)
        self._a=a
        self._b=b
    def pole(self):
        return self._a*self._b
class Kwadrat(Prostokat):
    def __init__(self,nazwa,bok):
        super().__init__(nazwa,bok,bok)
class TrojkatRownoboczny(Trojkat):
    def __init__(self, nazwa, bok):
        super().__init__(nazwa, bok, bok, bok)
def main():
    
    kolo = Kolo("Kolo", 5)
    trojkat = Trojkat("Trójkąt", 3, 4, 5)
    prostokat = Prostokat("Prostokąt", 6, 8)
    kwadrat = Kwadrat("Kwadrat", 4)
    trojkat_rownoboczny = TrojkatRownoboczny("Trójkąt Równoboczny", 7)
    
    figury = [kolo, trojkat, prostokat, kwadrat, trojkat_rownoboczny]
    
    for figura in figury:
        print(f"{figura.nazwa}: Pole = {figura.pole()}")
    
    
    
if __name__ == "__main__":
    main()
        
        
    
