const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var world;
var engine;
var land;
var round;
function setup() {

  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground = {
    isStatic:true
  }
  land=Bodies.rectangle(200,380,800,30,ground)
  World.add(world, land);
  console.log(land.position.x);
  console.log(land.position.y);
  var line = {
    restitution:1.5
  }
  round = Bodies.circle(100,200,50,line);
  World.add(world,round);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode (CENTER);
  rect (land.position.x,land.position.y,800,30);
  ellipse (round.position.x,round.position.y,50,50);
}