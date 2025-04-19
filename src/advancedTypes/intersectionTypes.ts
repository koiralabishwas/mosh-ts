type Draggable = {
  drag : () => void
}

type Resizable = {
  resize : () => void
}

type UIWidget = Draggable & Resizable

let textBox : UIWidget = { 
  drag : () => "drag method",
  resize : () => "resize method"
}
