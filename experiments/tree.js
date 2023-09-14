const synth = new Tone.Synth().toDestination();
const pingPongDelay = new Tone.PingPongDelay("4n", 0.5).toDestination();

synth.connect(pingPongDelay);
pingPongDelay.toDestination();

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(30);
  background(20, 10, 20);
}

function draw() {
  fill(200, 50, 80);
  stroke (200, 50, 80);
  strokeWeight(4)
  ellipse(500,300, 150, 150);

  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    {
      if (Tone.context.state !== "running") {
        Tone.start();
      }
      synth.triggerAttackRelease("G2", "8n");
    }
  }
}

/* function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
} */