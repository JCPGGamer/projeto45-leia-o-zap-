class Bomb{
    constructor(w,h){
   this.x = this.positionX
   this.y = this.positionY
   this.h = this.height
   this.w = this.width
    }

    bombExplode(){
        if(mousePressed){
            this.h = 0
            this.w = 0
            
        }
    }
}