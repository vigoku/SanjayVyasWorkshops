#include<stdio.h>
#define TRUE 1
#define FALSE 0
#define boolean int
#define isBool(a) a==1?TRUE:FALSE
/**
 * test
*/
int add (int a, int b) {
    return a + b;
}
void main(){
    /*
    */
    int a = 10;
    int b = 20; //var
    int c = add (a, b);
    printf("%d\n ", c);

    float f = 3.141529;
    printf("%f", f);

    boolean bull = TRUE;
    printf("boolean b = %d", isBool(bull));
}