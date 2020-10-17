
var hr,mn,sc




function setup() {
  createCanvas(480,800);
hr=hour();
mn = minute();
sc=second();

}

function draw() {
  background(255,255,255); 

  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);

  hrAngle = map(hr,0,6000,0,360);
  mnAngle = map(mn,0,600,0,360);

  push();
  rotate(scAngle)
stroke(255,0,0)
strokeWeigth(7);
line(0,0,100,0)
pop();

push();
rotate(mnAngle)
stroke(255,0,0)
strokeWeigth(7);
line(0,0,100,0)
pop();

push();
rotate(hrAngle)
stroke(255,0,0)
strokeWeigth(7);
line(0,0,100,0)
pop();

  drawSprites();
}