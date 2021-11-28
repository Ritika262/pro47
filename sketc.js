var back,backImg;
var player,playerImg;
var oppo1,oppo2,oppo3
var virg1,virg2,virg3,virImg,virImg2;
var END=0;
var PLAY=1;
var gameState=PLAY;
var score=0;
var bottle,bottleg;

  virg1=  new Group();
  virg2= new Group();
  //virg3=new Group();
  

function preload(){
    backImg=loadImage("hill.jpg");
    virImg=loadImage("vir1.png");
    virImg2=loadImage("vir2.png");
}
function setup(){

    createCanvas(800,600);
    back=createSprite(400,260);
    back.addImage(backImg);
    back.scale=4;
    back.velocityX=-2;

    player=createSprite(50,400,30,30);
    player.scale=2;
    
}
function draw(){
    background(0);

    text("Score:"+score,500,260);
    //textsize(25);
    if(gameState===PLAY){
        back.velocityX= -(4+3*score/400);

        score=score+Math.round(getFrameRate()/50)
console.log(score);
    
    if(back.x <100 ){
        back.x= width/2;
    }

    Spawnbottles();
    virusone();
    virustwo();
    edges= createEdgeSprites();
  player.collide(edges);

  if(keyDown("UP_ARROW")){
    player.velocityY=-2;
  };
 if(keyDown("DOWN_ARROW")){
    player.velocityY=2;
  };
  if(keyDown("RIGHT_ARROW")){
    player.velocityX=2;
  };
  if(keyDown("LEFT_ARROW")){
    player.velocityX=-2
  }

  /*if(virg1.isTouching(player)){
    gameState = END;
    oppo1.velocityY=0;
  }*/

/*if(virg2.isTouching(player)){
    gameState = END;
    oppo1.velocityY=0;
  }*/

  
    }
    
    drawSprites();
    
}
function Spawnbottles(){
  if(frameCount%60===0){
    var bottle=createSprite(600,120,40,10);
   // console.log(Math.round(random(80,120)))
   // console.log(bottle.y);
    bottle.y=Math.round(random(280,320));
    console.log(bottle.y);
    bottle.lifetime=200;
    bottle.velocityX=-3;
   // bottleg.add(bottle);
  }
}
function virustwo(){
  
  if(frameCount%60===0){
    var oppo2=createSprite(600,400,40,10);
    oppo2.y=Math.round(random(30,400));
    oppo2.addImage(virImg2);
    oppo2.scale=0.1;
    oppo2.velocityX=-1;
    //virg2.add(oppo2)
  }
}
function virusone(){
    if(frameCount%60===0){
      var oppo1=createSprite(600,450,40,10);

      oppo1.y=Math.round(random(50,450));
      oppo1.addImage(virImg);
      oppo1.scale=0.1;
      oppo1.velocityX=-1.5;
      //virg1.add(oppo1);
    }
    

  }
  