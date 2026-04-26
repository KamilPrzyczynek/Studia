package com.company;

class RownanieKwadratowe {
    private float a;
    private float b;
    private float c;

    public RownanieKwadratowe(float a, float b, float c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public Result obliczPierwiastki() {
        float delta = b * b - 4 * a * c;

        if (delta < 0) {
            return null;
        }

        float x1 = (-b + (float) Math.sqrt(delta)) / (2 * a);
        float x2 = (-b - (float) Math.sqrt(delta)) / (2 * a);

        return new Result(x1, x2);
    }
}