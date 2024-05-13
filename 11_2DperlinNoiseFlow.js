var inc = 0.2;
var scl = 20;
var cols, rows;

// our time
var zoff = 0;

//particles
var particles = [];
// particles Count
var par_num = 16000;

var fr;
//flow field
var flowfield;

function setup() {



    frameRate(30);
    cols = floor(width / scl);
    rows = floor(height / scl);

    flowfield = new Array(cols*rows);

    //frameRate Parameter
    fr = createP();
    //add particles
    for ( i = 0 ; i < par_num ; i++) {
        particles[i] = new particle();
    }

    var cnv = createCanvas(1080,1080);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    //translate(x,y);

    background(20);

}

function draw() {
    var yoff = 0.00;
    for ( y = 0 ; y < cols; y++) {
        var xoff = 0.00;

        for ( x = 0; x < rows; x++){
            //
            var index = x + y * cols;
            var angle = noise(xoff,yoff,zoff) * TWO_PI;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(0.16);
            flowfield[index] = v;
            //
            //show angel

            // stroke(185,50);
            // strokeWeight(1);
            // push();
            // translate(x * scl, y * scl);
            // rotate(v.heading());
            // line(0, 0, scl, 0);
            // pop();

            //xoffset
             xoff += inc;
        }
        yoff += inc;
    }

    zoff += 0.005;

 

    for ( i = 0 ; i < particles.length ; i++) {
        particles[i].edge();
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].show();
    }

    //Shows frameRates
    fr.html(floor(frameRate()));
}