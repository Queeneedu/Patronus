class Player {

  constructor(m) {
    this.mass = m;
    this.r = sqrt(this.mass)*2;
  }

  attract(dementor) {
    this.pos = createVector(mouseX,mouseY);
    let force = p5.Vector.sub(this.pos, dementor.pos);
    let distanceSq = constrain(force.magSq(), 0, 50);
    let G = 0.05;
    let strength = G * (this.mass * dementor.mass) / distanceSq;
    force.setMag(strength);
    dementor.applyForce(force);
  }


  show() {
    noStroke();
    fill(255,0, 100);
    ellipse(mouseX, mouseY, this.r*2);
  }
}
