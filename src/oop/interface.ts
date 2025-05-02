

abstract class Calender {
  constructor (public name : string) {}

  abstract addEvent() : void 
  abstract removeEvent() : void

}


// we can Define abstract class like using Interface

interface ICalender {
  name : string 
  addEvent() : void
  removeEvent(): void
}

interface ICloudCalender extends ICalender {
  sync : void
}

class GoogleCalender implements ICalender {
  constructor(public name : string) {}
  addEvent(): void {
    throw new Error("Method not implemented.")
  }
  removeEvent(): void {
    throw new Error("Method not implemented.")
  }
  
}
