function setup() {
  createCanvas(1000, 800);
  noStroke();
  noLoop();
}

function draw() {
  drawCircle(width/2, 280, 6);
}

function drawCircle(x, radius, level) {                    
  var tt = 120 * level/3.5;
  fill(0,0,tt);
  ellipse(x, height/2, radius*2, radius*2);      
  if(level > 1) {
    level = level - 1;
    drawCircle(x - radius/2, radius/2, level);
    drawCircle(x + radius/2, radius/2, level);
  }
}