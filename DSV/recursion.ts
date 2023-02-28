function recursion(n:number) : number {
    if (n == 1) return 1;
    else return n * recursion(n - 1);
}

const factorial = recursion(10446);
console.log(factorial);