abstract class Shape {
  constructor (
    public color :string,
  ) {}
  abstract render():void ;
}

class Circle extends Shape{
  constructor(
    public radius : number ,
    // noPunlic needed bcuz already defined
    color : string 
  ){
    super(color);
  }

  override render(): void {
      console.log('rendering a circle')
  }
}



let shape = new Shape('red')
shape.render()