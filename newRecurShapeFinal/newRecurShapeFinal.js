function setup() {
  createCanvas(600, 600);
  noStroke();
  noLoop();
}

function draw() {
  drawSquare(width/2, 280, 6);
}

function drawSquare(x, length, num) {                    
  var color1 = 126 * num/4.0;
  fill(color1);
  rect(x, x, length, length);      
  if(num > 1) {
    num = num - 1;
    drawSquare(x - length/2, length/2, num);
    drawSquare(x + length/2, length/2, num);
  }
}