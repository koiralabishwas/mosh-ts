type Customer = {
  birthday? : Date
  // making birthday optional
}

function getCustomer(id : number) : Customer | null |undefined {
  return id === 0 ? null : {birthday : new Date()}
  // if id is 0 return null otherwise customer object{birthday}
}


let customer = getCustomer(1)
// optional property access operator
  console.log(customer?.birthday?.getFullYear()) //get full year
  // gets executed if customer not null or undefined

  // optional element access operator
  let log : any = null

  log?.('a')
  // only executed if log reference a function