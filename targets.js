class Targets {
    constructor() {
        this.x = 100;
        this.width=150
    }

    preload (){
        this.imgbell = loadImage("./assets/belltrigger.png");
        this.imgCherry = loadImage("./assets/cherrytrigger.png");
        this.imgSeven = loadImage("./assets/seventrigger.png");
        this.imgWatermelon = loadImage("./assets/watermelontrigger.png");
    }
    
    drawingTargetsImg(){
        image (this.imgbell, 100, 100, 150, 150),
        image (this.imgCherry, 100, 250, 150, 150),
        image (this.imgSeven, 100, 400, 150, 150),
        image (this.imgWatermelon, 100, 550, 150, 150)

    }
}















