class Game {
    constructor(){
        this.background = new Background();
        this.obstacles = [];
        this.width=1500
        this.height=800
    }

    preloadGame() {
        targets.preload();
        this.backgroundImgs = [
            {src: loadImage("/assets/background0.png")}
        ];
        this.obstacleImages = [
            { src: loadImage("/assets/bell.png"), x: 0, height: 100},
            { src: loadImage("/assets/cherry.png"), x: 0, height: 250},
            { src: loadImage("/assets/seven.png"), x: 0, height: 400},
            { src: loadImage("/assets/watermelon.png"), x: 0, height: 550}
          ];
    }

    drawingGame() {
        clear();

        
        this.background.drawingBackground();
        // collision.drawingCollisionImg();

         if(frameCount%180==0){
            let randomElem=this.obstacleImages[Math.floor(Math.random()*this.obstacleImages.length)];
            this.obstacles.push(new Obstacles(randomElem.height,randomElem.src));
            // console.log(randomElem);
         }
          this.obstacles.forEach(elem=>{
             elem.drawingObstacles()
         }) 

        targets.drawingTargetsImg();

    }
}



    