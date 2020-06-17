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
    this.x -= 5;
    image(this.img, this.x, this.y, 150, 150);
    // console.log("type??!!!!", this.type);
  }

  collides() {
    if (this.x <= 0) {
      return false;
    } else if (this.x < 300) {
      console.log("x cood in collide", this.x);
      //*******************************************show collision********************************************************* */
      //game.showCollidedIcon(this.type)
      console.log("collides function");
      return true;
    }else{
      return false
    } 
  }
}
