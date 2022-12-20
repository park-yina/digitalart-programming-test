let movers = [];

let attractor=[];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 2; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
      attractor[i] = new Attractor();

  }
}

function draw() {
  background(50);
for(let i=0;i<attractor.length;i++)
  attractor[i].display();

  for (let i = 0; i < movers.length; i++) {
    let force = attractor[i].calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
}

function mouseMoved() {
  for(let i=0;i<attractor.length;i++)
  attractor[i].handleHover(mouseX, mouseY);
}

function mousePressed() {
    for(let i=0;i<attractor.length;i++)

  attractor[i].handlePress(mouseX, mouseY);
}

function mouseDragged() {
    for(let i=0;i<attractor.length;i++){
  attractor[i].handleHover(mouseX, mouseY);
  attractor[i].handleDrag(mouseX, mouseY);
    }
}

function mouseReleased() {
  for(let i=0;i<attractor.length;i++)
  attractor[i].stopDragging();
}