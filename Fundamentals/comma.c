#include<stdio.h>

int main (){
    int sum = 0, value;

    // do {
    //     printf("Enter num, 0 to stop:");
    //     scanf("%d", &value);
    //     sum+=value;
    // } while(value != 0);
    // printf("Sum = %d", sum);

    // Comma operator
    while (
        printf("enter num, 0 to stop::"),
        scanf ("%d", &value),
        value != 0
    ) 
        sum += value;

    printf("Sum = %d", sum);

}