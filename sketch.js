// module aliases
    var Engine = Matter.Engine,
    // Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies;

    var engine;
    var boxA;
    var world;


 




function setup() {
    createCanvas(400, 400);
    
    // create an engine
    engine = Engine.create();
    world = engine.world;

    //create a box (x, y, width, height)
    boxA = Bodies.rectangle(200, 100, 80, 80)
    Engine.run(engine);
    World.add(world, boxA);



}

function draw() {
    background(51);
    
    rect(boxA.position.x, boxA.position.y, 80, 80)
} 