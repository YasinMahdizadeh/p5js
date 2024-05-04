function setup() {
    createCanvas(600, 600); // Creating a canvas of 600x600 pixels
    background(255); // Setting background color to white
    noLoop(); // Drawing only once
  }
  
  function draw() {
    // Generate random shapes
    for (let i = 0; i < 100; i++) {
      let x = random(width); // Random x-coordinate within canvas width
      let y = random(height); // Random y-coordinate within canvas height
      let shapeSize = random(20, 100); // Random size for the shapes
      let shapeType = int(random(3)); // Randomly select a shape type: 0 for ellipse, 1 for rectangle, 2 for triangle
      
      // Randomly generate color
      let colorR = random(255); // Random red color component
      let colorG = random(255); // Random green color component
      let colorB = random(255); // Random blue color component
      let colorA = random(100, 200); // Random alpha (opacity) value
      
      fill(colorR, colorG, colorB, colorA); // Setting fill color with random alpha
      noStroke(); // No stroke around the shape
      
      // Draw the shape based on the randomly selected shape type
      if (shapeType === 0) {
        ellipse(x, y, shapeSize, shapeSize); // Drawing ellipse
      } else if (shapeType === 1) {
        rect(x, y, shapeSize, shapeSize); // Drawing rectangle
      } else {
        // Drawing triangle
        let x2 = x + random(-50, 50); // Random x-coordinate for the second vertex
        let y2 = y + random(-50, 50); // Random y-coordinate for the second vertex
        let x3 = x + random(-50, 50); // Random x-coordinate for the third vertex
        let y3 = y + random(-50, 50); // Random y-coordinate for the third vertex
        triangle(x, y, x2, y2, x3, y3);
      }
    }
  }