var inc = 0.03;
var scl = 20;
var cols, rows;

function setup() {
    createCanvas(1080,1080);
    frameRate(30);
    cols = floor(width / scl);
    rows = floor(height / scl);

}

function draw() {
    background(20);
    var yoff = 0.00;

    loadPixels();
    for ( y = 0 ; y < height; y++) {
        var xoff = 0.00;

        for ( x = 0; x < width; x++){
            var index = ( x + y * width ) * 4;
            var r = noise(xoff,yoff) * 255;
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;
            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
    noLoop();
}