let total = 0;
function accumulate (value) {
    total += value; // !  side effect on total.. not self contained.
    return value;
}


//~* pure function
function sqr(x) { //* -> Same input same output always no matter how many times i call it
    return x * x;
}

console.log(sqr(10));

function howToSort(a,b){
    return b-a;
}
//~* higher order function..  HoF take another function as input
const array = [22,1,11,2,3,30];
//console.log(array.sort())
console.log(array.sort(howToSort))


console.log(array.reduce((total,element) => total + element));

//~* lamba 
const f = x => x * x;

console.log(f(10));