let particleSystem;

function setup() {
  createCanvas(300, 600);
  particleSystem = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(51);
  particleSystem.run();
}

function mouseDragged(e) {
  particleSystem.origin = createVector(mouseX, mouseY);
  particleSystem.addParticle();
  return false;
}