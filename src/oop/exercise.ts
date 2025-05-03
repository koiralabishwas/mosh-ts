class Logger {
  constructor(public fileName: "string") {}

  public write(content: string) {
    return content
  }

}

// かぶらないように __ をいれているだけだ
class Person_ {
  constructor (private firstName : string  , public lastName : string) {}
  
  get fullName() {
    return this.firstName + " " + this.lastName
  }

  private fuckOff(){
    console.log('fuck')
  }

}

class Employee extends Person_ {
  constructor(public salary : number , firstName :string , lastName : string) {
    super(firstName, lastName)
  }

}

const nigga = new Employee(30 , "monkey" , "roger")

interface IEmployee {
  name : string,
  salary : number,
  address : Address
}

interface Address {
  street : string ,
  city  : string ,
  zipCode : number
}
