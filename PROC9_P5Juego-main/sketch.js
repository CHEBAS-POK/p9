var box;

function setup() {
  createCanvas(600,600);
  box = createSprite(300,300,60,60);
}

function draw() {

  
if (keyDown("S")){
 box.y = box.y + 5;
 } 
if (keyDown("W")){
box.y = box.y -5;
}
if (keyDown("D")){
 box.x = box.x + 5;
 }
  if (keyDown("A")){
    box.x = box.x -5;
    }
  
  background(rgb(255,0,0));
  if (keyDown("C")){
 background(rgb(255,0,0));
 background(rgb(255,0,0));
 background(rgb(255,0,0));
 background(rgb(255,0,0));
 background(rgb(255,0,150));
 background(rgb(255,230,0));
 background(rgb(255,0,255));
 background(rgb(123,208,200));
  }

  drawSprites();
}




