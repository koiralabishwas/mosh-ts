class Account {
  id : number ;
  owner : string ;
  balance : number ;

  constructor(id : number , owner : string, balance :number) {
    this.id = id 
    this.owner = owner 
    this.balance = balance
  }

  deposit( amount : number ) : void {
    if (amount <= 0)
      throw new Error('invalid amount')

    this.balance += amount
  }

}

// using new we can create an object from existing class
let account = new Account(1 , 'Mosh',0)
account.deposit(1)
console.log(account);
// console.log(typeof account)
console.log(account instanceof Account)


// Union 
// if (type of )