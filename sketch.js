const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine;
var object;
function setup() {
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
  
var object_options = {
  isStatic : true
}

object = Bodies.rectangle(200, 100, 50, 70, object_options);
World.add(world, object);

}

function draw() {
  background(0);  
  rectMode(CENTER)
 rect(object.position.x, object.position.y, 50, 70 )
}