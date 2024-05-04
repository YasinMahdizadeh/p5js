function setup() {
    createCanvas(1080,1080);
    frameRate(25);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }

    ellipse(mouseX, mouseY, 80, 80);
}

/* //draws random lines
function draw() {
    background  ('f0f0f0');
    strokeWeight(3);
    line(
        random(0,width),
        random(0,height),
        random(0,width),
        random(0,height)
    );

}*/