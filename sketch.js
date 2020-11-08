
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
//var rope1,rope2,rope3,rope4,rope5;
var platform;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(320,400,30);
	ball2 = new Ball(360,400,30);
	ball3 = new Ball(400,400,30);
	ball4 = new Ball(440,400,30);
  ball5 = new Ball(480,400,30);

  platform = new Platform(400,250,200,30);

  rope1 = new String(ball1.body,platform.body,-80,-5);
  rope2 = new String(ball2.body,platform.body,-40,-5);
  rope3 = new String(ball3.body,platform.body,0,-5);
  rope4 = new String(ball4.body,platform.body,40,-5);
  rope5 = new String(ball5.body,platform.body,80,-5);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(225,225,225);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  platform.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball5.body,ball5.body.position,{x:150,y:150});
 }
}



