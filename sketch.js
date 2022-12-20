let movers = [];
let system;
let attractor;
  let valu=255;

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 100; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
  }
   system=new ParticleSystem(createVector(mouseX,mouseY));

  attractor = new Attractor();
}

function draw() {

  background(valu);

  attractor.display();

  for (let i = 0; i < movers.length; i++) {
    let force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
}
 function mouseClicked(){
     if(valu===255){
       valu=0;
     }
               else{
                 valu=255;
               }
     system.addParticle2();
      system.run2();
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
