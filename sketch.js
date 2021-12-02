 var space,spaceImg;
var jet, jetImg;
var oppo2;
var gameover,gameoverImg;
var restart,restartImg;
 var score=0;
 
 var redsGroup,redImg;
var greensGroup,greenImg;
var ArrowGroup,powerImg;
var pinksGroup;

var END=0;
var PLAY=1;
var gameState=PLAY;
 
 function preload()
 {
 spaceImg=loadImage("space.png");
 jetImg=loadImage("jet.png");
 redImg=loadImage("meteor1.png");
 greenImg=loadImage("meteor2.png");
 powerImg=loadImage("power.png");
 gameoverImg=loadImage("gameOver.png");
 restartImg=loadImage("reset.png");
 }

 function setup(){
     createCanvas(600,600);
    
     space=createSprite(300,480);
     space.addImage(spaceImg);
     space.scale=4
     

     jet=createSprite(300,560,40,40);
     jet.addImage(jetImg);
     jet.scale=0.5;

     gameOver = createSprite( 340,370);
     gameOver.addImage(gameoverImg);
     gameOver.scale = 0.7;
     gameOver.visible = false;  
  
     restart=createSprite(300,300);
     restart.addImage(restartImg);
     restart.scale=0.2;
     restart.visible=false;
     //score = 0   
     redsGroup=new Group();
     greensGroup=new Group();
     //bluesGroup=new Group();
     //pinksGroup=new Group();
     ArrowGroup=new Group();
      
 }
 function draw(){
     background("black");

     if(gameState===PLAY){
      
   space.velocityY=2;
   
   edges= createEdgeSprites();
   jet.collide(edges);
 
  if(keyDown("RIGHT_ARROW")){
    jet.x=jet.x+4;
  };
  if(keyDown("LEFT_ARROW")){
    jet.x=jet.x-4
  }

     if(space.y >600 ){
        space.y= height/2;
    }
    if(keyDown("space")){
      power()}
      opponent2();
      opponent1();
   
  //creating continous enemies
  /*var select_balloon = Math.round(random(1,2));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
} else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }*/
   if(ArrowGroup.isTouching(redsGroup))
 {
  ArrowGroup.destroyEach();
  redsGroup.destroyEach();
 }
 if(ArrowGroup.isTouching(greensGroup))
 {
   ArrowGroup.destroyEach();
   greensGroup.destroyEach();
 }

if(redsGroup.isTouching(jet)){
  gameState=END
  gameOver.visible = true;
restart.visible=true;
  redsGroup.setVelocityYEach(0);
  greensGroup.setVelocityYEach(0);
  space.setVelocity(0);
  jet.velocityX=0;
  
  // score=0;
 // background("black");
}
if(greensGroup.isTouching(jet)){
  gameState=END
  gameOver.visible = true;
  restart.visible=true;
  greensGroup.setVelocityYEach(0);
  redsGroup.setVelocityYEach(0);
  space.setVelocity(0);
  jet.velocityX=0;

}
/*if(ArrowGroup.isTouching(greensGroup)){
  score=score+1;
 }
  if(ArrowGroup.isTouching(redsGroup)){
  score=score+1;
 }*/
 
 

}
 if(gameState === END){
  //greensGroup.setVelocityYEach(0);
  //redsGroup.setVelocityYEach(0);
  
 

}
if(mousePressedOver(restart)) 
          {
                reset();
          }

    
   
     drawSprites();
     //text("Score: "+ score, 300,50);
    Score()
     //textSize(25);

 
}
function Score()
{
  if(ArrowGroup.isTouching(greensGroup))
    {
      score = score + 1;
    }
  
  textFont("algerian");
  textSize(30);
  fill("yellow");
  text("Score: "+ score, 250, 50);
 
  }
    
  
function reset()
{
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  redsGroup.destroyEach();
  greensGroup.destroyEach();
  space.velocityY=2;
  score=0;
}
function opponent2(){
    if(frameCount%200===0){
        var oppo2=createSprite(0,0,40,10);
        oppo2.x=Math.round(random(10,600));
       // console.log(oppo2);
       oppo2.addImage(redImg);
        oppo2.scale=0.1;
        oppo2.velocityY=2;
        redsGroup.add(oppo2);
        redsGroup.lifetime=100;

    }
    }
    function opponent1(){
      if(frameCount%200===0){
          var oppo1=createSprite(0,0,40,10);
          oppo1.x=Math.round(random(10,600));
         // console.log(oppo2);
          oppo1.addImage(greenImg);
          oppo1.scale=0.1;
          oppo1.velocityY=2;
          greensGroup.add(oppo1);
          greensGroup.lifetime= 100;
      }
    }
    function power() {
      var power= createSprite(100, 100, 60, 10);
      power.addImage(powerImg);
      power.y= 600;
      power.x=jet.x;
      power.velocityY = -8;
      // power.lifetime = 100;
      power.scale = 0.04;
      ArrowGroup.add(power); 
    }

    








 /*function redBalloon() {
    var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
    //red.addImage(red_balloonImage);
    red.velocityY = -3;
    red.lifetime = 150;
    red.scale = 0.1;
    redsGroup.add(red);
  
 }  
 function blueBalloon() {
    var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
   // blue.addImage(blue_balloonImage);
    blue.velocityY = -3;
    blue.lifetime = 150;
    blue.scale = 0.1;
    bluesGroup.add(blue);
  }
  function greenBalloon() {
    var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
    //green.addImage(green_balloonImage);
    green.velocityY = 3;
    green.lifetime = 150;
    green.scale = 0.1;
    greensGroup.add(green);
  }
  
  function pinkBalloon() {
    var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
   // pink.addImage(pink_balloonImage);
    pink.velocityY = 3;
    pink.lifetime = 150;
    pink.scale = 1
    pinksGroup.add(pink);
  }*/
  