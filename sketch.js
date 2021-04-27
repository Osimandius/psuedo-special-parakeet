
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var mainPC,ikirClaw,stormDaemon,ratmen1;
var gamelevel = "level1";
var gameState = "play";
var r1hits=0;
var r2hits=0;
var r3hits=0;
var sdhits=0;
var ichits=0;
var mainvx=4;
var mainvy=4;
var ikirx=10;
var ikiry=12;


function preload()
{
	
  back=loadImage('Sprites/Map for LoB.png')
	stormImg=loadImage('Sprites/Storm Daemon 1.png')
  ikirImg=loadImage('Sprites/Untitled.png')
  mainpcimg = loadImage('Sprites/mainpc.jpg')
  //ikirClaw.image=loadImage('Sprites/Untitled.png')
  
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	mainPC = createSprite(400,750,30,30);
	//mainPC.addImage(mainpcimg)
	ikirClaw= createSprite(100,100,30,30)
	ikirClaw.velocityX=ikirx;
	ikirClaw.velocityY=ikiry;
	stormDaemon= createSprite(110,110,40,40)
	stormDaemon.velocityY=random(6,10);
	stormDaemon.velocityX=random(6,10);
	ratmen1=createSprite(200,300,20,20);
	ratmen1.velocityX=1;
	ratmen2=createSprite(200,300,20,20);
	ratmen2.velocityY=1;
	ratmen3=createSprite(200,300,20,20);
	ratmen3.velocityX=random(1,3);

	edges = createEdgeSprites();

}


function draw() {

  background(100);
  mainPC.velocityX = 0;
  mainPC.velocityY = 0;

  
	if(gameState === "play"){
		if (keyDown("LEFT_ARROW")){
			//mainPC.x=mainPC.x-3;
			mainPC.velocityX = -mainvx;
		  }
		  if (keyDown("RIGHT_ARROW")){
			//mainPC.x=mainPC.x+3;
			mainPC.velocityX = mainvx;
		  }
		  if (keyDown("UP_ARROW")){
			//mainPC.y=mainPC.y-3;
			mainPC.velocityY= -mainvy;
		  }

		  if (keyDown("DOWN_ARROW")){
			//mainPC.y=mainPC.y+3;
			mainPC.velocityY= mainvy;
		  }
  		pt1();

		  ratmen1.bounceOff(edges);
		  ratmen2.bounceOff(edges);
		  ratmen3.bounceOff(edges);
		  mainPC.bounceOff(edges);
		  stormDaemon.bounceOff(edges);
		  ikirClaw.bounceOff(edges);
		  ratmen1.bounce(ratmen2);
		  ratmen1.bounce(ratmen3);
		  ratmen2.bounce(ratmen3);
		  ikirClaw.bounce(stormDaemon);
	}
	else if(gameState ==="end"){
		print("You Win. Have your prize of bragging rights or whatever.")
	}
  
  drawSprites();
 
}

function pt1(){

	if(gamelevel==="level1"){
		if (mainPC.isTouching(ratmen1)){
			mainPC.bounce(ratmen1)
			r1hits+=1;
		}
		if (r1hits==2){
			ratmen1.destroy()
			mainvx+=1;
			mainvy+=1;
			r1hits-=1;
		}
		if (mainPC.isTouching(ratmen2)){
			mainPC.bounce(ratmen2)
			r2hits+=1;
		}
		if (r2hits==2){
			ratmen2.destroy()
			mainvx+=1;
			mainvy+=1;
			r2hits-=1;
		}
		if (mainPC.isTouching(ratmen3)){
			mainPC.bounce(ratmen3)
			r3hits+=1;
		}
		if (r3hits==2){
			ratmen3.destroy()
			mainvx+=1;
			mainvy+=1;
			r3hits-=1;
		}
		if (mainPC.isTouching(stormDaemon)){
			mainPC.bounce(stormDaemon)
			sdhits+=1;

		}
		if (sdhits==5){
			stormDaemon.destroy()
			mainvx+=3;
			mainvy+=3;
			sdhits-=1;
		}
		if (mainPC.isTouching(ikirClaw)){
			mainPC.bounceOff(ikirClaw)
			ichits+=1;
			ikirx+=1;
			ikiry+=1;

		}
		if (ichits==10){
			ikirClaw.destroy()
		}
		if(r1hits==2&&r2hits==2&&r3hits==2&&sdhits5&&ichits==10){
			gameState==="end";
		}
	}
}