#include "punkt.h"

Punkt::Punkt(float x, float y) : x(x), y(y) {}

float Punkt::GetX() const {
    return x;
}

float Punkt::GetY() const {
    return y;
}

void Punkt::SetX(float x) {
    this->x = x;
}

void Punkt::SetY(float y) {
    this->y = y;
}
