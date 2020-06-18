class Obstacles {
  constructor(randomY, img, type) {
    //   the type will be a random number
    this.type = type;
    this.x = game.width;
    this.y = randomY;
    this.img = img;
    // this.counter = 0
  }

  setup() {}

  drawingObstacles() {
    this.x -= 5;
    image(this.img, this.x, this.y);
    // console.log("type??!!!!", this.type);
  }

  collides() {
    if (this.x <= 20) {
 //************ in the future this is where i would add my ******************** */
      // counter ++
      // console.log(counter);
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
