const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var square;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
 
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    console.log(ground);

    var square_options ={
     isStatic : false,
    restitution: 1
    }
    square = Bodies.rectangle(180,200,60,60,square_options);
    World.add(world,square);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(square.position.x,square.position.y,60,60);
}