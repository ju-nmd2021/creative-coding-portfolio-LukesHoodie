const synth = new Tone.Synth().toDestination();

const keyboard = new AudioKeys({
  rows: 1,
});

keyboard.down((key) => {
  console.log(key);
  synth.triggerAttackRelease("C3", "2n");
});




function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(30);
  background(20, 20, 20);
}