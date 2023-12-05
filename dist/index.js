"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('invalid amount');
        this.balance += amount;
    }
}
let account;
account = new Account(1, 'Mosh', 0);
account.deposit(1);
console.log(account);
//# sourceMappingURL=index.js.map