#include <stdio.h>

int main(){
    int x;

    x = 1;
    printf("%d\n", x);
    x = 1.1;
    printf("%f\n", x);
    x='a';
    printf("%c\n", x);
    x = "vgk";
    printf("%s\n", x);
    x = &x ;

    printf("%x\n", x);
}