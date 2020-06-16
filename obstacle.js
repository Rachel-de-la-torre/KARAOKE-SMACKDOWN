class Obstacles {
  constructor(randomY, img, type) {
    //   the type will be a random number
    this.type = type;
    this.x = game.width;
    this.y = randomY;
    this.img = img;
  }

  setup() {}

  drawingObstacles() {
    this.x -= 10;
    image(this.img, this.x, this.y, 150, 150);
    // console.log("type??!!!!", this.type);
  }

  // collides(collideCherry){  ----------------------> = key 80
  collides() {
    //   first we check if it's off the screen/canvas to the right
    if (this.x <= 0) {
      return false;
      //   then we check if the target lines up with obstacle's x value
    } else if (this.x < 300) {
      console.log("x cood in collide", this.x);
      console.log("collides function");
      return true;
    }
  }
}
