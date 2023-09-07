//inspired by Colorful Coding: Simple Sine wave animation (https://www.youtube.com/watch?v=ktPnruyC6cc)
//but scaled and adapted to a smaller canvas

function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(30);
    background(20, 20, 20);

    angleMode(DEGREES);
    rectMode(CENTER);
  }

function draw() {
    background(20, 20, 20);

    push();
    noFill();

    translate(width /2, height /2.5);

    for (let i = 0; i < 100; i++) {
    push();
     rotate(sin(frameCount + i) *100);

      let r = map(sin(frameCount), -1, 1, 50, 255);
      let g = map(cos(frameCount/2), -1, 1, 50, 255);
      let b = map(sin(frameCount/4), -1, 1, 50, 255);

      stroke(r, g, b);

     rect(0, 0, 300 - i * 3, 300 - i * 3, 100 - i);
    pop();
    }

    pop();
}