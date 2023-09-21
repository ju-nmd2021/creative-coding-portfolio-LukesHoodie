const synth = new Tone.MonoSynth().toDestination();
const pingPongDelay = new Tone.PingPongDelay("4n", 0.5).toDestination();
const seq = new Tone.Sequence((time, tone) => {
  synth.triggerAttackRelease(tone, 0.8, time);
}, ["C2", ["E2", "D2", "H2"], "D1", ["G1", "C1"]]);
Tone.Transport.start();

synth.connect(pingPongDelay);
pingPongDelay.toDestination();

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(30);
  background(0, 0, 153);
}

function draw() {
  noFill();
  stroke (0, 0, 90);
  strokeWeight(4);


  if (mouseIsPressed === true) {
    ellipse(mouseX, mouseY, pmouseX, pmouseY, 100);
    {
      if (Tone.context.state !== "running") {
        Tone.start();
      }

      seq.start(0);
    } 
  } else {
    seq.stop(0);
  }
}
