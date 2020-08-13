
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,bob1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(600,50,500,10);
	bob1 = new Bob(600,350,20,20);
	Engine.run(engine);
  
}
 

function draw() {
  rectMode(CENTER);
  background(225);
  roof.display();
  bob1.display();
  drawSprites();
 
}



