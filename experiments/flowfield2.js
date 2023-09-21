let points = [];
let steer; //to control angle

let r1;
let r2;
let g1;
let g2;
let b1;
let b2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    angleMode(DEGREES);
    noiseDetail(1); 
    mousePressed();
  }

function draw() {
    noStroke();


    //iterate the points, see Colourful Coding 
    for (let i = 0; i < points.length; i++) {

        let r = map(points[i].x, 0, width, r1, r2);
        let g = map(points[i].y, 0, height, g1, g2);
        let b = map(points[i].x, 0, width, b1, b2);
        
        fill(r, g, b);

        let angle = map(noise(points[i].x * steer, points[i].y * steer), 0, 1, 0, 720);

        points[i].add(createVector(cos(angle), sin(angle)));

        ellipse(points[i].x, points[i].y, 1);
    }
}

function mousePressed () {

    points = [];

    background(0, 0, 50);

//"Set Up" taken from Colourful Coding: How to make a flow field in p5.js | Coding Project #9
// (https://www.youtube.com/watch?v=1-QXuR-XX_s)

    let density = 100;
    let space = width/density;

    //starting points
    for (let x = 0; x < width; x += space) {
        for (let y = 0; y < height; y += space) {
            let p = createVector (x + random(-10,10), y + random(-10,10));
            points.push(p);
        }
    }

    r1 = random(255);
    r2 = random(255);
    g1 = random(255);
    g2 = random(255);
    b1 = random(255);
    b2 = random(255);

    steer = random(0.0005, 0.005);
}

function keyPressed () {
    if (keyIsPressed) {
        if (keyCode == 80) {
            saveCanvas('flowfield', 'png');
        }
    }
}