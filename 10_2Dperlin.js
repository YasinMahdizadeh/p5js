var xoff = 0.00;
var inc = 0.03;
function setup() {
    createCanvas(1080,1080);
    frameRate(30);
    
}

function draw() {
    background(20);
    loadPixels();
    for ( x = 0 ; x < width; x++) {
        var yoff = 0.00;

        for ( y = 0; y < height; y++){
            var index = ( x + y * width ) * 4;
            var r = noise(xoff,yoff) * 255;
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;
            yoff += inc;
        }
        xoff += inc;
    }
    updatePixels();
    noLoop();
}