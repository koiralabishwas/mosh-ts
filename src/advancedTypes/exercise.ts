type User = {
  name : string ,
  age : number ,
  occupation : String 
}


type Bird = {
  fly : () => void
}

type Fish = {
  swim : () => void
}

type Pet = Fish | Bird

type WeekDay = "Monday" | "Tuesday"




let value: unknown = 'a';
// do type narrowing
if (typeof value === 'string')
console.log(value.toUpperCase());

function bar() {
  console.log("bar")
}

let foo;

let x = foo ?? bar()
