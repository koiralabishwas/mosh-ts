interface Prouduct {
  name : string , 
  price :number
}

class Store<T> {
  private objects : T[] = []

  add(obj : T) : void {
    this.objects.push(obj)
  }
}

class CompressibleStore<T> extends Store<T> {
  compress (){}
}

// class SearchableStore<T>


let store = new Store<Prouduct>()
store.add({name : "onion" , price : 100})


let comStore = new CompressibleStore()
comStore.add({name : "tomato" , price : 200 })
comStore.compress()
