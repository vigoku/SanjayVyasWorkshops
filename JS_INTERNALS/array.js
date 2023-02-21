//~! there are no arrays .. damned things are key value dictionary object
// ! array is an object with length property 

// var array = [11, 23, 34];
var array = {0:1, 1:23, 20:35};
console.log(array[0]);

array[-1] = 5;
array["boo"] = "yeah";
array.hi = "hello";
array[true] = false;
array[{}] = [];
// console.log(array);
array [10] = 20;
console.log(array); // length = largest numeric integer index + 1 