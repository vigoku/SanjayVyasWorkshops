class Person {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    print(){
        console.log(this.id, this.name);
    }
}
 
module.exports =Person;