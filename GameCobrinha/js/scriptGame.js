import { update as updateSnake, draw as drawSnake } from './scriptSnake.js';
import { SNAKE_SPEED, getSnakeHead } from './scriptSnake.js';
import { update as updateFood, draw as drawFood } from './scriptFood.js';
import { outsideGrid } from './scriptGrid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board'); 

requestAnimationFrame(main);

function main(currentTime) {
    if(gameOver) {
        if(confirm('Você perdeu!')) {
            location = '/';
        }
        return;
    }
    requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime
    update();
    draw();
}

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}