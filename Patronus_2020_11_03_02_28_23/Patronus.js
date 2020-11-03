class Patronus{
  constructor(x,y,m){
    this.pos = createVector(x,y,m);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
 }
  
  appear(){
      fill(255,255,255);
      ellipse(this.pos.x,this.pos.y,m);
    }
  
  run(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0); 
  }
}