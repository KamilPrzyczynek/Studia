#_counter =0 --- powinny być dwa podkreślenia ( __count)
#get_counter miał byćmetodą statyczną(@staticmetod)
#brak metody klasowej (@classmetod) tworzącej ułamek zwykły z dziesiętnego
#Poprawione
import math
class Ulamki:
    __counter =0
    def __init__(self,a,b):
        self.a=a
        self.b=b
        self._skroc()
        Ulamki.__counter+=1
            
    def _nwd(self,x,y):
        while y:
            x,y=y,x%y
        return x
    def _skroc(self):
        dzielnik = self._nwd(self.a, self.b)
        self.a //= dzielnik
        self.b //= dzielnik

    def __add__(self,other):
        lewe_a = self.a * other.b
        prawe_b = other.a * self.b
        suma=Ulamki(lewe_a+prawe_b,self.b*other.b)
        return suma
    def __sub__(self, other):
        lewe_a = self.a * other.b
        prawe_b = self.a * other.b
        roznica = Ulamki(lewe_a - prawe_b, self.b * other.b)
        return roznica
        
    def __mul__(self,other):
        iloczyn = Ulamki(self.a*other.a,self.b*other.b)
        return iloczyn
            
    def __truediv__(self,other):
        iloraz=Ulamki(other.a*other.b,other.b*other.a)
        return iloraz
        
    def __str__(self):
        return f"{self.a}/{self.b}"
    @staticmethod    
    def get_counter():
        return Ulamki.__counter
    @classmethod
    def from_decimal(cls,decimal):
        prezycja=10**6
        a=int(decimal*prezycja)
        b=prezycja
        return cls(a,b)
    def __dell__(self):
        Ulamki.__counter-=1
        
def main():
    u1 =  Ulamki(1,2)
    u2 =  Ulamki(3,4)
    
    suma=u1+u2
    roznica=u1-u2
    iloczyn=u1*u2
    iloraz=u1/u2
    
    print(suma, roznica, iloczyn, iloraz, Ulamki.get_counter())
    u3=Ulamki.from_decimal(0.75)
    print(u3)
if __name__ == "__main__":
    main()