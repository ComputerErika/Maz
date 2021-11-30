
function main() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  import { physicsObject } from './game/physicsObject.js';

  let player = Object.assign({}, physicsObject);
  player.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 11, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  console.log(player)

  function update() {
    player.draw()
  }

  setInterval(update, 10);
}
