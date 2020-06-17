const game = new Game();
const obstacle = new Obstacles();
const targets = new Targets();
let points =0

function preload() {
  game.preloadGame();
}

function setup() {
  createCanvas(game.width, game.height);
  obstacle.setup();
}

function draw() {
  game.drawingGame();
  console.log(points);
}

function keyPressed() {
  game.obstacles.forEach((obs) => {
    if (keyCode === 189 && obs.collides() && obs.type == 1){
      // console.log("please work", obs.type);
      points++;
      let saveImg=targets.imgbell
      targets.imgbell = game.collisionImgs[0].src;
      setTimeout(function(){ targets.imgbell=saveImg}, 2000); 
  
    } else if (keyCode === 80 && obs.collides() && obs.type == 2){
      // console.log("i do work cherry", obs.type);
      points++;
      let saveImg=targets.imgCherry
      targets.imgCherry = game.collisionImgs[1].src;
      setTimeout(function(){targets.imgCherry=saveImg}, 2000);
      
    } else if (keyCode === 76 && obs.collides() && obs.type == 3) {
      // console.log("i work 7", obs.type);
      points++
      let saveImg=targets.imgSeven
      targets.imgSeven = game.collisionImgs[2].src;
      setTimeout(function(){targets.imgSeven=saveImg}, 2000);

    } else if (keyCode == 188 && obs.collides() && obs.type ==4) {
      // console.log("i work watemelon", obs.type);
      points++
      let saveImg=targets.imgWatermelon
      targets.imgWatermelon = game.collisionImgs[3].src;
      setTimeout(function(){targets.imgWatermelon=saveImg}, 2000);

    }
  });

}
