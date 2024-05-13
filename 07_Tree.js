function setup() {
    // createCanvas(1080,1080);
    // frameRate(10);
    var cnv = createCanvas(1080,1080);
    var xs = (windowWidth - width) / 2;
    var ys = (windowHeight - height) / 2;
    cnv.position(xs, ys);
    translate(xs,ys);
}
function branch(len) {
    var angel = map(mouseX,0,height,0,PI);
    line(0,0,0,-len);
    translate(0,-len);
    if (len>4){
        push();
        rotate(angel);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angel);
        branch(len * 0.67);
        pop();
    }
}
function draw() {
    var l = map(mouseY,0,width,0,width/4.5);
    //var l = 540;
    background(155);
    strokeWeight(1.5);
    translate(width/2,height);
    
    branch(l);

    
}