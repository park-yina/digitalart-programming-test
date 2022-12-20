class Mouse{
  constructor(position){
  this.position = createVector(mouseX,mouseY);
    this.acc=createVector(random(-0.03,0.03),random(-0.02,0.01));
    this.velocity = createVector(random(-2, 3), random(-4, 5));
    this.lifespan = 255;
  }
     run2(){
    this.update();
    this.display();
    this.click();
    this.restore();
  }

  update(){
     this.velocity.add(this.acc);
  this.position.add(this.velocity);
  this.lifespan -= 0.5;
  }
  update2(){
    this.acc=createVector(random(-0.005,0.005),random(-0.002,0.002));
    this.velocity=createVector(random(-0.01,0.01),random(-0.05,0.05));
    this.lifespan=255;
     this.velocity.add(this.acc);
  this.position.add(this.velocity);
  this.lifespan -= 0.5;
  }
  display(){
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(random(0,255),random(0,255),random(0,255),this.lifespan);
  circle(this.position.x, this.position.y, random(0,3));
}
  display2(){
    stroke(random(200),this.lifespan);
    strokeWeight(2);
  fill(random(0,255),random(0,255),random(0,255),this.lifespan);
    rect(this.position.x,this.position.y,random(0,12));
  }
isDead(){
  return this.lifespan < 0;
}
  click(){ if(mouseIsPressed===true&&this.position.x<mouseX+36||this.position.x>mouseX-36||this.position.y<mouseX+36||this.position.y>mouseY-36){
      noStroke()
      strokeWeight(10);
      fill(0,255);
      circle(this.position.x,this.position.y,random(0,3));
      
  }
           if(mouseIsPressed===true){
     this.update();
             this.update2();
             this.display();
     this.display2();
             this.restore();
     this.restore2();
     
   } 
  }
  restore(){
    if(this.position.y>=height-12||this.position.x>=width-12||this.position.x<12||this.position.y<12){
      noStroke()
      strokeWeight(0);
      fill("black");
      circle(this.position.x,this.position.y,random(0,3));
    }
}
   restore2(){
    if(this.position.y>=height-12||this.position.x>=width-12||this.position.x<12||this.position.y<12){
      noStroke()
      strokeWeight(0);
      fill("black");
    rect(this.position.x,this.position.y,random(0,3));
      background(0);
    }
}
}