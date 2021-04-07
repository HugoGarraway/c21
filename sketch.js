var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 rect1 = createSprite(94,38,93,368)
 rect2 = createSprite(200,200,200,200)
 rect3 = createSprite(600,50,101,100)
 rect4 = createSprite(600,750,101,100)
 rect5 = createSprite(60,400,101,100)
 rect6 = createSprite(1100,400,101,100)
 rect3. shapeColor = "blue"
 rect4. shapeColor = "magenta"
 rect5. shapeColor = "yellow"
 rect6. shapeColor = "orange"
 rect3.velocityY = 2
 rect4.velocityY = -2
 rect5.velocityX = 2
 rect6.velocityX = -2
}
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(rect4,rect3)
  bounceOff(rect5, rect6)
if (isTouching(rect2, movingRect)){
  movingRect.shapeColor = "red";
  rect2.shapeColor = "red";

}
 else{
  movingRect.shapeColor = "green";
  rect2.shapeColor = "green";
 } 
  drawSprites();
}

