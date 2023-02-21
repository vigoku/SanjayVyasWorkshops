// xerox
function passByVal(val) {
    val++;
}

i = 10;
passByVal(i);
console.count(i); // does not change I

//xerox ,
function passObj(ref){
    ref = {id: 2, name : "mark"};
}
function passObjChange(ref){
    ref.id = 2;
    ref.name = "mark";
    ref.newField = undefined;
}


obj = {id : 1, name : "test"};
passObj(obj);
console.log(obj);

passObjChange(obj);
console.log(obj);
