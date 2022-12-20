let system2;
let system;
function setup() {
  createCanvas(720,400);
  system =new ParticleSystem(createVector(random(width-12,width/2),random(height-12,height/2)));
     system2 =new Mouse(createVector(mouseX,mouseY));

}
function draw() {
  background("black");
  system.addParticle();
  system.run();
  if(mouseIsPressed===true){
     system.addParticle2();
      system.run2();

  }
}


