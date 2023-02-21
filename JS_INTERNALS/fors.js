var array = [12,13,14];
array[-1] = 5;
array[5] = 10;
array["boo"] = "yeah";
array.hi = "hello";
array[true] = false;
array[{}] = [];

//~? cstyle
console.log('cstyle')
for (var i = 0; i< array.length; i++){
    console.log(i, array[i]);
}
console.log();

//~? for in index
console.log("for in");
for (var index in array){
    console.log(index, array[index]);
}
console.log();

//~? for of value of 
console.log("for of");
for(var value of array){
    console.log (value);
}
console.log();

//~? forEach
console.log("for each");
array.forEach(element => {
    console.log(element);
});
console.log();