class Account {
    constructor (an, hn, bal){
        this.accountNumber = an;
        this.holdersName = hn;
        this.balance = bal;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw (amount){
        this.balance -= amount;
    }

    print(){
        console.log(`${this.accountNumber} ${this.holdersName} ${this.balance}`);
    }
}

var eich = new Account(100101, "Brendan Eich", 100000);
var marc = new Account(100102, "Marc Andreesson", 20000);
eich.print();
marc.print();