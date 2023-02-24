#include<stdio.h>
#include<stdarg.h>

int add (int count, ...){

    int sum;
    va_list list;
    va_start(list, count);
    for (int i = 0; i < count; i++){
        sum+=va_arg(list, int);
    }
    va_end(list);
    return sum;
}

int main (){
    int result = add(5, 1, 3, 5, 7, 9);

    printf("result = %d\n", result);
    return 0;
}