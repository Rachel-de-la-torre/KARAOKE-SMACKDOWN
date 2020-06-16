class Obstacles {
    constructor(randomY,img) {
        this.x = game.width;
        this.y = randomY;
        this.img = img;

    }

    setup(){

    }

    drawingObstacles() {
        this.x -= 10
        image(this.img, this.x, this.y,150,150);
        // console.log(this.x);
    }

    // collides(collideCherry){  ----------------------> = key 80
    collides(targets){
        if (this.x > 100 && keyPressed === 189){
            console.log(targets.x);
        }
        // if (this.x > target.x + target.width && keyPressed === 80)
        return true
    }
}