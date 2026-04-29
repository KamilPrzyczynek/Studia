package com.example.kalulator21312;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private TextView display;
    private String currentInput = "";
    private Calculator calculator;
    private String zmienna = "";
    private String lastOperator = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        display = findViewById(R.id.display);
        calculator = new Calculator();

        currentInput = "0";
        display.setText(currentInput);
    }


    public void handleNumberClick(String number) {
        if (currentInput.equals("0")) {
            currentInput = number;
        } else {
            currentInput += number;
        }
        display.setText(currentInput);
    }

    public void handleOperatorClick(String newOperator) {

        if (newOperator.equals("sqrt(") || newOperator.equals("log10(")) {
            currentInput = newOperator + currentInput + ")";
        } else if (newOperator.equals("^2") || newOperator.equals("^3")) {
            int length = currentInput.length();
            if (length > 0 && Character.isDigit(currentInput.charAt(length - 1))) {
                currentInput += newOperator;
            }
        } else if (newOperator.equals("+/-") || newOperator.equals("%") || newOperator.equals(".") || newOperator.equals("!")) {
            if (!currentInput.endsWith(newOperator)) {
                currentInput += newOperator;
            }
        } else {
            if (currentInput.endsWith("*") && newOperator.equals("/")) {
                currentInput = currentInput.substring(0, currentInput.length() - 1) + newOperator;
            } else if (currentInput.endsWith("/") && newOperator.equals("*")) {
                currentInput = currentInput.substring(0, currentInput.length() - 1) + newOperator;
            } else if (currentInput.endsWith("+") && newOperator.equals("-")) {
                currentInput = currentInput.substring(0, currentInput.length() - 1) + newOperator;
            } else if (currentInput.endsWith("-") && newOperator.equals("+")) {
                currentInput = currentInput.substring(0, currentInput.length() - 1) + newOperator;
            } else if (!currentInput.endsWith(newOperator)) {
                currentInput += newOperator;
            }
        }
        display.setText(currentInput);
    }

    public void rowna(View view) {
        if (currentInput.equals("0")) {
            display.setText("0");
        } else if (currentInput.contains("!")) {

            if (currentInput.equals("!" + "0")) {
                display.setText("1");
                currentInput = "1";
            } else {
                String result = calculator.calculateFactorial(zmienna);
                display.setText(result);
                currentInput = result;
            }
        } else {
            if (currentInput.matches("0/0|\\d+/0")) {
                if (currentInput.equals("0/0")) {
                    display.setText("Błąd: Nie można dzielić 0 przez 0");
                } else {
                    display.setText("Błąd: Nie można dzielić przez 0");
                }
                currentInput = "";
            } else {
                if (currentInput.startsWith("0/")) {
                    display.setText("Błąd: Nie można dzielić 0 przez inną liczbę");
                    currentInput = "";
                } else {
                    String result = calculator.evaluateExpression(currentInput);
                    if (result.endsWith(".0")) {
                        result = result.substring(0, result.length() - 2);
                    }

                    display.setText(result);
                    currentInput = result;
                }
            }
        }
    }
    public void Reset(View view) {
        currentInput = "0";
        display.setText("0");
    }

    public void jeden(View view) {
        handleNumberClick("1");
    }

    public void dwa(View view) {
        handleNumberClick("2");
    }

    public void trzy(View view) {
        handleNumberClick("3");
    }

    public void cztery(View view) {
        handleNumberClick("4");
    }

    public void piec(View view) {
        handleNumberClick("5");
    }

    public void szesc(View view) {
        handleNumberClick("6");
    }

    public void siedem(View view) {
        handleNumberClick("7");
    }

    public void osiem(View view) {
        handleNumberClick("8");
    }

    public void dziewiec(View view) {
        handleNumberClick("9");
    }

    public void zero(View view) {
        handleNumberClick("0");
    }


    public void plus(View view) {
        handleOperatorClick("+");
    }

    public void minus(View view) {
        handleOperatorClick("-");
    }

    public void razy(View view) {
        handleOperatorClick("*");
    }

    public void dziel(View view) {
        handleOperatorClick("/");
    }

    public void procent(View view) {
        handleOperatorClick("%");
    }

    public void przecinek(View view) {
        if (currentInput.isEmpty() || currentInput.equals("0")) {
            display.setText("0.");
            currentInput = "0.";
        } else {
            handleOperatorClick(".");
        }

    }

    public void sqrt(View view) {
        if (!currentInput.isEmpty() && !currentInput.endsWith(")")) {
            zmienna = currentInput;
            currentInput = "";
            handleOperatorClick("sqrt(" + zmienna + ")");
        }
    }

    public void log(View view) {
        if (!currentInput.isEmpty() && !currentInput.endsWith(")")) {
            zmienna = currentInput;
            currentInput = "";
            handleOperatorClick("log10(" + zmienna + ")");
        }
    }
    public void silnia(View view) {
        if (!currentInput.isEmpty() && !currentInput.equals("0") && !currentInput.endsWith("!")) {
            if (currentInput.matches(".*[0-9]$")) {
                zmienna = currentInput;
                currentInput = "";
                handleOperatorClick("!" + zmienna);
            } else if (currentInput.endsWith("!") && currentInput.startsWith("!")) {
            }
        } else if (currentInput.equals("0")) {
            display.setText("!" + "0");
            currentInput = "!" + "0";
        } else if (currentInput.endsWith("!") && !currentInput.startsWith("!")) {
        }
    }

    public void x2(View view) {
        if (currentInput.isEmpty() || currentInput.equals("0")) {
            display.setText("0^2");
        } else {
            handleOperatorClick("^2");
        }
    }

    public void x3(View view) {
        if (currentInput.isEmpty() || currentInput.equals("0")) {
            display.setText("0^3");

        } else {
            handleOperatorClick("^3");
        }
    }


    public void plusMinus(View view) {
        if (!currentInput.isEmpty() && !currentInput.equals("0")) {
            boolean lastOperationWasPlusMinus = currentInput.matches(".*\\(-[^(]*$");

            if (lastOperationWasPlusMinus) {
                currentInput = currentInput.substring(0, currentInput.lastIndexOf("(-"));
            } else {
                boolean hasParentheses = currentInput.startsWith("(") && currentInput.endsWith(")");

                if (hasParentheses) {
                    currentInput = currentInput.substring(2, currentInput.length() - 1);
                } else {
                    boolean hasOperator = currentInput.matches(".*[+\\-*/^%].*");

                    if (hasOperator) {
                        String[] operands = currentInput.split("[+\\-*/^%]");
                        String lastOperand = operands[operands.length - 1];
                        int lastOperandIndex = currentInput.lastIndexOf(lastOperand);

                        currentInput = currentInput.substring(0, lastOperandIndex) +
                                "(-" + lastOperand + ")" +
                                currentInput.substring(lastOperandIndex + lastOperand.length());
                    } else {
                        currentInput = "(-" + currentInput + ")";
                    }
                }
            }

            display.setText(currentInput);
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        outState.putString("currentInput", currentInput);
        outState.putString("displayText", display.getText().toString());
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        currentInput = savedInstanceState.getString("currentInput");
        display.setText(savedInstanceState.getString("displayText"));
    }
}