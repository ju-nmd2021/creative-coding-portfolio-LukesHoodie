let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

let r;
let g;
let b;

let r2;
let g2;
let b2;

function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(30);
    background(r, g, b);

    r = random(255);
    g = random (255);
    b = random (255);
    r2 = random(255);
    g2 = random (255);
    b2 = random (255);
  }

  function draw() {
    background(r, g, b, 40);
    stroke(r2, g2, b2);
    noFill();

    push();  
    let y = (sin(counter1) * 80) + height/3;
    let x = (cos(counter1) * 100) + width/3;

    ellipse(x, y, 80, 80);

    counter1 += 0.05;
    pop();

    push();  
    let y1 = (sin(counter2) * 100) + height/2;
    let x1 = (cos(counter2) * 30) + width/3;

    ellipse(x1, y1, 100, 100);

    counter2 += 0.08;
    pop();

    push();  
    let y2 = (sin(counter3) * 20) + height/2;
    let x2 = (cos(counter3) * 200) + width/2;

    ellipse(x2, y2, 50, 50);

    counter3 += 0.08;
    pop();

  }