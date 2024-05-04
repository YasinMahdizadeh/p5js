var xoff = 0.00;

function setup() {
    createCanvas(1080,1080);
    frameRate(30);
    
}

function draw() {
    background(20);
    //ellipse(width*0.5,noise(xoff)*height,50);
    //noFill();
    stroke(255);
    noFill();
    beginShape();
    for(i=0;i<width;i++) {
        vertex(i,noise(xoff+i/1000)*width);
    }
    endShape();
    //ellipse(noise(xoff+100)*width,noise(xoff)*height,50);
    xoff += 0.01;
    //noLoop();
}