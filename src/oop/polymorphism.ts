 class Person {
  constructor(
    public firstName : string ,
    public lastName : string
  ){}

  get fullName(){
    return this.firstName +' ' + this.lastName
  }


  public walk() {
    console.log('waling')
  }
}


class Student extends Person {
  constructor(
    // need to add all properties including the inherited properties
    public studenId : number,
    firstName : string,
    lastName : string
  ){
    // call parent Class property inside super()
    super(firstName , lastName)
  }

  takeTest() {{
    console.log('Taking the tests')
  }}
}


class Teacher extends Person {
  // can override getName() method from inherited Person Class
  override get fullName() {
    // return 'Proffesser' + this.firstName + this.lastName
    return 'Professer ' + super.fullName // can shortcut with this super 
  }
}


class Principal extends Person {
  override get fullName() {
    return 'Principal ' + super.fullName // this super refers Teacher
  }
}

/**
 *  ///open close principal
 *  Our code must be open to extenstion and close to modification
 *  ---> we should able to extend or inheri from them , not suitable to modify them
 */
/////// polymorphism IN Action

printNames([
  new Student(1 , "John" , "Smith"),
  new Teacher("Mosh" , "Hamedani"),
  new Principal("Gede" , "Sasti")
])


// here , parameter excepts Person , we can also pass other class that inherits person
function printNames(people : Person[]) {
  for (let person of people) {
    console.log(person.fullName)
  }
}

