var xoff = 0.00;

function setup() {
    createCanvas(1080,1080);
    frameRate(100);
    
}

function draw() {
    background(180);
    //ellipse(width*0.5,noise(xoff)*height,50);
    ellipse(noise(xoff+100)*width,noise(xoff)*height,50);
    xoff += 0.01;
}