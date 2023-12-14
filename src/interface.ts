// abstract class Calendar {
//   constructor(
//     public name : string,
//   ) {}

//   abstract addEvent() : void
//   abstract remoteEvent() : void

// }

// but when using interface

interface Calendar {
  name : string,
  addEvent() : void ,
  remoteEvent() : void

}


interface CloudCalender extends Calendar {
  sync() : void
}

class GoogleCalender implements Calendar {
  name: string

  constructor(public name : string)
  addEvent(): void {
    throw new Error("Method not implemented.")
  }
  remoteEvent(): void {
    throw new Error("Method not implemented.")
  }

}