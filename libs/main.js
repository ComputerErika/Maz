define(function (require) {

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const game = require("./libs/game/game.js");

game.start(canvas, ctx)
game.loop(game)

setInterval(game.loop, 10, game);
});
