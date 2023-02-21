#include <stdio.h>

int add (int x, int y){
    int z;

    z = x + y;

    return (z);
}

int main () {
    int a = 10;
    int b = 23;
    int c;

    c = add (a, b);

    printf("sum = %d\n", c);
}