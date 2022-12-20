class Particle{
  constructor(position){
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-3, 3), random(-10, 10));
  this.position = position.copy();
  this.lifespan = 255;
}

run(){
  this.update();
  this.display();
  this.restore2();
  if(mouseIsPressed){
    stroke("black");
      strokeWeight(0);
      fill("black");
      circle(this.position.x,this.position.y,255);
    background(0);
  }
}
  update(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 3;
}

// Method to display
  display(){
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(random(0,255),random(0,255),random(0,255),this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
}
isDead(){
  return this.lifespan < 0;
}
  restore2(){
    if(this.position.y>=height-12||this.position.x>=width-12||this.position.x<12||this.position.y<12){
      noStroke();
      strokeWeight(0);
      fill("black");
      circle(this.position.x,this.position.y,12);
    }
  }
}