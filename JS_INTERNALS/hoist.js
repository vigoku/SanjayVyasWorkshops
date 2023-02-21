console.log(v);

var v; // moves it up

print();

function print() { //hoists function declaration
    console.log("i");
}


class C {

}
var c  = new C(); // class does not hoist


console.log(x)
let x = 5; // let and const etc does not hoist