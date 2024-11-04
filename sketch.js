let ax, ay, ar, adx, ady
let bx, by, br, bdx, bdy


function setup() {
  createCanvas(400, 400);
  speedACircle();
  speedBCircle();
}

function draw() {
  background(220);
  posACircle();
  posBCircle();
  createACircle();
  createBCircle();
  
   if(ax-0.5*ar <= 0 || ax+0.5*ar >= width) {
    adx *= -1
  }
  if(ay-0.5*ar <= 0 || ay+0.5*ar >= height) {
    ady *= -1
  }
  
  if(bx-0.5*br <= 0 || bx+0.5*br >= width) {
    bdx *= -1
  }
  if(by-0.5*ar <= 0 || by+0.5*br >= height) {
    bdy *= -1
  }
  
  if (ax < 0 || ax > width) {
    adx = adx * -1
  }
  
  if (ay < 0 || ay > height) {
    ady = ady * -1
  }
  
    if (bx < 0 || bx > width) {
    bdx = bdx * -1
  }
  
  if (by < 0 || by > height) {
    bdy = bdy * -1
  }
  
  if (dist(ax, ay, bx, by) < 0.5*ar + 0.5*br) {
    adx = adx * -1
    ady = ady * -1
    bdx = bdx * -1
    bdy = bdy * -1 
  }
}

function speedACircle() {
  ax = random(width);
  ay = random(height);
  ar = random(20,30);
  adx = random(-5,5);
  ady = random(-5,5);
}

function posACircle() {
  ax = ax + adx;
  ay = ay + ady;
}

function createACircle() {
  fill('maroon');
  circle(ax, ay, ar);
}

function createBCircle() {
  fill('orange')
  circle(bx, by, br);
}

function posBCircle() {
  bx = bx + bdx;
  by = by + bdy;
}

function speedBCircle() {
  bx = random(width);
  by = random(height);
  br = random(20,30);
  bdx = random(-5,5);
  bdy = random(-5,5);
}


function keyPressed() {
  if (key === "k") {
  reset();
  }
  console.log(key);
}

function reset(){
  speedACircle();
  speedBCircle();
}