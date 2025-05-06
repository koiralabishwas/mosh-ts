interface Prouduct {
  name : string , 
  price :number
}

class Store<T> {
  protected objects : T[] = []

  add(obj : T) : void {
    this.objects.push(obj)
  }
}

let store = new Store<Prouduct>()
store.add({name : "onion" , price : 100})


// pass on the generic type parameter from base class to child class 
class CompressibleStore<T> extends Store<T> {
  compress (){}
}
let comStore = new CompressibleStore()
comStore.add({name : "tomato" , price : 200 })
comStore.compress()


// Restricting the generic type parameter 
class SearchableStore<T extends {name : string }> extends Store<T> {
  find(name : string) : T | undefined {
    return this.objects.find((obj) => obj.name === name)
  }
}


// Fix ? Terminate ?? the generic type parameter
class ProuductStore extends Store<Prouduct> {
  filterByCategory(category : string) : Prouduct[] {
    return []
  }
}


