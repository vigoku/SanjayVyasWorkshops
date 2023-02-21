function Person (id, name) {
    //this.id = id;
    //~? prop descs
    Object.defineProperty(this, "id", {value:id, writable:false, enumerable:false, configurable:true});

    this.name = name;

    Object.defineProperties(
        this, 
        {
            address: {value: id, writable:false, enumerable:true}
        }
    );
}


var eich = new Person(1, "brendan");
console.log(eich);

eich.id = 2;
console.log(eich);

console.log(eich.id);

Object.defineProperty(eich, "id", {value:2, enumerable:true});
console.log(eich);

console.log(Object.getOwnPropertyDescriptors(eich));