var robot1,robot2,robot1Img,robot2Img,robot3Img;
var wall1,wall2,wall4,wall5,wall6;
var finishLine,finish;

function preload(){
 robot1Img = loadImage("./assets/robot.png");
 robot3Img = loadImage("./assets/robot3.png");
}

function setup() {
  createCanvas(1200, 600);
  
  robot1 = createSprite(50,500);
  robot1.addImage(robot1Img);
  robot1.scale = 0.1;

  wall1 = createSprite(80,550,140,30);
  wall1.shapeColor = "black";
  
  wall2 = createSprite(260,530,30,150);
  wall2.shapeColor = "black";

  wall3 = createSprite(420,580,30,80);
  wall3.shapeColor = "black";

  wall4 = createSprite(590,500,30,340);
  wall4.shapeColor = "black";
  
  wall5 = createSprite(800,500,30,200);
  wall5.shapeColor = "black";

  wall6 = createSprite(1000,600,30,300);
  wall6.shapeColor = "black";

  finishLine = createSprite(1150,350,140,30);
  finishLine.shapeColor = "black"

  slab1 = createSprite(900,200,40,20);
  slab1.shapeColor = "black";

  slab2 = createSprite(700,140,40,20);
  slab2.shapeColor = "black";

  slab3 = createSprite(500,200,40,20);
  slab3.shapeColor = "black";

  slab4 = createSprite(300,160,40,20);
  slab4.shapeColor = "black";

  slab5 = createSprite(800,210,40,20);
  slab5.shapeColor = "black";

  slab6 = createSprite(900,200,40,20);
  slab6.shapeColor = "black";

  finish = createSprite(80,200,120,20);
  finish.shapeColor = "white";

  //robot1.debug = true;
  robot1.setCollider("rectangle",0,0,200,robot1.height);
}

function draw() {
  background(80);

  if (keyDown("space")){
    robot1.velocityY = -13;
  }
  robot1.velocityY = robot1.velocityY + 0.8;

  if (keyDown("right")){
    robot1.x += 5;
    robot1.addImage(robot1Img);
    robot1.changeImage(robot1Img)
  }
  if (keyDown("left")){
    robot1.x += -5;
    robot1.addImage(robot3Img);
    robot1.changeImage(robot3Img)
    robot1.scale = 0.1

  }
 
  robot1.collide(wall1);
  robot1.collide(wall2);
  robot1.collide(wall3);
  robot1.collide(wall4);
  robot1.collide(wall5);
  robot1.collide(wall6);
  robot1.collide(finishLine);
  robot1.collide(slab1);
  robot1.collide(slab2);
  robot1.collide(slab3);
  robot1.collide(slab4);
  robot1.collide(slab5);
  robot1.collide(slab6);
  robot1.collide(finish);
  drawSprites();

  if(robot1.y > 1200){
    textSize(40);
    fill("red");
    text("Game Over",500,250);
  }

  if(robot1.y < 0){
    textSize(40);
    fill("red");
    text("Game Over",500,250);
    robot1.y = -1000;
  }

  if(finish.collide(robot1)){
    textSize(40);
    fill("red");
    text("Well Done",500,250);
  }
}

