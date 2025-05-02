/// we can only use it by inheriting . we cannot create a instance from abstract calss
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void; // should not have any implementaion here , should be implemented by overridation of other class
  // can oly exist in abstract classes
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void { //
    console.log("logic must be implemented by ovveriding abstract class's abstract method")
  }
}

const c = new Circle(2, "white");
c.render();
