import Snake from "./snake.js";
import InputHandler from "./input.js";
import Food from "./food.js"

let gameOver = false;

const gameBoard = document.getElementById('game-board');
let scoreElement = document.getElementById('score');

let lastTime = 0;

let inputHandler = new InputHandler();

let snake = new Snake(gameBoard,inputHandler);

let food = new Food(gameBoard,snake,scoreElement);

function gameLoop(currentTime){
    if(gameOver){
        if(confirm('You lost, Press OK to restart')){
            window.location = '/'
        }
        return;
    }

    let secondsSinceLastRender = (currentTime - lastTime)/1000;

    
    requestAnimationFrame(gameLoop);
    
    if(secondsSinceLastRender < 1/snake.snakeSpeed){
        return;
    }

    lastTime = currentTime;
    
    update();
    draw(); 
}


function update(){
    gameBoard.innerHTML = '';
    snake.update();
    gameOver = snake.checkDeath();
    food.update();
}

function draw(){
    snake.draw(gameBoard);
    food.draw(gameBoard);
}

requestAnimationFrame(gameLoop);