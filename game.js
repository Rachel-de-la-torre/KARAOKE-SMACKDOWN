class Game {
    constructor() {
      this.background = new Background();
      this.obstacles = [];
      this.width = 1500;
      this.height = 800;
      this.frequency = 100;
    }
  
    preloadGame() {
      targets.preload();
      this.backgroundImgs = [
        { src: loadImage("/assets/background0.png"), x: 0, speed: 0},
        { src: loadImage("/assets/background1.png"), x: 0, speed: .5},
        { src: loadImage("/assets/background2.png"), x: 0, speed: 1}
        
      ];
      this.obstacleImages = [
        { src: loadImage("/assets/bell.png"), x: 0, height: 100, type: 1 },
        { src: loadImage("/assets/cherry.png"), x: 0, height: 250, type: 2 },
        { src: loadImage("/assets/seven.png"), x: 0, height: 400, type: 3 },
        { src: loadImage("/assets/watermelon.png"), x: 0, height: 550, type: 4 }
      ];

      this.collisionImgs = [
        { src: loadImage("/assets/bellCollision.png"), x: 0, height: 100, type: 1},
        { src: loadImage("/assets/cherryCollision.png"), x: 0, height: 250, type: 2},
        { src: loadImage("/assets/sevenCollision.png"), x: 0, height: 400, type: 3},
        { src: loadImage("/assets/watermelonCollision.png"), x: 0, height: 550, type: 4}
      ];
      // this.bellCollision = {src: loadImage("/assets/bellCollision.png"), x: 0, height: 100, type: 1},
      // this.cherryCollision = {src: loadImage("/assets/cherryCollision.png"), x: 0, height: 250, type: 2},
      // this.sevenCollision = { src: loadImage("/assets/sevenCollision.png"), x: 0, height: 400, type: 3},
      // this.watermelonCollision = { src: loadImage("/assets/watermelonCollision.png"), x: 0, height: 550, type: 4}
    }
    // *****************************************************this collision img render method**************************  
    // collisionIcon(type) {
    //       if(type == 1 && obstacle.collides){
    //         render this.collisionImgs(...)}
    // }

  
    drawingGame() {
      // console.log("iamdrawing");
      // console.log(this.obstacles)
      clear();
      // frameRate(30)
      this.background.drawingBackground();
      // *****************************************************this is drawing collision**************************  
      // this.drawingCollisionImg();



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
        // console.log(randomElem);
      }
      this.obstacles.forEach((elem) => {
        elem.drawingObstacles();
      });
  
      targets.drawingTargetsImg();
    }
  }



    