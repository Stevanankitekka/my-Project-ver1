var bg,bgImg;
var player,playerImg; 
var zombie, zombieImg;

//var heart,heartImg;

var zombieGroup;
var bush1,bush1Img;
var bush2, bush3, bush4



function preload(){
  
  tree1Img = loadImage("assets/tree6.png")
  tree2Img = loadImage("assets/tree4.png")

  
  zombieImg = loadImage("assets/zombie.png")

 
  playerImg = loadImage("assets/player.png")

  bush1Img = loadImage("assets/bush1.png");
  



}

function setup() {
createCanvas(windowWidth,windowHeight);


player = createSprite(500,250,10,10);
player.addImage(playerImg);
player.scale = 0.2;
player.debug = true;
player.setCollider("rectangle",0,0,200,player.height);
// add bushes
bush1 = createSprite(width - width/2,height - height/2,10,10);
bush1.addImage(bush1Img);
bush1.scale = 0.1;
//create bar4

bush2 = createSprite(width - width/3,height - 50,10,10);
bush2.addImage(bush1Img);
bush2.scale = 0.13;
//create bar5

bush3 = createSprite(width - width/5,50,10,10);
bush3.addImage(bush1Img);
bush3.scale = 0.08;
//create bar6

bush4 = createSprite(60,height - 150,10,10);
bush4.addImage(bush1Img);
bush4.scale = 0.11;
//create bar7

// add trees
tree1 = createSprite(200,200,10,10);
tree1.addImage(tree1Img);
tree1.scale = 0.6;
bar1 = createSprite(200,380,150,10);
bar1.visible = false;


tree2 = createSprite(width/2 + 100,100,10,10);
tree2.addImage(tree1Img);
tree2.scale = 0.4;
// create bar2

tree3 = createSprite(width - 100,height/2 + 50,10,10);
tree3.addImage(tree2Img);
tree3.scale = 1;
//create bar3



}
function draw(){
  background("white");

  if (keyDown(UP_ARROW)){
    player.y = player.y-3;
  }
if (keyDown(DOWN_ARROW)){
  player.y += 3;
  
}
if (keyDown(RIGHT_ARROW)){
  player.x += 3;
}
if (keyDown(LEFT_ARROW)){
  player.x -= 3;
}
player.bounce(bar1);
  drawSprites()
}

function spawnZombie(){
  
}



  
  
