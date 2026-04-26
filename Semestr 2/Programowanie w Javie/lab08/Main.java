package com.company;

public class Main {

    public static void main(String[] args) {
        Rectangle rect = new Rectangle(5, 10);

        System.out.println("Szerokość: " + rect.getWidth());
        System.out.println("Wysokość: " + rect.getHeight());

        System.out.println("Pole powierzchni: " + rect.getArea());
        System.out.println("Obwód: " + rect.getPerimeter());

        rect.setWidth(8);
        rect.setHeight(12);

        System.out.println("Nowa szerokość: " + rect.getWidth());
        System.out.println("Nowa wysokość: " + rect.getHeight());
    }
}
