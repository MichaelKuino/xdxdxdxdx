var ball;
var leftSide;
var rightSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		density: 1.2,
		friction: 0
	}

	ball= Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	leftSide = new ground(10,200,20,400);
	rightSide = new ground(390,200,20,400);
	groundObj = new ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 20);

  groundObj.display();

  drawSprites();
 
}



