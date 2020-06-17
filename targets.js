class Targets {
    constructor() {
        this.x = 100;
        this.width=150
    }

    preload (){
        this.imgbell = loadImage("/assets/belltrigger.png");
        this.imgCherry = loadImage("/assets/cherrytrigger.png");
        this.imgSeven = loadImage("/assets/seventrigger.png");
        this.imgWatermelon = loadImage("/assets/watermelontrigger.png");

//*******************************************here i preload the collision images********************************************************* */
        // this.collisionImgs = [
        //     { src: loadImage("/assets/bellCollision.png"), x: 0, height: 100, type: 1},
        //     { src: loadImage("/assets/cherryCollision.png"), x: 0, height: 250, type: 2},
        //     { src: loadImage("/assets/sevenCollision.png.png"), x: 0, height: 400, type: 3},
        //     { src: loadImage("/assets/watermelonCollision.png.png"), x: 0, height: 550, type: 4},
        //   ];
    }
    
    drawingTargetsImg(){
        image (this.imgbell, 100, 100, 150, 150),
        image (this.imgCherry, 100, 250, 150, 150),
        image (this.imgSeven, 100, 400, 150, 150),
        image (this.imgWatermelon, 100, 550, 150, 150)
        // console.log(this.imgCherry);
    }
//*******************************************here i drew the collision images********************************************************* */
    // drawingCollisionImg(){
    //     this.collisionImgs
    // }



}















