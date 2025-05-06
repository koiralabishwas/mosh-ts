class KeyValuePair<T,U> {
  constructor (public key : T , public value : U) {}
}

let onePair = new KeyValuePair<boolean , number>(true , 2)
let twoPair = new KeyValuePair<string , number>("s" , 2)
