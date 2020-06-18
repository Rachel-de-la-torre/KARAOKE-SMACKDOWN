class Background {
    constructor () {}

    drawingBackground() {
        game.backgroundImgs.forEach(function(elem){
            elem.x -= elem.speed;
            image(elem.src, elem.x, 0, width, height);
            image(elem.src, elem.x + width, 0, width, height);
            if(elem.x <= -width){
                elem.x = 0;
            }
        });

    }
}



