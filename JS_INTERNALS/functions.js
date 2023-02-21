//~^ use strict to restrict any global
//'use strict';

//! global function
gfn = function () {
    console.log(`gfn ${this}`); // this global
}

gfn();
//~ expression function
var vfn = function () {
    console.log(`vfn ${this}`); // this global
    //this.Array = 1; //~! overrides the Array function in global context
}

vfn();

//~% declartion
function lfn() {
    console.log(`lfn ${this}`); // this global
    var list = new Array(5);
}

lfn();

var person = {
    id: 1,
    name: "Brendan",
    //~^ functions inside object point to object itself
    print: function () {
        console.log(`${this}`);
    }
}
person.print();

console.log(`${this}`);