var cubeImg,enemy1,bomb,cube,bombImg,enemiesImg;

function preload(){
cubeImg = loadImage("1.png")
enemiesImg = loadImage("5.png")
bombImg = loadImage("72.png")
}

function setup() {
  createCanvas(307.2,149);

  createEdgeSprites();

  cube = createSprite(153.6,74.5,3,3)
  cube.addImage(cubeImg);
  cube.scale = 0.2

  enemy1 = new Enemy(100,100)

}

function draw() {
  background("blue");  

  cubeWalk();

  drawSprites();
}

function cubeWalk(){
  if(keyIsDown(LEFT_ARROW)){
  cube.positionX += 5
  }

  if(keyIsDown(RIGHT_ARROW)){
   cube.positionX -= 5
  }

  if(keyIsDown(UP_ARROW)){
   cube.positionY -= 5
  }

  if(keyIsDown(DOWN_ARROW)){
  cube.positionY += 5
  }

}
