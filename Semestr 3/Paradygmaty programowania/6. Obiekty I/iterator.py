#skonczone
class MyRange:
    def __init__(self,*args):
        if(len(args)==0 or len(args)>3):
            raise ValueError("Klasa Myrange przyjmuje od 1 do 3 arg")
        self.start=0
        self.stop=None
        self.krok=1
        if len(args)==1:
            self.stop=args[0]
        elif  len(args)==2:
            self.start,self.stop=args
        elif  len(args)==3:
            self.start,self.stop,self.krok=args
        if self.krok==0:
            raise ValueError("Nie może być 0")
        self.wybrany=self.start
        
    def __iter__(self):
        return self
        
    def __next__(self):
        if(self.krok>0 and self.wybrany<self.stop) or (self.krok<0 and self.wybrany>self.stop):
            wynik=self.wybrany
            self.wybrany+=self.krok
            return wynik
        else:
            raise StopIteration("Nie ma wiecej elementow")
def main():
    try:
        for x in MyRange(1.1, 2.2, 0.5):
            print(x)
        for x in MyRange(1.1, 2.1, 0.5):
            print(x)        
        for x in MyRange(1.1, 2.2):
            print(x)               
        for x in MyRange(2.2):
            print(x)    
        for x in MyRange(2.2, 0.1, -0.5):
            print(x)    
        for x in MyRange(1,2,3,4):
            print(x)
    except ValueError as e:
        print(f"Error:{e}")
        
if __name__ =="__main__":
    main()