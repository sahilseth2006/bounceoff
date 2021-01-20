var fixedRect, movingRect,l,r;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  l=createSprite(50,400,50,50);
  r=createSprite(1150,400,80,50);
  l.velocityX=3;
  r.velocityX=-5;
  l.shapeColor="pink";
  r.shapeColor="blue";



  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background("white");  
console.log(l.x-r.x)
  //function calling
  bounceOff(l,r);
  drawSprites();
}
