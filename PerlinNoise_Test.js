class PerlinTest {
  constructor(){
    let scl = 10;
    let cols, rows;
    let zoff = 0;
    let particles = [];
    let flowfield;
    let w = 200;
    let h = 80;
    // createCanvas(1280, 720);
    cols = floor(w/scl);
    rows = floor(h/scl);
    flowfield = new Array(cols*rows);
    for (let i = 0; i<1000; i++){
      particles[i] = new Particle();
    }
  }

  update(){
  let yoff = 0;
  for (let y = 0; y<rows; y++){
    let xoff = 0;
    for (let x = 0; x<cols; x++){
      let index = x+y*cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      strokeWeight(1);
      stroke(0,5);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0,0,scl,0);
      // pop();
    }
    yoff += inc;
    zoff += 0.0003;
  }
  for(let i = 0; i< particles.length; i++){
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
  }
}
