'use strict';

class Account {
    //~! private fields 
    #accountNumber = 0;
    #holdersName = "bank";
    #balance = 0;

    constructor(an, hn, bal) {
        this.#accountNumber = an;
        this.#holdersName = hn;
        this.#balance = bal;
    }

    deposit(amt) {
        this.#balance += amt;
    }

    withdraw(amt) {
        this.#balance -= amt;
    }

    print() {
        console.log(`${this.#accountNumber} ${this.#holdersName} ${this.#balance}`);
    }

    get balance() {
        this.#method();
        return this.#balance;
    }

    set balance(val) {
        this.#balance = val;
    }

    #method() {
        console.log("DONT DO THIS private method.. every object has copy", this.#accountNumber);
    }
}

var eich = new Account(100101, "Brendan Eich", 100000);
var marc = new Account(100102, "Marc Andreesson", 20000);
eich.print();
marc.print();



console.log(eich.balance);

eich.balance = 1000; //Setter
console.log(eich.balance); // getter

class SavingsAccount extends Account {
    withdraw(amt) {
        if (this.balance - amt < 5000) {
            throw new Error("Insufficient balance");
        }
        super.withdraw(amt);
    }
}

class CurrentAccount extends Account {
    withdraw(amt) {
        if (this.balance - amt < -10000) {
            throw new Error("OD Limit reached");
        }
        super.withdraw(amt);
    }
}

class FixedDeposit extends Account {
    withdraw (amt){
        throw new Error ("Cant withdraw from FD. Go to branch and suffer.");
    }
}


var sa = new SavingsAccount(22, "vgk", 10000);
sa.print();
sa.withdraw(4000);
sa.print();

var ca = new CurrentAccount(23, "sh", 10000);
ca.withdraw(20000);
ca.print();

var fd = new FixedDeposit(43, "kudva", 10000);
fd.print();
fd.withdraw();
