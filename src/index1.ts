class Person { 
  constructor(public firstName: string, public lastName: string) {}

    get fullName() {
      return this.firstName + ' ' + this.lastName
    }

    walk() {
      console.log('walking')
    }
}


// inheriting from person to student
class Student extends Person {
  constructor(public studentId : number ,  firstName : string ,  lastname : string) {
    super(firstName , lastname)
  }

  takeTest() {
    console.log('taking a test')
  }
}

let student = new Student(1,"John" , 'john@gmail.com' )


class Teacher extends Person {
  // add Professor in front of full name
  override get fullName() {
    return 'Professor ' + super.fullName
  }
}

class Principal extends Person {
  override get fullName() {
    return 'Principal ' + super.fullName
  }
}

let teacher = new Teacher ('John', 'Smith')

prnitNames([
  new Student(1 , 'john' , 'smith'),
  new Teacher('Mosh' , 'hamedani'),
  new Principal('Bihwas','Koirala')
])

function prnitNames ( people : Person[]) {
  for (let person of people) {
    console.log(person.fullName)
  }
}