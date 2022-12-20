let movers = [];
let system;
let attractor;

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 100; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
  }
   system=new ParticleSystem(createVector(mouseX,mouseY));

  attractor = new Attractor();
}

function draw() {
  background(255);

  attractor.display();

  for (let i = 0; i < movers.length; i++) {
    let force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
 if(mouseIsPressed===true){
       background(0);
     system.addParticle2();
      system.run2();
  }
}
}


function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
  
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}
