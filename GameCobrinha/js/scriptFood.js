let food = {
    x: 2,
    y: 0
}

const EXPANSION_RATE = 1;

export function update() {

}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}