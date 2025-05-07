interface Result<T>{
  data : T | null
  error : string |null 
}

function fechhh<T>(_url : string) : Result<T> {
  return {data : null , error : null}
}


interface AUser {
  userName : string 
}

interface Products {
  titile : string 
}

let userResult = fechhh<AUser>("www.wtf.com")
const userName = userResult.data?.userName

let productResult = fechhh<Products>("www.products.com")
const prdName = productResult.data?.titile

