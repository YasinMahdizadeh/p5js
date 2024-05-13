var x = 0;
var y = 0;
var color = false;
var spacing = 40;
var prob = 0.5;

var check = 0;

function setback() {
    if (check % 2 == 1)
        {
            background(20);
            stroke(200,88);
        }
        else
        {
            background(200);
            stroke(20,88);
        }
}

function setup() {
    // createCanvas(1080,1080);
    
    var cnv = createCanvas(1080,1080);
    var xs = (windowWidth - width) / 2;
    var ys = (windowHeight - height) / 2;
    cnv.position(xs, ys);
    translate(xs,ys);
    
    background(20);
    stroke(200,66);

    frameRate(60);
}

function draw() {

    //stroke(200,66);

    
    
    if( random() < prob ) {
        line(x,y,x+spacing,y+spacing);
    }
    else
    {
        line(x+spacing,y,x,y+spacing);
    }
    x += spacing;

    if ( x > width){
        x = 0
        y += spacing
    }

    if ( y > height){
        y = 0;
        x = 0;

        prob = random();


        setback();        
        check +=1;

    }
}