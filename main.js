let startGame = false;
let startImg;
let song;
const game = new Game();
const obstacle = new Obstacles();
const targets = new Targets();
let points = 0
let lives = 3




function preload() {
  game.preloadGame();
  startImg = loadImage("./assets/startScreen.png");
  endImg = loadImage("./assets/youDied.jpg");
  song = loadSound("./assets/song.mp3",loaded);
}



function setup() {
  createCanvas(game.width, game.height);
  obstacle.setup();
}



function loaded(){
  song.play()
}



function draw() {
  if (startGame == true){
  game.drawingGame();
} else {
  image(startImg, 0, 0, width, height);
}
  game.obstacles.forEach((obstacle) => {
    if (obstacle.x === -10) {
      lives -= 1;
   }
  });

  text("Score: " + points, 860, 80);
  text("lives: " + lives, 660, 80);
  textSize(50);
  fill("blue")

  if (lives < 0){
    image(endImg, 0,0, width, height);
    //noLoop () 
  }
}





function keyPressed() {

  startGame = true;
if(keyCode===32){
  song.play()
}
  if (lives < 0){
    console.log("here");
    lives = 3;
}

  game.obstacles=game.obstacles.filter((obs) => {
    if (keyCode === 72 && obs.collides() && obs.type == 1){
      // console.log("please work", obs.type);
      points++;
      let saveImg=targets.imgbell
      targets.imgbell = game.collisionImgs[0].src;
      setTimeout(function(){ targets.imgbell=saveImg}, 700); 
      return false
  
    } else if (keyCode === 74 && obs.collides() && obs.type == 2){
      // console.log("i do work cherry", obs.type);
      points++;
      let saveImg=targets.imgCherry
      targets.imgCherry = game.collisionImgs[1].src;
      setTimeout(function(){targets.imgCherry=saveImg}, 700);
      return false
      
    } else if (keyCode === 75 && obs.collides() && obs.type == 3) {
      // console.log("i work 7", obs.type);
      points++;
      let saveImg=targets.imgSeven
      targets.imgSeven = game.collisionImgs[2].src;
      setTimeout(function(){targets.imgSeven=saveImg}, 700);
      return false

    } else if (keyCode == 76 && obs.collides() && obs.type ==4) {
      // console.log("i work watemelon", obs.type);
      points++;
      let saveImg=targets.imgWatermelon
      targets.imgWatermelon = game.collisionImgs[3].src;
      setTimeout(function(){targets.imgWatermelon=saveImg}, 700);
      return false
    } else {return true}
  
  });

}


