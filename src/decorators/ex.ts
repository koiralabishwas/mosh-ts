function Sauce(sauce : string ) {
  return (constructor : Function) => {
    constructor.prototype.sauce = sauce
  }
}

@Sauce('pesto')
class Pizza{}

let piz = new Pizza()

//いみわからん
console.log((piz as any).sauce)
