// unstruct
console.log("hello world");
var a = 1;
var b = 2;
var c = a + b;

//~% prcedural
function add (a, b) {
    return a + b;
}

console.log(add(2,3));

function Employee(val){
    this.val=val;
}

var a1 = new Employee(2);
var b1 = new Employee(3);

//~! functional programming
// Pure function
//* f(x) -> x * x -- Lambda calculus --- does not use or modify externals.. should not cause any side effect.

// impure
total = 1;

//impure
function accumulate(num){
    total += num;
    return total;
}

// pure 
function acc (total, num){
    return total + num;
}

// impure 
function test (obj){
    obj.id++;
    return 1;
}

// higher order function -- takes another function as input return function
var a = [1,11,2,22,3,32]

function ascending(a,b){
    return a - b;
}
a.sort(ascending);

console.log(a);


const expenses = [
    {txn:1, desc:"zomato", amount:350},
    {txn:2, desc :"ola", amount : 1500},
    {txn:3, desc:"uber", amout :450}
]

function accumulate(total, exp){
    return total + exp.amount;
}
const sum = expenses.reduce(accumulate, 0)
console.log(sum);
