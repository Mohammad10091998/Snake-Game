const GRID_SIZE = 21;
let SCORE = 0;

export default class Food{
    constructor(gameBoard,snake,scoreElement){
        this.snake = snake;
        this.gameBoard = gameBoard;
        this.scoreElement = scoreElement;
        this.foodPosition = {x:5,y:11};
    }

    update(){
        let isOnSnake = this.snake.onSnake(this.foodPosition);
        if(isOnSnake){
            this.snake.expandSnakeBody();
            this.foodPosition = this.getRandomFoodPosition();
            this.scoreElement.innerHTML = ++SCORE;
        }
    
    }

    draw(){
        const food = document.createElement('div');
        food.style.gridRowStart = this.foodPosition.y;
        food.style.gridColumnStart = this.foodPosition.x;

        food.classList.add('food');
        this.gameBoard.appendChild(food);
    }

    getRandomFoodPosition(){
        let newFoodPostition;
        while(newFoodPostition == null || this.snake.onSnake(newFoodPostition)) {
            newFoodPostition =  {x :Math.floor(1 + Math.random()*GRID_SIZE),
                y : Math.floor(1 + Math.random()*GRID_SIZE)};
        }

        return newFoodPostition;
    }

    
}