#sprawdzone
import math
def derivative(f,x,h=0.0001):
    return (f(x+h)-f(x))/h
def square(x):
    return x**2
def main():
    s1=derivative(math.sin,1)
    s2=derivative(math.sin,0)
    s3=derivative(square,1,0.00001)
    print("Pochodna z sin w pkt 1 :",s1)
    print("Pochodna z sin w pkt 0: ",s2)
    print("Pochodna kwadratu w pkt 1 : ",s3)
main()