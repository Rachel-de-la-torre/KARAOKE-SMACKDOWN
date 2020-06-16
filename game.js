class Game {
    constructor(){
        this.background = new Background();
        this.obstacles = [];
        this.width=1500
        this.height=790
        // this.obstacleImages = [
        //     { src: loadImage("/assets/bell.png"), x: 0, height: 200},
        //     { src: loadImage("/assets/cherry.png"), x: 0, height: 300},
        //     { src: loadImage("/assets/seven.png"), x: 0, height: 400},
        //     { src: loadImage("/assets/watermelon.png"), x: 0, height: 500}
        //   ];
    }

    preloadGame() {
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
        console.log(this.obstacles);

        clear();
        this.background.drawingBackground();

         if(frameCount%60==0){
            let randomElem=this.obstacleImages[Math.floor(Math.random()*this.obstacleImages.length)];
            this.obstacles.push(new Obstacles(randomElem.height,randomElem.src));
         }
          this.obstacles.forEach(elem=>{
             elem.drawingObstacles()
         }) 

        // frameRate(20);
       

        // if (frameCount % 20 === 0) {
        //     let randomNumber = random(0, height - 60);
        //     this.obstacles.push(new Obstacles(randomNumber));
        //   }
        //   this.obstacles.forEach((elem) => {
        //     elem.drawingObstacles();
        //   });
}
}



    