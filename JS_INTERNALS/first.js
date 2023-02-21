console.log("Hello World JS!")

//~% boolean
var isFlag= false;
console.log(isFlag, typeof(isFlag));

//~% number
var num = 123.1; //always double 8 bytes
console.log(num, typeof(num));

//~% string
var str = "workshp";
console.log(str, typeof(str));

//~% undefined
var tmp;
console.log(typeof(tmp));

//~% bigint - cant mix bigint with other s
var hooha = 123123123131231239872093810938012863981263091286730127371231231098301928309123;
console.log(hooha, typeof hooha);

const tmp1 = NaN;
console.log(tmp1, typeof(tmp1));

var char = null;
console.log(typeof(char)); 

//~% symbol
var sym = Symbol("mykey"); // stores in dictirionary
console.log(sym, typeof sym);

//~% Map 
//~% Set
//~% Array
//~% Promise
//~% Object

var obj = new Map();
console.log(typeof(obj));

function foo() {
    console.log("test");
}

console.log(foo(), typeof foo);
