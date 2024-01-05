class Person {
  constructor(
    public name : string
  ) {}
}

class Customer extends Person{

}

function echo<T extends Person>(value:T) : T {
  return value
}

// console.log(echo({name : 'a'}))
console.log(echo(new Customer('a customer')))