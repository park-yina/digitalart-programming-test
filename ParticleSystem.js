let particles=[];
let particles2=[];
let particles3=[];
class ParticleSystem{
  constructor(position){
  this.origin = position.copy();
}
  addParticle(){
  particles.push(new Particle(this.origin));
}
run(){
  for (let i = particles.length-1; i >= 0; i--) {
    let p = particles[i];
    p.run();
    if (p.isDead()) {
      particles.splice(i, 1);
    }
  }
}
  addParticle2(){
  particles2.push(new Mouse(this.origin));
}
run2(){
  for (let i = particles2.length-1; i >= 0; i--){
    let k = particles2[i];
    k.run2();
    if (k.isDead()) {
      particles2.splice(i, 1);
    }
  }
}
  addParticle3(){
  particles3.push(new Mouse(this.origin));
}
  run3(){
  for (let i = particles3.length-1; i >= 0; i--){
    let k = particles3[i];
    k.run2();
    if (k.isDead()) {
      particles3.splice(i, 1);
    }
  }
  }
}
