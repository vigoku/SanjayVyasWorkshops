#include<stdio.h>

//decl
extern int x;

//decl
int add (int, int);


int main (){
    printf("Hello world\n");// Not used so all good
    // printf ("%d\n", x); //undefined reference to `x'
    printf("%d\n", add(2,3));
}

int add (int a, int b){
    return a + b;
}