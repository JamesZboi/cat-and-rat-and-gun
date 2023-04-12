var rat
var ratImg
var cat
var catImg
var gunImg
var gun
var catSound
function preload(){
ratImg = loadImage('rat.png')
catSound = loadSound('cat.mp3')
gunImg = loadImage('gun.png')
catImg = loadImage('cat.png')
}

function setup() {
  createCanvas(1500,600);
  rat = createSprite(300,300)
  rat.addImage('rat',ratImg)

  cat = createSprite(800,300)
  cat.addImage('cat',catImg)
  cat.scale = 0.1

  gun = createSprite(1300,300)
  gun.addImage('gun',gunImg)
  gun.scale = 0.1
  cat.debug = true
}

function draw() 
{
  background(30);
  cat.rotation = cat.rotation +10
  gun.rotation = gun.rotation +10
  rat.rotation = rat.rotation +10
  if(keyDown('left')){
    cat.x = cat.x-5
  }
  if(keyDown('right')){
    cat.x = cat.x+5
  }
  if(cat.isTouching(rat)){
   catSound.play()
  }
  drawSprites()
}




