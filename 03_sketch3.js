let angle = 0;
let angleIncrement = 0.1;
let radius = 1;
let radiusIncrement = 0.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);

  let x1 = cos(angle) * radius;
  let y1 = sin(angle) * radius;
  let x2 = cos(-angle) * radius;
  let y2 = sin(-angle) * radius;

  stroke(0);
  line(x1, y1, x2, y2);

  angle += angleIncrement;
  radius += radiusIncrement;

  if (radius > 200 || radius < 1) {
    radiusIncrement *= -1;
  }
}