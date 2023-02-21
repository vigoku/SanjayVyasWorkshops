//#! Classless
var person = {
    id:1, 
    name:"vgk",
    print:function(){
        console.log("test");
        return "ret val";
    },
    toString:function(){
        return "Override?";
    }
};
person["age"] = 40;
//console.log(person);
//console.log(person.__proto__);

var obj = {};
//* property notation
obj.id = 2;

//! dictioanary notation
obj["name"] = "shilpa";
//! all obj keys become strings except symbol
obj[true] = false;
obj[0] = "test";
//obj["person"] = person;

//console.log(obj["0"]);

console.log(obj[0]);


