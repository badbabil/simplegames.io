import Paddle from "/paddle.js";
import InputHandler from "/input.js";

var canvas =  document.getElementById("gamescreen")

var ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)

paddle.draw(ctx)

// ctx.clearRect(0, 0, 800, 600)
let lastTime = 0
function gameloop(timestamp){
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp

    ctx.clearReact(0, 0, 800, 600)
    paddle.update(deltaTime);
    paddle.draw(ctx)

    requestAnimationFrame(gameloop)
}