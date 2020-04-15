// module aliases
    var Engine = Matter.Engine,
    // Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies;

    var engine;
    var circleA;
    var world;
    var circles = [];
    var boundaries = [];

    var ground; 

function setup() {
    createCanvas(800, 800);
    // create an engine
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    var options = {
        isStatic: true
    }
    boundaries.push(new Boundary(500, 200, width*0.6, 50, -0.3));
    boundaries.push(new Boundary(200, 500, width*0.5, 50, 0.3));

    // World.add(world, ground);
}

function mousePressed() {
    circles.push(new Circle(mouseX, mouseY, random(10, 40)))
}


function draw() {
    background(51);
    Engine.update(engine) //physics system moves ahead moment in time
    for (var i = 0; i < circles.length; i++) {
        circles[i].show();
    }
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
    

    
} 