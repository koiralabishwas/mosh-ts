
// funtional way
function wrapInArray<T>(value : T) {
  return [value]
}
let numbers = wrapInArray<boolean>(false) // we get a [1]

// static method way
class ArrayUtils {
  static wrapInArray<T>(value : T) {
    return [value]
  }
}
let string = ArrayUtils.wrapInArray<string>("1") // we get a [""]

// method way
class MArrayUtils {
   wrapInArray<T>(value : T) {
    return [value]
  }
}


let utils = new MArrayUtils()
let objectt = utils.wrapInArray(1) 

