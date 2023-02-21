//~* allow function inside function
//* javascript, python, dart

//~% allow classes inside classes
//~% c++, java, c#, python

//~! both - python

function outer(){
    var outerVar = 5;
    console.log("outer", outerVar)
    function inner (){

        var innerVar = 10;

        //CLOSURE -- outerVar
        console.log("inner", innerVar, outerVar);
    }
    // dont call, return
    return inner;
}
outer()();