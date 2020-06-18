class Game {
    constructor() {
      this.background = new Background();
      this.obstacles = [];
      this.width = 1500;
      this.height = 800;
      this.frequency = 100;
      this.score = 0;
    }
  
    preloadGame() {
      targets.preload();
      this.backgroundImgs = [
        { src: loadImage("/assets/background0.png"), x: 0, speed: 0},
        { src: loadImage("/assets/background1.png"), x: 0, speed: .5},
        { src: loadImage("/assets/background2.png"), x: 0, speed: 1}
        
      ];
      this.obstacleImages = [
        { src: loadImage("/assets/bell.svg"), x: 0, height: 100, type: 1 },
        { src: loadImage("/assets/cherry.svg"), x: 0, height: 250, type: 2 },
        { src: loadImage("/assets/seven.svg"), x: 0, height: 400, type: 3 },
        { src: loadImage("/assets/watermelon.svg"), x: 0, height: 550, type: 4 }
      ];

      this.collisionImgs = [
        { src: loadImage("/assets/bellCollision.png"), x: 0, height: 100, type: 1},
        { src: loadImage("/assets/cherryCollision.png"), x: 0, height: 250, type: 2},
        { src: loadImage("/assets/sevenCollision.png"), x: 0, height: 400, type: 3},
        { src: loadImage("/assets/watermelonCollision.png"), x: 0, height: 550, type: 4}
      ];

      // this.startscreen = [
      //   { srch: loadImage("")}
      // ]
    }


    drawingGame() {
      // console.log("iamdrawing");
      // console.log(this.obstacles)
      clear();
      this.background.drawingBackground();
      
      if(frameCount%500==0){
        this.frequency=Math.floor(this.frequency/1.1)
      }
      if (frameCount %this.frequency  == 0) {
        let randomElem = this.obstacleImages[
          Math.floor(Math.random() * this.obstacleImages.length)
        ];
        this.obstacles.push(
          new Obstacles(randomElem.height, randomElem.src, randomElem.type)
        );
      }
      this.obstacles.forEach((elem) => {
        elem.drawingObstacles();
      });
      targets.drawingTargetsImg();
    }
  }



    