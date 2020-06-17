const game = new Game();
const obstacle = new Obstacles();
const targets = new Targets();

function preload() {
  game.preloadGame();
}

function setup() {
  createCanvas(game.width, game.height);
  obstacle.setup();
}

function draw() {
  game.drawingGame();
}

function keyPressed() {
  game.obstacles.forEach((obs) => {
    if (keyCode === 189 && obs.collides() && obs.type == 1){
    // if (keyCode === 189 && obs.collides() && obs.type == 1){
      console.log("please work", obs.type);
      // console.log("key press function");
    } else if (keyCode === 80 && obs.collides() && obs.type == 2){
      console.log("i do work cherry", obs.type);
      // obstacle.checkCollision.collideCherry();
    } else if (keyCode === 76 && obs.collides() && obs.type == 3) {
      console.log("i work 7", obs.type);
      // obstacle.checkCollision.collideSeven();
    } else if (keyCode == 188 && obs.collides() && obs.type ==4) {
      console.log("i work bell", obs.type);
      // obstacle.checkCollision.collideWatermelon();
    }
  });
}
