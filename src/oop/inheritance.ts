/**
 * エラー回避のためコメントアウトしている
 */




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

  private priv() {
    console.log('can only be accessed within the class .not in object. also dont get inherited')
  }

  protected prot() {
    console.log('can be accessed in inherited class . cannot be accessed in object or inherited object')
    this.priv()
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
    this.prot() // protected methods are inheritable
  }}


}


let student = new Student(1 , "Bishwas" , "Koirala")
//  student. has all methods and properties from PersonClass + StudentClass

class Teacher extends Person {
  // can override getName() method from inherited Person Class
  override get fullName() {
    // return 'Proffesser' + this.firstName + this.lastName
    return 'Professer ' + super.fullName // can shortcut with this super 
  }
}

let teacher = new Teacher("Johs" , "Smith")
console.log(teacher.fullName)
