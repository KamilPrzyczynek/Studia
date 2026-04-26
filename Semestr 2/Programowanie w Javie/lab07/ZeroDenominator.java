package com.company;

public class ZeroDenominator extends RuntimeException {
    public ZeroDenominator() {
        System.out.println("Mianownik nie może być zerem!");
    }
}