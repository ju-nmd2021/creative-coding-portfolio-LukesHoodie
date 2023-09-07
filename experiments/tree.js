let point;

function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(30);
    background(20, 20, 20);
  }

  function draw() {
    background(0);
    frameRate(30);
    stroke(255,50,200);
    let a = (mouseX / width) * 50;
    point = radians(a);
    translate(width/2,height);
    line(0,0,0,-250);
    translate(0,-250);
    branch(150);
  
  }

  function branch(h) {
    h *= 0.66;
  
    if (h > 1) {
      push();
      rotate(point);
      line(0, 0, 0, -h);
      translate(0, -h);
      branch(h);
      pop();
  
      push();
      rotate(-point);
      line(0, 0, 0, -h);
      translate(0, -h);
      branch(h);
      pop();
    }
  }