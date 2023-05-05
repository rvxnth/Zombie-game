var player;
var bgImg;
var plyrImg;
var zombie1;
var zombie1Img;
var zombie2;
var zombie2Img;
var bullet;
var bulletImg;
var zombie1grp;
var zombie2grp;
var bulletgrp;
var score;
var scoreImg;
var life;
var lifeImg;

function preload() {
bgImg = loadImage("graveyard.jpg")
plyrImg = loadImage("player.png")
zombie1Img = loadImage("zombie1.png")
zombie2Img = loadImage("zombie2.png")
bulletImg = loadImage("bullet.png")
scoreImg = loadImage("score.png")
lifeImg = loadImage("life.png")
}

function setup() {
createCanvas(900, 700)
player = createSprite(400, 500, 100, 100)
player.addImage(plyrImg)
player.scale = 0.8

score = createSprite(60, 70, 50, 50)
score.addImage(scoreImg)
score.scale = 0.5

life = createSprite(800, 70, 50, 50)
life.addImage(lifeImg)
life.scale = 0.2

zombie1grp = new Group()
zombie2grp = new Group()
bulletgrp = new Group()
}

function draw() {
background(bgImg)
if(keyDown(RIGHT_ARROW)&& player.x<800) {
  player.x = player.x+5

}

if(keyDown(LEFT_ARROW)&& player.x>100) {
  player.x = player.x-5
}

if(keyDown(UP_ARROW)&& player.y>400) {
  player.y = player.y-5
}

if(keyDown(DOWN_ARROW)&& player.y<600) {
  player.y = player.y+5
}

if(keyDown("space")) {
  createBullet()
  console.log("bullet")
}

if(bulletgrp.isTouching(zombie1grp)) {
  bulletgrp.destroyEach()
  //zombie1grp.setVelocityXEach(0)

  zombie1grp.destroyEach()
  
}

if(bulletgrp.isTouching(zombie2grp)) {
  bulletgrp.destroyEach()
  //zombie2grp.setVelocityYEach(0)
  zombie2grp.destroyEach()
}

spawnZombies()
spawnZombies2()
drawSprites()
}

function spawnZombies() {
  if(frameCount %250===0) {
zombie1 = createSprite(850, 600, 100, 100)
//zombie1.debug = true;
zombie1.setCollider("rectangle", 0, 0, 100, 100)
zombie1.velocityX = -2 
zombie1.y = Math.round(random(450, 600))
zombie1.addImage(zombie1Img) 
zombie1.scale = 0.5
zombie1.lifetime = 450
zombie1grp.add(zombie1)
  }
}

function spawnZombies2() {
  if(frameCount %200===0) {
    zombie2 = createSprite(150, 10, 100, 100)
zombie2.setCollider("rectangle", 0, 0, 100, 100)
    zombie2.velocityY = 2
    zombie2.x = Math.round(random(10, 800))
    zombie2.addImage(zombie2Img)
    zombie2.scale = 0.3
    zombie2grp.add(zombie2)

  }
}

function createBullet() {
  bullet = createSprite(player.x+70, player.y+10, 100, 30)
  bullet.debug = true;
  bullet.velocityX = 5
  bullet.addImage(bulletImg)
  bullet.scale = 0.2
  bullet.lifetime = 180
  bulletgrp.add(bullet)
}