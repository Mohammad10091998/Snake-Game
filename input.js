export default class InputHandler{
    constructor(){
        this.direction = {x:0,y:0};
        this.lastDirection = {x:0,y:0};
        document.addEventListener('keydown',(event) =>{

            switch(event.key){
                case 'ArrowUp':
                    if(this.lastDirection.y != 0){
                        break;
                    }
                    this.direction = {x:0,y:-1};
                    this.lastDirection = {x:0,y:-1};
                    break;

                case 'ArrowDown':
                    if(this.lastDirection.y !=0){
                        break;
                    }
                    this.direction = {x:0,y:1};
                    this.lastDirection = {x:0,y:1};
                    break;
                    
                case 'ArrowLeft':
                    if(this.lastDirection.x !=0){
                        break;
                    }
                    this.direction = {x:-1,y:0};
                    this.lastDirection = {x:-1,y:0};
                    break;
                    
                case 'ArrowRight':
                    if(this.lastDirection.x != 0){
                        break;
                    }
                    this.direction = {x:1, y:0};
                    this.lastDirection = {x:1, y:0};
                    break;    
            }

        })
    }

    getDirection(){
        return this.direction;
    }
}