let speed : number | null = 10

let ride = {
  // nullish coaleshing operator => if speed is not null , use the speed value , else use 30 
  speed : speed || 30
}

console.log(ride.speed)
