function star() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.z = random(width);

    this.update = function() {

    }

    this.show = function() {
        fill(255);
        noStroke();

        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);

        ellipse (sx,sy, 2);

    }
}