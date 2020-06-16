class Obstacles {
    constructor(randomY,img) {
        this.x = game.width;
        this.y = randomY;
        this.img = img;
        // this.width = this.img.width;
        // this.height = this.img.height;
    }

    setup(){
        // console.log(game.obstacles);
     /*    let randomElem = game.obstacleImages[Math.floor(Math.random()*game.obstacleImages.length)];
        this.obstacleImages.push(new Obstacles(randomElem.height,randomElem.src));
 */
    }

    drawingObstacles() {
        this.x -= 10
        image(this.img, this.x, this.y,175,175);
    }

        

        // frameRate(20);
        //  this.background.drawingBackground();
       

        // if (frameCount % 20 === 0) {
        //     let randomNumber = random(0, height - 60);
        //     this.obstacles.push(new Obstacles(randomNumber));
        //   }
        //   this.obstacles.forEach((elem) => {
        //     elem.drawingObstacles();
        //   });
}