const synth = new Tone.PolySynth().toDestination();
const pingPongDelay = new Tone.PingPongDelay("4n", 0.5).toDestination();

synth.connect(pingPongDelay);
pingPongDelay.toDestination();

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(30);
  background(20, 10, 20);
}

function draw() {
  noFill();
  stroke (200, 50, 80);
  strokeWeight(7);
  ellipse(800,300, 550, 550);

  push();
  strokeWeight(1);
  stroke(255);
  if (mouseIsPressed === true) {
    ellipse (pmouseX, pmouseY, 100);
    {
      if (Tone.context.state !== "running") {
        Tone.start();
      }
      synth.triggerAttackRelease(["C2, E2, G2"], "8n");
    }
  }
}
pop();
