const GRID_SIZE = 21;
const SNAKE_SPEED = 5;
export default class Snake{
    constructor(gameBoard,inputHandler){
        this.inputHandler = inputHandler;
        this.gameBoard = gameBoard;
        this.snakeBody = [{x:11, y:11}];
        this.snakeSpeed =SNAKE_SPEED;
    }

    update(){
        

        for(let i = this.snakeBody.length -1; i >0; i--){
         
            this.snakeBody[i] = {...this.snakeBody[i-1]}; 
    
        }

        let direction = this.inputHandler.getDirection();

        this.snakeBody[0].x += direction.x;
        this.snakeBody[0].y += direction.y;
    }

    draw(gameBoard){
 
        this.snakeBody.forEach((segment) =>{
            const snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = segment.y;
            snakeElement.style.gridColumnStart = segment.x;
            snakeElement.classList.add('snake');
            gameBoard.append(snakeElement);
        })
       
    }

    onSnake(foodPosition){
        let isOnSnake = this.snakeBody.some((segmentOfSnake) => {
            return segmentOfSnake.x == foodPosition.x && segmentOfSnake.y == foodPosition.y
        });

        return isOnSnake;
       
    }

    expandSnakeBody(){
        this.snakeBody.push({...this.snakeBody[this.snakeBody.length-1]});
    }

    checkDeath(){
        let gameOver = false;
        if(this.outsideGrid() || this.snakeIntercept()){
            gameOver = true;
        }

        return gameOver;
    }

    snakeIntercept(){
        let snakeHead = this.snakeBody[0];
        for(let i = 1; i < this.snakeBody.length; i++){
            if(this.intercept(snakeHead,this.snakeBody[i])){
                return true;
            };
        }
    }

    intercept(snakeHead,snakeRestBody){
        if(snakeHead.x == snakeRestBody.x && snakeHead.y == snakeRestBody.y){
            return true;
        }
    }

    outsideGrid(){
        let snakeHead = this.snakeBody[0];

        if(snakeHead.x < 1 || snakeHead.x > GRID_SIZE || 
            snakeHead.y <1 || snakeHead.y > GRID_SIZE){
                return true;
        }

        return false;
    }
}