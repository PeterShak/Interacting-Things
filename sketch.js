let ball = {} //ax, ay, ar, adx, ady
let ball2 = {}
//let ballb = {} //bx, by, br, bdx, bdy
let z
let x
let c


function setup() {
  createCanvas(400, 400);
  z = random (255);
  x = random (255);
  c = random (255);
  ball = createBall();
  ball2 = createBall();
}

function draw() {
  background(z,x,c);
  updateBall(ball);
  updateBall(ball2)
  if (dist(ball.x, ball.y, ball2.x, ball2.y) < 0.5*ball.r + 0.5*ball2.r) {
    correct()
  }
}
  
function correct() {
  ball.dx *=  -1;
  ball.dy *=  -1;
  ball2.dx *=  -1;
  ball2.dy *=  -1;
}

function updateBall(b) {
  circle(b.x, b.y, b.r);
  b.x += b.dx;
  b.y += b.dy;
  
  if(b.x-0.5*b.r <= 0 || b.x+0.5*b.r >= width) {
    b.dx *= -1;
  }
  
  if(b.y-0.5*b.r <= 0 || b.y+0.5*b.r >= height) {
    b.dy *= -1;
  }
  
  if (b.x < 0 || b.x > width) {
    b.dx = b.dx * -1;
  }
  
  if (b.y < 0 || b.y > height) {
    b.dy = b.dy * -1;
  }
}
function setRandomPosition(b, xMin = 0, yMin = 0, xMax = width, yMax = height) {
  b.x = random(xMin, xMax);
  b.y = random(yMin, yMax) ;
}

function setRandomVelocity(b) {
  b.dx = random(-5,5);
  b.dy = random(-5,5);
}

function createBall() {
  let newBall = {}
  setRandomPosition(newBall);
  setRandomVelocity(newBall);
  newBall.r = random(60,80);
  fill(random(255),random(255),random(255));
  return newBall;
}


function keyPressed() {
  if (key === "k") {
  reset();
  }
  console.log(key);
}

function reset() {
  ball = createBall();
  ball2 = createBall();
}
