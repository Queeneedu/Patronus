class Dementor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(2);
    this.acc = createVector(0,0);
    this.mass = m;
    this.r = sqrt(this.mass);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill(220,220,255,2);
    ellipse(this.pos.x,this.pos.y,this.r*15);
  
    fill(0, 150);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    
  }
}