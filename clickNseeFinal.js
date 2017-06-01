function setup() {
createCanvas(600,600);
frameRate(8);

}

function draw() {
  background(50);
  
  if(mouseIsPressed){
  drawRect();
  drawSquare();
  drawCircle();
}
}
function drawRect()

{ fill(22,random(250),239);
  rect(random(400),random(400),random(250),random(200));
}
function drawSquare()
{ var num = random(250);
fill(239,33,random(250));
rect(random(400),random(400),num,num);
}
function drawCircle()
{ var num = random(250);
fill(29,224,random(250));
ellipse(random(400),random(400),num,num);
}