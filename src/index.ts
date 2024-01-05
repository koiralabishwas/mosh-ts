// class SeatAssignment {
//   // index signature property
//   [seatNumber : string] : string 
// }

// let seats = new SeatAssignment()

// seats.A1 = 'mosh'
// seats.A2 = 'josh'



// seats['A1'] = 'ningma'
// seats['A3'] = 'mosh'
// // console.log(seats)

// // this property has only soingle place in memory
// class Ride {
// // static property fixes its place in the memory
//   private static _activeRides : number = 0;


//   start() { Ride._activeRides++}
//   stop() {Ride._activeRides--}

//   static get activeRides() {
//     return Ride._activeRides
//   }
// }

// let ride1 = new Ride() ;
// ride1.start()

// let ride2 = new Ride() ;
// ride2.start()

// console.log(Ride._activeRides);
