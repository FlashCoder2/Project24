
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var area1Sprite, area2Sprite, area3Sprite;

var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	area1Sprite = createSprite(780,590,20,100);
	area1Sprite.shapeColor = color("white")

	area2Sprite = createSprite(600,590,20,100);
	area2Sprite.shapeColor = color("white")

	area3Sprite = createSprite(690,650,200,20);
	area3Sprite.shapeColor = color("white")

	paperObject = new Paper(100,650,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();

  
  drawSprites();
 
}

function keyPressed(){

	if(keyDown === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}

}



