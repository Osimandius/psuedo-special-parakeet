const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload()
{
  back=loadImage('Sprites/Map for LoB.png')
	stormImg=loadImage('Sprites/Storm Daemon 1.png')
  ikirImg=loadImage('Sprites/Untitled.png')
}

function setup() {
	createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
	world = engine.world;

  	//Create the Bodies Here.
    mainPC=new Entity(displayWidth/2,displayHeight-50,40,40)
    //end boss
    ikirClaw=new Entity(100,100,20,20)
    ikirClaw.image=loadImage('Sprites/Untitled.png')
    stormDaemon=new Entity(120,120,15,15)
    ikirClaw.image=loadImage('Sprites/Untitled.png')
    //Skaven irritants
    ratmen1=new Entity(displayWidth/4,displayHeight/4,10,10)


    bottomWall=new Edge(displayWidth/2,displayHeight-5,displayWidth,10)
    engine.world.gravity.y = 0;
    engine.world.airFriction = 100;


	




  console.log(mainPC)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);

//call functions to make the objects collide

pt1();

  
  mainPC.display()
  ikirClaw.display()
  stormDaemon.display()
  //image(stormImg, stormDaemon.x,stormDaemon.y,10,15)
  ratmen1.display()
  bottomWall.display()


 
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    mainPC.body.position.x=mainPC.body.position.x-1;
  }
  if (keyCode === RIGHT_ARROW){
    mainPC.body.position.x=mainPC.body.position.x+1;
  }
  if (keyCode === UP_ARROW){
    mainPC.body.position.y=mainPC.body.position.y-1;
  }
  if (keyCode === DOWN_ARROW){
    mainPC.body.position.y=mainPC.body.position.y+1;
  }
}


function pt1(p1,p2){

  collision = {collided: true ,bodyA: p1  ,bodyB:p2 } ;
}

