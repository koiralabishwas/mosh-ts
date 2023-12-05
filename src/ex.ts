type Value = unknown | 'a'

let value : Value ;

if (typeof value === 'string') {
  console.log(value.toUpperCase())
} else {
  console.log(typeof value)
}