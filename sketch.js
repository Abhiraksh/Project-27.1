
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,line1,line2,line3,line4,line5;
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new ball(590,600,50);
  bob2 = new ball(690,600,50);
  bob3 = new ball(790,600,50);
  bob4 = new ball(890,600,50);
  bob5 = new ball(990,600,50);
 
	ground1 = new ground(800,50,600,40)
  line1 = new string(bob1.body,{x:200,y:20});
  line2 = new string(bob2.body,{x:200,y:20});
  line3 = new string(bob3.body,{x:200,y:20});
  line4 = new string(bob4.body,{x:200,y:20});
  line5 = new string(bob5.body,{x:200,y:20});
  
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  ground1.show();
  bob1.show();
 
  bob2.show();
  bob3.show();
  bob4.show();
  bob5.show();
  line1.show();
  line2.show();
  line3.show();
  line4.show();
  line5.show();

  drawSprites();
 
}



