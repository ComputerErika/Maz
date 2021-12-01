define( function(require) {
return Object.assign({}, require("./gameObject.js"), {
  dx: 0,
  dy: 0,
  update() {
    this.x += this.dx
    this.y += this.dy
  }
})

});
