function render(document : unknown) {
  // we can pass whatever if it is unknown
  // document.move()
  // document.whateverwewand()

  // Narrowing can excess all property of the instance | types ??
  if (typeof document === "string") {
    document.toLowerCase()
    document.split("")
  }

  if (document instanceof Node) {
    document.getRootNode()
  }
}
