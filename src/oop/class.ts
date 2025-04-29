// this is a class
class Account {
  // readonly id : number ; // onlly can be set in constructor once ,
  // owner : string;
  // private _balance : number ;
  // nickname? : string ;

  // constructor にすべて　プロパティを集約して定義できる！！！　そしたら　上の定義と this.なんちゃらが不要になる。
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickname?: string
  ) {
    // this.id = id
    // this.owner = owner
    // this._balance = balance
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid Error");
    }
    this._balance += amount;
  }

  // getBalance() {
  //   return this._balance;
  // }
  // we can use getter and setter , getter is a method to get a value , setter is used to set a value with some rules and validations
  get balance() {
    return this._balance;
  }
  // set balance(value : number) {
  //   if (value < 0 ) {
  //     throw new Error('Error : Invalid value')
  //   }
  //   this._balance = value
  // }
}

// this is a object created by a class
const bishwasAccount = new Account(1, "Bishwas", 100);
bishwasAccount.deposit(2000);

console.log(bishwasAccount instanceof Account);

//console.log(bishwasAccount.balance) // private を直接アクセス不可能
// console.log(bishwasAccount.getBalance());
bishwasAccount.nickname = "BBBBBB";
console.log(bishwasAccount.nickname);
bishwasAccount.balance = -1;
console.log(bishwasAccount.balance);
