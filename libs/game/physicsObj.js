define({

physicsObject: {
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  update() {
    this.x += this.dx
    this.y += this.dy
  }
}

});
