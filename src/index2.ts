// generic  interface

// we have website 

interface Result<T> {
  data : T | null
  error : string | null
}

function fetch(url : string) : Result<T>{
  return {data : null , error : null}
}

interface User {
  username : string;
}