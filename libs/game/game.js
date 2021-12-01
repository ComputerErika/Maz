define(function(require) {
  return {
  _objects: [],
  _toInitObjs: [],
  canvas: null,
  ctx: null,


  loop(game) {
    game._toInitObjs.forEach( function(obj, i, array) {
      // Remove obj from init list
      game._toInitObjs.splice(game._toInitObjs.indexOf(obj), 1)

      // Init the obj
      obj.init()

      // Add the obj to main obj list
      game._objects.push(obj)
    })

    // Clear the canvas
    game.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update each object and draw them
    game._objects.forEach( obj => {
      obj.preUpdate()
      obj.update()
      obj.draw()
      obj.postUpdate()
    })
  },

  addObj(obj) {
    this._toInitObjs.push(obj)
    console.log("AddedObject")
    console.log(obj)
    console.log(this._toInitObjs)
  },

  start(canvas, ctx) {
    this.canvas = canvas
    this.ctx = ctx

    console.log("Starting")

    //Add Ball
    const ball = require("./physicsObj.js")
    ball.dx = 2
    ball.y = canvas.height/2
    ball.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
    this.addObj(ball)
  }
}
});
