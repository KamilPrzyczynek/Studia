package com.example.kalulator21312;

import org.mariuszgromada.math.mxparser.*;

public class Calculator {
    private Expression expression;

    public Calculator() {
        this.expression = new Expression("");
    }

    public String evaluateExpression(String input) {
        try {
            input = input.replaceAll("!", "fact");
            expression.setExpressionString(input);

            if (expression.checkSyntax()) {
                double result = expression.calculate();
                return Double.toString(result);
            } else {
                return "Błąd";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Błąd";
        }
    }

    public String calculateFactorial(String input) {
        try {
            int num = Integer.parseInt(input);
            if (num < 0) {
                return "Błąd";
            }

            long result = calculateFactorial(num);
            return Long.toString(result);
        } catch (NumberFormatException e) {
            return "Błąd";
        }
    }

    private long calculateFactorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * calculateFactorial(n - 1);
        }
    }
}
