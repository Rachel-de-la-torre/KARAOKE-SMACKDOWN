
class Obstacles {
  constructor(randomY, img, type) {
    //   the type will be a random number
    this.type = type;
    this.x = game.width;
    this.y = randomY;
    this.img = img;
    this.lives = 3
  }

  setup() {}

  drawingObstacles() {
    this.x -= 5;
    image(this.img, this.x, this.y);
    // console.log("type??!!!!", this.type);
  }

  offScreen() {
    if (this.x < 45) {
      console.log("hello");
    }
  }


  collides() {
    if (this.x <= 20) {
      return false;
    } else if (this.x < 200) {
      console.log("x cood in collide", this.x);
      //game.showCollidedIcon(this.type)
      // console.log("collides function");
      return true;
    }else{

      return false
    } 
  }
}
