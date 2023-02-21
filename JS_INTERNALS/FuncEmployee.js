'use strict';

function Employee (id, name){
    this.id = id;
    this.name = name;
    this.prototype = null;
    // one way 
    //Employee.count = Employee.count+1;
    //count = count+1;
    // another way -- if you dont use direct function without new
    this.constructor.count = this.constructor.count + 1;
    //~^ dont do this !!! every child object will have copy of this
    // this.print = function(){
    //     console.log("ID : " + id + ", Name : " + name);
    // }
}

//~! static member goes to base function object
Employee.count = 0;

//~% goes to function prototype -- Global context
Employee.prototype.baseSalary = 50000;
Employee.prototype.printDetails = function(){
    console.log(this.id + this.name + this.baseSalary);
}
Employee.prototype.prototype = null;
var e = new Employee(1, "vgk");
//e.print();
e.printDetails();


var f = new Employee(2, "avk");
f.printDetails();

//~! DO NOT DO this -- pollutes global
//Employee(3, "test");

Employee.printCount = function () {
    console.log("global. Count = " + Employee.count);
}
Employee.printCount();


console.log("id : " + e.id);
console.log("base sal : " + e.baseSalary);
console.log("non existing : " + e.designation);
console.log("print details : " + e.printDetails());
console.log("count via dad" , e.__proto__.constructor.count);
console.log("count via dad without proto" , e.constructor.count);
console.log("stringify : " + e.toString());