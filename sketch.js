var bullet, wall;
var speed, weight;
var deformation;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(500, 200, 50, 50);
  speed = random(55, 90);
  weight = random(400, 1500);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  bullet.velocityX = speed;
  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed/(thickness * thickness * thickness);
  }
if (damage > 20){
wall.shapeColor = color(255, 0, 0);
  }
  if (damage < 10){
    wall.shapeColor = color(0, 255, 0);
  }
  
  thickness = random(22,83);
}

function draw() {
  background(255,255,255); 
  hasCollided(bullet, wall); 
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}

