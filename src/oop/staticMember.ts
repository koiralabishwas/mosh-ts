class Ride {
  // static means it belongs to class . not to object
  private static _activeRides : number = 0
  // making it private so we don't directly touch it , and use getter and setter 

  start() {
    // this.activeRides ++
    // as static means it belongs to class , we cannot do this object .insted we do ClassName.method
    Ride._activeRides ++
  }
  stop() {
    // this.activeRides --
    Ride._activeRides --
  }

  // must be static as it is doing smth with property that belongs to class !! not object 
  static get activeRides() {
    return Ride._activeRides
  }

  static set setRides(num : number) {
   Ride._activeRides += num
  }

}

let ride1 = new Ride()
ride1.start()

console.log(Ride.activeRides)
let ride2 = new Ride()
ride2.start()
console.log(Ride.activeRides)

Ride.setRides = 2
console.log(Ride.activeRides)


/**
 * when we make a thing static , that has only one space in memmory .
 * that properties belongs to class and we cannnot have multiple instance of it .
 * It will belong to the class !!! not the object
 */
