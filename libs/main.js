define(function (require) {
  const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

physObj = require("./game/physicsObj");

let player = Object.assign({}, physObj.physicsObject);
player.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, 11, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
player.dx = 1

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw()
  player.update()
}

setInterval(update, 10);
});
