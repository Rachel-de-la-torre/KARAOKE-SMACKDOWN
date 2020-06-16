class Targets {
    constructor() {
        this.x = 100;
        this.width=150
        // this.collideBell = imgbell;
        // this.imgCherry = collideCherry;
        // this.imgSeven = collideSeven;
        // this.imgWatermelon = collideWatermelon;

    }

    preload (){
        this.imgbell = loadImage("/assets/belltrigger.png");
        this.imgCherry = loadImage("/assets/cherrytrigger.png");
        this.imgSeven = loadImage("/assets/seventrigger.png");
        this.imgWatermelon = loadImage("/assets/watermelontrigger.png");
    }
    
    drawingTargetsImg(){
        image (this.imgbell, 100, 100, 150, 150),
        image (this.imgCherry, 100, 250, 150, 150),
        image (this.imgSeven, 100, 400, 150, 150),
        image (this.imgWatermelon, 100, 550, 150, 150)
    }

    // checkCollision(collideBell) {
    //     let leftSide = this.x;
    //     let rightSide = this.x + this.width;
    // }


    // checkCollision(obstacle) {
    //     let leftSide = this.x;
    //     let rightSide = this.x + this.width;
    //     let playerLeftSide = player.x;
    //     let playerRightSide = player.x + player.width;
    //     console.log(obstacle);
    // }

}















    // drawingCollision() {
    //     // this.x -= 10
    //     // image(this.colImg, 600, this.y, 200, 200);
    //     // rect(100, 0, 55, game.height);
    // //        this.collisionImages = [
    // //    { src: loadImage("/assets/belltrigger.png"), x: 50, height: 100},
    // //    { src: loadImage("/assets/cherrytrigger.png"), x: 50, height: 250},
    // //    { src: loadImage("/assets/seventrigger.png"), x: 50, height: 400},
    // //     { src: loadImage("/assets/watermelontrigger.png"), x: 50, height: 550}
    // //     ];
    // }