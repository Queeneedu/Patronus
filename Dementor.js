class Dementor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(2);
    this.acc = createVector(0,0);
    this.mass = m;
    this.r = 2*this.mass;
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
    // PerlinTest.update();
    noStroke();
    fill(220,220,255,2);
    ellipse(this.pos.x,this.pos.y,this.r);
    stroke(0);
    strokeWeight(3);
    beginShape();
    vertex(this.pos.x, this.pos.y);
    bezierVertex(this.pos.x,this.pos.y+120, this.pos.x+60, this.pos.y+120,this.pos.x+60,this.pos.y);
    endShape();
    // bezier(this.pos.x,this.pos.y,this.pos.x,this.pos.y+this.r,this.pos.x+this.m,this.pos.y+this.r,this.pos.x+this.m,this.pos.y);
  }
}
