function MinLength(length : number){
  return (target : any , propertyNames : string) => {
    let value : string ;
    const descriptor : PropertyDescriptor = {
      get() {return value},
      set(newValue : string) {
        if (newValue.length < length) {
          throw new Error(`${propertyNames}should be at least ${length} characters long.`)
        }
        value = newValue;
      }
    }
    Object.defineProperty(target , propertyNames , descriptor)
  }
 
}

class PDUser {
  @MinLength(4)
  password : string
  constructor (password : string) {
    this.password = password 
  }
}

const user = new PDUser('1234')
user.password = "123" // throws error in this invalid reinitialization
console.log(user.password)
