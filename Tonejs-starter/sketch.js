const playBtn = document.getElementById("playBtn");
const synth = new Tone.Synth().toDestination();

const pingPongDelay = new Tone.PingPongDelay("4n", 0.5).toDestination();

synth.connect(pingPongDelay);
pingPongDelay.toDestination();


playBtn.addEventListener("click", () => {
  if (Tone.context.state !== "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("G2", "8n");
});

/* function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  
} */


