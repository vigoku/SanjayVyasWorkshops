'use strict';

function sqr(x){
    return x * x;
}

console.log(sqr(5));

function sqr(x) {return x*x;} //~! declaration
var sqr = function(){return x*x}//~*expression


var sqr = (x) => {return x*x} //~? Lambda
var sqr = (x) =>         x*x  //~% single return remove block and return
var sqr =  x  =>         x*x  //~^ single para, remove para 

console.log(sqr(5));

//fat arrow cant do new 
// no kids allowed
// no arguments

//var test = new sqr(5); // error