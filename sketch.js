
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(540, 150, 380, 50);

	bob1 = new Bob(400, 500, 70);
	bob2 = new Bob(470, 500, 70);
	bob3 = new Bob(540, 500, 70);
	bob4 = new Bob(610, 500, 70);
	bob5 = new Bob(680, 500, 70);

	
	string1 = new String(bob1.body, roof.body, -140, 0);
	string2 = new String(bob2.body, roof.body,  -70, 0);
	string3 = new String(bob3.body, roof.body,    0, 0);
	string4 = new String(bob4.body, roof.body,   70, 0);
	string5 = new String(bob5.body, roof.body,  140, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  Engine.update(engine);
 
roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

}

function keyPressed () {
if(keyCode === UP_ARROW){	
Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-100, y:-9.8})
}
}
