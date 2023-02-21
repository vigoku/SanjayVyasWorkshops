//~* Banking Application 

//~* account
//! FIELDS
//! - accountNumber
//! - holdersName
//! - balance
//? Methods
//? - deposit
//? - withdraw
//? - print

//~* Constuctor funtion
function Account(an, hn, bal){
    this.accountNumber = an;
    this.holdersName = hn;
    this.balance = bal;
}

Account.prototype.deposit = function (amount) {
    this.balance += amount;
}

Account.prototype.withdraw = function (amount) {
    if (this.balance >= amount)
        this.balance -= amount;
    else
        console.log("Insufficient Balance");
}

Account.prototype.print = function (){
    console.log(`${this.accountNumber} ${this.holdersName} ${this.balance}`); //~! STRING INTERPOLATION
}

var eich = new Account(100101, "Brendan Eich", 10000)
var mark = new Account(100102, "Mark Andreessen", 20000)
eich.deposit(5000);

//eich.withdraw(15000);

eich.print();
mark.print();