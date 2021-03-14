var object1,object2;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(100, 100, 50, 50);
 movingRect = createSprite(100,300,50,50);
 rect1 = createSprite(200,100,50,50);
 rect2 = createSprite(300,100,50,50);
 fixedRect.shapeColor= "blue";
 movingRect.shapeColor = "blue";
 rect1.shapeColor = "blue";
 rect2.shapeColor = "blue";
 fixedRect.velocityY = 3;
 movingRect.velocityY = -3;
}

function draw() {
  background(0);
//movingRect.x = mouseX;
//movingRect.y = mouseY;
if (isTouching(movingRect,rect1)){
  movingRect.shapeColor = "green";
  rect1.shapeColor = "green";
}else{
  movingRect.shapeColor = "blue";
  rect1.shapeColor = "blue";
}
bounceOff(movingRect,fixedRect)
  drawSprites();
}
