function echho<T>(arg : T) : T {return arg}

function printName<T extends {name : string}>(obj:T) {
  console.log(obj.name)
}

class Entity <T>{
  constructor(public id : T) {}
}


// key of User returns userId | userName

