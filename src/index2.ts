// class KeyValuePair {
//   constructor(
//     public key : number ,
//     public value : string
//   ) {}
// }

// class StringKeyValuePair {
//   constructor(
//     public key : string ,
//     public value : string
//   ) {}
// }

// let pair = new StringKeyValuePair('1',"asdfa")

class KeyValuePair <Tkey , Tvalue> {
  constructor(
    public key : Tkey , public value : Tvalue
  ) {}
}

let pair = new KeyValuePair<number , string>(1,"yes")