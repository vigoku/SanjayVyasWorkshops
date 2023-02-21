//~% Lexical environment begins.
this.boo = "yaejh";
function add(){
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i< arguments.length;i++)
        sum+=arguments[i];

    return sum;
}

console.log(add(5,7,1,8,9))

var arrow = (a,b)=>{
    // lexical this
    console.log("lexical" , this);
    console.log(`${this}`)
    console.log(arguments);
}

arrow(5,7);

function foo (){
    var arrow1 = (a,b) => {
        console.log(`Inside foo ${this}`);
    }
    arrow1();
}

foo();
//~% lexical engironment end 