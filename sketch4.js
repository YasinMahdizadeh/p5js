/*
SAVING IMAGES
So far, we've created still images and interactive projects that are meant to be seen onscreen. But sometimes you want to export the result of your code to an image file. This might be because you want to share it on social media, or maybe your code takes a really long time to render, or maybe the resulting image is way too big to view onscreen, or we want to print it... or a combination of those reasons!

Luckily, p5.js makes this super easy with the save() command. We just specify a filename and extension, put the save() command at the end of our code, and the resulting image is downloaded!

IMAGE FILE FORMATS
p5.js supports several common image file formats, but what's right for your project?

JPG: The most common, best for photographic images, small file sizes but loses data as it is compressed
PNG: Great for hard-edged graphics, files not quite as small as JPG but no loss is quality
WEBP: A newer format that is similar to PNG, no loss in quality, less support in browsers and software than PNG
Data URL: This encodes your image as a string of text! Can be used later to redraw the results – unlikely that you'll need it but super cool

For most of our work this semester, PNG will be the best choice. It gives really nice image quality, no loss in data when the file is saved, and nearly all software will be able to view it.

*/

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    // Be sure you have this here, otherwise your sketch will try to save an image every frame!
    noLoop();
  }
  
  function draw() {
    background(220);
    
    // Draw some stuff...
    for (let y=0; y<height; y+=20) {
      for (let x=0; x<width; x+=20) {
        fill(y/height * 255, 0, x/height * 255);
        circle(x, y, 20);
      }
    }
    
    // Save it!
    // Be sure to include the filename as a string (in single or double quotes) and a file extension (we'll be using PNG for this project)
    save('5000Shapes.png');
    
    // Note: you'll want to put the save() command at the very end of draw(). Just like everything else in p5.js, code is run in order, so if you moved save() earlier in your code, it would only save things that had been drawn onscreen already
  }
  
  