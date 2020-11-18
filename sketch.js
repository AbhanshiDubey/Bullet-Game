var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,100,20);
  bullet.shapeColor=('white');
  bullet.velocityX = speed;

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColour = (80,80,80);

}

function draw() {
  background("black"); 
  
  bullet.collide(wall);

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX = 0 ;
var deformation = 0.5 * weight * speed * speed/22509 ; 

if (deformation>180){
  bullet.shapeColour = colour(255,0,0);
}

if (deformation<180 && deformation>100){
  bullet.shapeColour = colour(230,230,0);
}

if (deformation<100){
  bullet.shapeColour=colour(0,255,0);
}
 }   

 function hasCollided (){
  bulletRightEdge = bullet.x + bullet.width ;
  wallLeftEdge = wall.x ; 
  
  if (bulletRightEdge>=wallLeftEdge){
  return true
  }
  
  return false;
  }

  if(hasCollided(bullet,wall)){
bullet.velocityX = 0;
var damage = 0.5 * weight* speed * speed/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColour=colour(255,0,0);
}

if(damage<10){
  wall.shapeColour=colour(0,255,0);
}
  }

     drawSprites();
}

