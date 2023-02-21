
function change (num, array){
    num = 10;
    //array = [4,5,6]; // creates a copy 
    array[0] = 10; // goes to the location and changes first element
}

function changeObj(test){
    //test.id = 2; // Changes the passed 
    test = {id : 1, name : 'vgk'};
    console.log(test);
    return test;
}

no = 4
arr = [1,2,3]
change (no, arr); // pass arr(ref) by value

console.log(no);
console.log(arr);

var o = {id : 1};
o = changeObj (o);
console.log(o);

