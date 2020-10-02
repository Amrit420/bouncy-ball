const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var ball;
var myEngine,myWorld;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    myEngine= Engine.create();
    myWorld=myEngine.world;
    
    
    var options={
        isStatic:true
    }

var ballOptions={
    restitution:1.0
}
ball=Bodies.circle(200,100,20,ballOptions);
    ground= Bodies.rectangle(200,390,200,20,options)
World.add(myWorld,ground)
console.log(ground)
console.log(ground.position.x)
console.log(ground.position.y)
World.add(myWorld,ball)
}
    

function draw(){
    background(0);
Engine.update(myEngine);
console.log(ground.position.x)
console.log(ground.position.y)
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,200,20)
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20)
}