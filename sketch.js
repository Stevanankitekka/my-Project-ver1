var canvas;
var zombie,zombieImage,car,carImage,baricade,baricadeImage,trees,treesImage;
var danImage;


function preload(){
zombieImage = loadImage("zombie.png");
carImage = loadImage("car.png");
baricadeImage = loadImage("baricade.png");
treesImage = loadImage("trees.png");
danImage = loadImage("Dan.png");
}

function setup(){
canvas = createCanvas(windowWidth,windowHeight);

}


function draw(){
backGroundImage("");


}
/*zombie = createImage();
zombie.addImage("zombie",zombieImage);
car = createImage(500,600);
car.addImage("car",carImage);
baricade = createImage(500,650);
baricade.addImage("baricade",baricadeImage);
trees = createImage(500,700);
trees.addImage("trees",treesImage);*/
