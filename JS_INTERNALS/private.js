// 'use strict';

// //SyntaxError: Unexpected strict mode reserved word
// private  =  1;
// public  =  1;
// protected  =  1;

class X {
    #y =  7;
    z = 5;

    get y(){
        return this.#y;
    }
}

var x = new X();
console.log(x.y);
console.log(x.z);