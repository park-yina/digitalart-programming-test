class Mouse{
  constructor(position){
  this.position = createVector(mouseX,mouseY);
    this.acc=createVector(random(-0.03,0.03),random(-0.02,0.02));
    this.velocity = createVector(random(-3, 3), random(-5, 5));
    this.lifespan = 30;
  }
     run2(){
    this.update();
    this.display();
       this.update2();
       this.display();
       this.update3();
       this.display();
    this.click();
  }

  update(){
     this.velocity.add(this.acc);
  this.position.add(this.velocity);
  this.lifespan += 5;
  }
  update2(){
    this.acc=createVector(random(-0.05,0.05),random(-0.02,0.02));
    this.velocity=createVector(random(-0.01,0.01),random(-0.05,0.05));
    this.lifespan=30;
     this.velocity.add(this.acc);
  this.position.add(this.velocity);
  this.lifespan += 10;
  }
  update3(){
    this.acc=createVector(random(-0.01,0.01),random(-0.02,1));
    this.velocity=createVector(random(-0.01,0.5),random(-0.05,0.3));
    this.lifespan=90;
     this.velocity.add(this.acc);
  this.position.add(this.velocity);
  this.lifespan += 30;
  }
  display(){
  stroke(random(0,255),random(0,255));
  strokeWeight(2);
  fill(random(0,255),random(0,255),random(0,255),this.lifespan);
  circle(this.position.x, this.position.y,random(1,10));
}
