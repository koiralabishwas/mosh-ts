function Capitalize(target : any , methodName : string , descriptor : PropertyDescriptor) {
  const original = descriptor.get
  descriptor.get = function () {
    original!.call(this)
    const result = original?.call(this)
    if (typeof result === "string") {
      return result.toUpperCase()
    }
    return result

  }
}

class DPerson {
  constructor(public firstName : string , public lastName : string) {}

  @Capitalize
  get fullname () {
    return `${this.firstName} ${this.lastName}`
  }
}

let person = new DPerson('mosh'   , 'hamedani')
console.log(person.fullname)
