#skonczone
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
class BrylyMixin:
    def pole(self):
        return sum(sciana.pole() for sciana in self.sciany)
class Czworoscian(BrylyMixin,Figura):
    def __init__(self,nazwa,bok_s):
        super().__init__(nazwa)
        self.sciany = [Trojkat(nazwa, bok_s, bok_s, bok_s)] * 4
        
class Szescian(BrylyMixin,Figura):
    def __init__(self,nazwa,bok_s):
        super().__init__(nazwa)
        self.sciany = [Kwadrat(nazwa, bok_s)] * 6
class Piramida(BrylyMixin,Figura):
    def __init__(self,nazwa,bok_s):
        super().__init__(nazwa)
        self.sciany = [Trojkat(nazwa, bok_s, bok_s, bok_s)] * 4 + [Kwadrat(nazwa, bok_s)]
def main():
    
    
    czworoscian = Czworoscian("Czworoscian", 3)
    szescian = Szescian("Szescian", 4)
    piramida = Piramida("Piramida", 5)

    bryly = [czworoscian, szescian, piramida]
        
    for bryla in bryly:
        print(f"{bryla.nazwa}: Pole = {bryla.pole()}")
        
if __name__ == "__main__":
    main()
    