let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(30);
    background(20, 20, 20);
  }

  function draw() {
    background(20, 20, 20, 40);
    stroke(50, 100, 200);
    noFill();

    push();  
    let y = (sin(counter1) * 80) + height/2;
    let x = (cos(counter1) * 50) + width/2;

    ellipse(x, y, 80, 80);

    counter1 += 0.03;
    pop();

    push();  
    let y1 = (sin(counter2) * 10) + height/5;
    let x1 = (cos(counter2) * 30) + width/3;

    ellipse(x1, y1, 100, 100);

    counter2 += 0.08;
    pop();

    push();  
    let y2 = (sin(counter3) * 200) + height/2;
    let x2 = (cos(counter3) * 200) + width/2;

    ellipse(x2, y2, 50, 50);

    counter3 += 0.01;
    pop();

  }