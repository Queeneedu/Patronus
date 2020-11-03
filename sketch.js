let dementors = [];
let player;
let patronus;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(100, 300);
    dementors[i] = new Dementor(x, y, m);
  }
  player = new Player(width / 2, height / 2, 100);
  patronus = new Patronus(width/2,height/2,50)
  background(0);
}

function draw() {
  background(10,10,130,20);
  player.show();
  for (let dementor of dementors) {
    dementor.update();
    dementor.show();
    player.attract(dementor);
  }
  
  if (mouseIsPressed){
  patronus.run();
  patronus.appear();
}
}