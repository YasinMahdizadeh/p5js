var inc = 0.2;
var scl = 20;
var cols, rows;

var fr;

function setup() {
    createCanvas(400,400);
    frameRate(30);
    cols = floor(width / scl);
    rows = floor(height / scl);
    //frameRate Parameter
    fr = createP();
}

function draw() {
    background(20);
    var yoff = 0.00;

    for ( y = 0 ; y < cols; y++) {
        var xoff = 0.00;

        for ( x = 0; x < rows; x++){
            var index = ( x + y * width ) * 4;
            var r = noise(xoff,yoff) * 255;
            var v = p5.Vector.fromAngle(0);
            // fill(r);
            // rect(x * scl, y * scl, scl, scl);
            stroke(185);
            push();
            translate(x * scl, y * scl);
            rotate(v.heading());
            line(0, 0, scl, 0);
            pop();
            xoff += inc;
        }
        yoff += inc;
    }
   //Shows frameRates
    fr.html(floor(frameRate()));
}