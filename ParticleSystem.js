let particles=[];
let particles2=[];
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

}
