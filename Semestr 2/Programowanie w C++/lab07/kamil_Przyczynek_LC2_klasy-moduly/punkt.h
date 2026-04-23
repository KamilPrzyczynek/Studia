#ifndef PUNKT_H
#define PUNKT_H

class Punkt {
private:
    float x;
    float y;
public:
    Punkt(float x = 0, float y = 0);
    float GetX() const;
    float GetY() const;
    void SetX(float x);
    void SetY(float y);
};

#endif // PUNKT_H
