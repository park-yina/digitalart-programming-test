class Particle{
  constructor(position){
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-3, 3), random(-10, 10));
  this.position = position.copy();
  this.lifespan = 0;
}

run(){
  this.update();
  this.display();
  
}
  update(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan += 3;
}

// Method to display
  display(){
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(random(0,255),random(0,255),random(0,255),this.lifespan);
  ellipse(this.position.x, this.position.y,1, 1);
}
isDead(){
  return this.lifespan > 255;
}
}
