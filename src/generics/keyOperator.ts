interface Product {
  name : string , 
  price :number
}

class SStore<T> {
  protected objects : T[] = []

  add(obj : T) : void {
    this.objects.push(obj)
  }

  find(property : keyof T , value : unknown) : T | undefined {
    return this.objects.find(obj => obj[property] === value)
  }
}

let sstore = new SStore<Product>()
sstore.add({name : "Bishas" , price : 999})
sstore.find('name' , 'a')
sstore.find('price' , 'a')
// sstore.find('preventpassingNoxExistingPropertyWithKEYOF' , 'a')
