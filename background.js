class Background {
    constructor () {}

    drawingBackground() {
    //width and height are predefined variables from p5, and its the width and height of the canvas
        game.backgroundImgs.forEach(function(elem){
            elem.x -= elem.speed;
            image(elem.src, elem.x, 0, width, height);
            image(elem.src, elem.x + width, 0, width, height);
            if(elem.x <= -width){
                elem.x = 0;
            }
        });
        
        // image(game.backgroundImgs[2].src, 0, 0, width, height);
        // image(game.backgroundImgs[1].src, 0, 0, width, height);
        // image(game.backgroundImgs[0].src, 0, 0, width, height);
    }
}



