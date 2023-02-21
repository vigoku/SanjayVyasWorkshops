var sqr = x => x*x;

//~* Functional methods of array

var anotherArray= [];
function anotherFunction(element) {
    //console.log("element : " , element);
    anotherArray.unshift(element);
}
var array = [11,12,32,33];
console.log(array);
//*for each is a HOF
//~^ 1. pass another function
array.forEach(anotherFunction);
console.log(anotherArray);

//~^ pass function body
array.forEach(function testing(element) {
    console.log("element", element * 2);
});

//~^ Pass lambda
array.forEach(element => console.log(element));


//~# non fp
var count = 0;
for (var i = 0; i <array.length; i++){
    if (array[i] %2 == 1)
        count++
}
console.log(count);

//~* FP
console.log(array.filter(element => element%2==1).length);
console.log(array.some(element => element%2 == 0));
console.log(array.every(element => element >=10 && element <= 40));

console.log(array.reduce((total,element) => total + element));

//~* map => transform
console.log(array.map(element => Math.sqrt(element)));


console.log(
    array
    .filter(element => element % 2 == 1)
    .reduce((total, element) => total + element)
)   ;