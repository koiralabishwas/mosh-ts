// limit the passavle types in generics => generic Constrains

function echo<T extends number | string>(value : T) : T {
  return value
}


// only numbers and strings are passable here
echo(1)
echo("a")
// echo(false) // not passable


// can also constrain shapes
function shapeEcho <T extends {name : string , age : number} >(value : T) : Array<T> {
  return [value]
}

let shape = {name : "Bishwas" , age : 99}
shapeEcho(shape)



// can do with interface
interface IPerson {
  name : string
  age : number
}


function interfaceEcho<T extends IPerson>(value : T) : Array<T> {
  return [value]
} 

interfaceEcho({
  name : "Bishwas" ,
  age : 200
})


// can do with classes 
class CPerson {
  constructor (public name : string ,public age : number){}
}

class CTeacher extends CPerson {
  constructor (public subject : string , name : string , age : number) {
    super(name,age)
  }
}

function classEcho<T extends CPerson>(value : T) :Array<T> {
  return [value]
}

classEcho(new CPerson("Bishwas" , 22))
classEcho(new CTeacher("Computer Science" , "Mosh" , 40))
