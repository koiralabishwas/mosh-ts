interface Product {
  name : string 
  price : number
}

// dynamically creating a new property with readonly properties

type ReadOnlyProducts = {
  // indexSignatures
  // keyOfOperators

  readonly [K in keyof Product] : Product[K]
}

let product : ReadOnlyProducts = {
  name : "Yuugi",
  price : 1
}

// cannot change because it is readonly
// product.name = "cannot be changed"


//// using with generic
// checkot typescript utility types https://www.typescriptlang.org/docs/handbook/utility-types.html
type ReadOnly<T> = {
  readonly [K in keyof T] : T[K]
}
type Optional<T> = {
   [K in keyof T]? : T[K]
}
type Nullable<T> = {
  [K in keyof T] : T[K] |null
}


let prd : ReadOnly<Product> = {
  name : "Banana" , 
  price : 11
}
