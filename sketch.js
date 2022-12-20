let movers = [];
let system;
let system2;
let attractor;
  let valu=255;

function setup() {
  createCanvas(640, 360);
  system =new ParticleSystem(createVector(random(width-12,width/2),random(height-12,height/2)));
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
  }
  
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
    system.addParticle();
  system.run();
  }
}
 function mouseClicked(){
     if(valu===255){
       valu=0;
     }
               else{
                 valu=255;
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
