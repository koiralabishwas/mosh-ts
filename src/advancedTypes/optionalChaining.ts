type Customer = {
  birthday : Date
}

function getCustomer(id : number ) : Customer | null | undefined {
  return id === 0 ? null  : {birthday : new Date()}
}

let customer  = getCustomer(0 )

// if (customer !== null)    このif を　？　で省略可能
//optional property access operator 
console.log(customer?.birthday?.getFullYear())

//optional call
let log : any  = null

log?.("hello") // only run if log is a actual function
