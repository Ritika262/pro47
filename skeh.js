var back,girl;
var player1,player2,player3;
var backImg,girlImg;
var vir1Img,vir2Img,vir3Img
var bottle,bottleImg;
var virg1,virg2,virg3,bottleg;
var gameOverImg

var END =0;
var PLAY =1;
var gameState = PLAY;


var gameOver, restart;
var score=0;


function preload(){
  backImg=loadImage("hill.jpg");
  //=loadImage(".jpg");
  gameOverImg = loadImage("gameOver.png");

}
function setup() {
  createCanvas(800,600);
  back=createSprite(550, 300);
  back.addImage(backImg);
  back.scale=4;
  back .velocityX=-4;

  girl=createSprite(20,500,30,30);
  //girl.addImage(girlImg);
  girl.scale=1;

  gameOver = createSprite( 350,150);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.7;
  gameOver.visible = false;  
  

  virg1=new Group();
  virg2= new Group();
  virg3=new Group();
  bottleg=new Group();

}

function draw() {
  background(backImg);  

//display score
text("Score:"+score,500,60);


  
  
  if(gameState===PLAY){
 //distance=distance+Math.round(getFrameRate()/60);
  //back.velocityX = -(6 + 2*distance/150);

  back.velocityX= -(4+3*score/100);
  //console.log(back.velocityX);
//scoring
//console.log(Math.round(getFrameRate()));

score=score+Math.round(getFrameRate()/60)
console.log(score);
  

  if(back.x <50 ){
    back.x= back.width/2;
  }

  edges= createEdgeSprites();
  girl.collide(edges);

  if(keyDown("UP_ARROW")){
    girl.velocityY=-2;
  };
 if(keyDown("DOWN_ARROW")){
    girl.velocityY=2;
  };
  if(keyDown("RIGHT_ARROW")){
    girl.velocityX=2;
  };
  if(keyDown("LEFT_ARROW")){
    girl.velocityX=-2
  }
  //creating continous enemies
  var select_oppPlayer = Math.round(random(1,3));
  
  if (World.frameCount % 150 == 0) {
    if (select_oppPlayer == 1) {
     virusone();
    } else if (select_oppPlayer == 2) {
      virustwo();
    } else {
      virusthree();
    }
  }
//Spawnbottles
  Spawnbottles();
  
  if(virg1.isTouching(girl)){
    gameState = END;
    player1.velocityY = 0;
    
   }
   
   if(virg2.isTouching(girl)){
     gameState = END;
     player2.velocityY = 0;
     
   }
   
   if(virg3.isTouching(girl)){
     gameState = END;
     player3.velocityY = 0;

   }

  }else if (gameState === END) {
    gameOver.visible = true;
    //Add code to show restart game instrution in text here
  
  
    back.velocityX = 0;
    girl.velocityY = 0;
    
    virg1.setVelocityXEach(0);
    virg1.setLifetimeEach(-1);
  
    virg2.setVelocityXEach(0);
    virg2.setLifetimeEach(-1);
  
    virg3.setVelocityXEach(0);
    virg3.setLifetimeEach(-1);
  }




//write condition for calling reset( )
if(keyDown("space")){
  reset();
}
drawSprites();



}

function virusone(){
  player1 =createSprite(1100,Math.round(random(50, 250)));
        player1.scale =0.06;
        player1.velocityX = (6 + 2*score/150);
       // player1.addAnimation("opponentPlayer1",oppPink1Img);
        player1.setLifetime=170;
        virg1.add(player1);
}
function virustwo(){
  player2 =createSprite(1100,Math.round(random(50, 250)));
  player2.scale =0.06;
  player2.velocityX = (6 + 2*score/150);
  //player2.addAnimation("opponentPlayer2",oppYellow1Img);
  player2.setLifetime=170;
  virg2.add(player2);
}
function virusthree(){
  player3 =createSprite(1100,Math.round(random(50, 250)));
  player3.scale =0.06;
  player3.velocityX = (6 + 2*score/150);
  //player3.addAnimation("opponentPlayer3",oppRed1Img);
  player3.setLifetime=170;
  virg3.add(player3);
}
function Spawnbottles(){
  if(frameCount%60===0){
    var bottle=createSprite(600,120,40,10);
   // console.log(Math.round(random(80,120)))
   // console.log(bottle.y);
    bottle.y=Math.round(random(80,120));
    console.log(bottle.y);
    bottle.lifetime=200;
    bottle.velocityX=-3;
    bottleg.add(bottle);
  }
}

//create reset function here
function reset(){
gameState=PLAY;
gameOver.visible=false;
//restart.visible=false;
virg1.destroyEach();
virg2.destroyEach();
virg3.destroyEach();
score=0;
}
