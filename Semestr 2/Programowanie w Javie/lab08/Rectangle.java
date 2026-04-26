package com.company;

/**
 * Klasa reprezentująca prostokąt w dwuwymiarowej przestrzeni.
 */
public class Rectangle {

    private double width;
    private double height;

    /**
     * Tworzy prostokąt o podanych wymiarach.
     *
     * @param width  szerokość prostokąta
     * @param height wysokość prostokąta
     */
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    /**
     * Zwraca szerokość prostokąta.
     *
     * @return szerokość prostokąta
     */
    public double getWidth() {
        return width;
    }

    /**
     * Ustawia szerokość prostokąta.
     *
     * @param width szerokość prostokąta
     */
    public void setWidth(double width) {
        this.width = width;
    }

    /**
     * Zwraca wysokość prostokąta.
     *
     * @return wysokość prostokąta
     */
    public double getHeight() {
        return height;
    }

    /**
     * Ustawia wysokość prostokąta.
     *
     * @param height wysokość prostokąta
     */
    public void setHeight(double height) {
        this.height = height;
    }

    /**
     * Zwraca pole powierzchni prostokąta.
     *
     * @return pole powierzchni prostokąta
     */
    public double getArea() {
        return width * height;
    }

    /**
     * Zwraca obwód prostokąta.
     *
     * @return obwód prostokąta
     */
    public double getPerimeter() {
        return 2 * (width + height);
    }
}
