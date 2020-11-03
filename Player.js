class Player {
  
  constructor(x,y,m) {
    this.pos = createVector(x,y);
    this.mass = m;
    this.r = sqrt(this.mass)*2;
  }
  
  attract(dementor) {
    let force = p5.Vector.sub(this.pos, dementor.pos);
    let distanceSq = constrain(force.magSq(), 0, 100);
    let G = 0.1;
    let strength = G * (this.mass * dementor.mass) / distanceSq;
    force.setMag(strength);
    dementor.applyForce(force);
  }
  
  
  show() {
    noStroke();
    fill(255,0, 100);
    ellipse(this.pos.x, this.pos.y, this.r*2);    
  }
}