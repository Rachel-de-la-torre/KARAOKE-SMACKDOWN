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
    if (keyCode === 189 && obs.collides() && obs.type == 1) {
      console.log("please work", obs.type);
      console.log("key press function");
    } else if (keyCode === 80) {
      // obstacle.checkCollision.collideCherry();
    } else if (keyCode === 76) {
      // obstacle.checkCollision.collideSeven();
    } else if (keyCode == 188) {
      // obstacle.checkCollision.collideWatermelon();
    }
  });
}
