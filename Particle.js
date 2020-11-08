class Particle {

  constructor(){
  this.pos = createVector(random(width),random(height));
  this.vel = p5.Vector.random2D();
  this.acc = createVector(0,0);
  this.maxspeed = 2;
  this.PrevPos = this.pos.copy();
}

  update(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

follow(vectors){
  let x = floor(this.pos.x / scl);
  let y = floor(this.pos.y /scl);
  let index = x+y*cols;
  let force = vectors[index];
  this.applyForce(force)
}

  applyForce(force){
    this.acc.add(force);
  }

  show(){
    strokeWeight(1);
    stroke(0,5);
    line(this.pos.x,this.pos.y,this.PrevPos.x, this.PrevPos.y);
    this.updatePrev();
  }

updatePrev(){
  this.PrevPos.x = this.pos.x;
  this.PrevPos.y = this.pos.y;
}

  edges(){
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    } else if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    } else if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    } else if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
  }
}
