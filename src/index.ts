class Account {


  constructor(
    public readonly id : number ,
    public owner : string,
    private _balance :number ,
    public nickname? : string) {
  }

  deposit( amount : number ) : void {
    
    if (amount <= 0)
      throw new Error('invalid amount')
    // record a transaction
    
    this._balance += amount
  }

  private calculateTax() {

  }

  get balance() : number {
    return this._balance
  }
}

// using new we can create an object from existing class
let account = new Account(1 , 'Mosh',0)
account.deposit(1)

console.log(account.balance)
