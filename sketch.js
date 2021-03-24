var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var edges;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

   fairyVoice.play();


var options={
	isStatic:false
}
	
	fairy = createSprite(130, 520,options);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	
    starBody = Bodies.circle(650 , 30 , 5 , {restitution:5.0, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
edges=createEdgeSprites();
fairy.bounceOff(edges)
	

  background(bgImg);

  

keyPressed()
 

  
drawSprites();
}

function keyPressed(){
	if(keyDown("RIGHT_ARROW")){
		fairy.x=fairy.x+2
	}
	if(keyDown("LEFT_ARROW")){
	fairy.x=fairy.x-2
	}
	if(keyDown("DOWN_ARROW")){
		star.velocityY=20
	}
	
	if(star.position.y>470){
		star.velocityY=0
		fairy.velocityX=0
	}
	
	
}
