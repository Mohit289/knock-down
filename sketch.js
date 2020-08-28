var ground
var block1
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var block10
var block11
var block12
var block13
var block14
var block15
var block16
var score
var polygon
function setup() {
  createCanvas(800,400);
  //level one
  block1 = new Block(330,235,30,40);
  block2 = new Block(330,235,30,40);
  block3 = new Block(330,235,30,40);
  block4 = new Block(330,235,30,40);
  block5 = new Block(330,235,30,40);
  block6 = new Block(330,235,30,40);
  block7 = new Block(330,235,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  
  createSprite(400, 200, 50, 50);


}

function draw() {
  background(255,255,255);  
  Text("SCORE:"+score,750,40);
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();

  drawSprites();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=16 && hour<=19){
    background(255,255,255);  
  }
  else{
    background(0,0,0);
  }
}