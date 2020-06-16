// function keyPressed() {
//     if (keyCode == 32) {
//       game.player.jump();
//     }
    
//ABCD

const game = new Game();
const obstacle = new Obstacles();


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