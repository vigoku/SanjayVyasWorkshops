function Account (an, hn, bal) {
    this.accountNumber = an;
    this.holdersName = hn;
    this.balance = bal;
}

Account.prototype.deposit = function(amount){
    this.balance+=amount;
}

Account.prototype.withdraw = function(amount){
    this.balance-=amount;
}

Account.prototype.print = function(){
    console.log(`${this.accountNumber} ${this.holdersName} ${this.balance}`);
}

function SavingsAccount (an, hn, bal) {
    //~^ using call sends different this object 
    Account.call(this, an, hn, bal);
}

SavingsAccount.prototype.withdraw = function(amount) {
    if (this.balance - amount < 5000){
        throw new Error("Insufficient Balance");
    }
    // pareant of parent of eich
    var parent = Object.getPrototypeOf(Object.getPrototypeOf(this));
    parent.withdraw.call(this, amount);
}


//~! __proto__ is non std property
//SavingsAccount.prototype.__proto__ = Account.prototype
Object.setPrototypeOf(SavingsAccount.prototype, Account.prototype);

//~* Safer prescribed method
//SavingsAccount.__proto__ = Account;
Object.setPrototypeOf(SavingsAccount, Account);

var eich = new SavingsAccount(1, "Brendan", 10000);

//eich.withdraw(10000);
eich.withdraw(1000)
eich.print();