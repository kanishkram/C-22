const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var world,engine,ground,ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var g_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20,g_options);
  World.add(world,ground);

  var b_option = {
    'restitution' : 1.0
  }
  ball = Bodies.circle(200,100,20,b_option);
  World.add(world,ball);
}

function draw() {
  background("red");  
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}