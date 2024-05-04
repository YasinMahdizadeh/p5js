function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220); // Setting background color to light gray
  
  // Generate random circles
  for (let i = 0; i < 10; i++) {
    let x = random(width); // Random x-coordinate within canvas width
    let y = random(height); // Random y-coordinate within canvas height
    let diameter = random(10, 50); // Random diameter between 10 and 50 pixels
    let colorR = random(255); // Random red color component
    let colorG = random(255); // Random green color component
    let colorB = random(255); // Random blue color component
    
    fill(colorR, colorG, colorB); // Setting fill color
    noStroke(); // No stroke around the circle
    ellipse(x, y, diameter, diameter); // Drawing the circle
  }
}
