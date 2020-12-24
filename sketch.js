const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score=0

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
    world = engine.world;

    //bigger ground
    ground1 = new Ground(600,449,250,10);
    //1st layer
    box1 = new Box(510,430,30,35);
    box2 = new Box(540,430,30,35);
    box3 = new Box(570,430,30,35);
    box4 = new Box(600,430,30,35);
    box5 = new Box(630,430,30,35);
    box6 = new Box(660,430,30,35);
    box7 = new Box(690,430,30,35);
    //2nd layer
    box8 = new Box(540,410,30,35);
    box9 = new Box(570,410,30,35);
    box10 = new Box(600,410,30,35);
    box11 = new Box(630,410,30,35);
    box12 = new Box(660,410,30,35);
    //3rd layer
    box13 = new Box(570,390,30,35);
    box14 = new Box(600,390,30,35);
    box15 = new Box(630,390,30,35);
    //4th layer
    box16 = new Box(600,370,30,35);
    

    //smaller ground
    ground2 = new Ground(1000,299,200,10);
    //1st layer
    box17 = new Box(940,280,30,35);
    box18 = new Box(970,280,30,35);
    box19 = new Box(1000,280,30,35);
    box20 = new Box(1030,280,30,35);
    box21 = new Box(1060,280,30,35);
    //2nd layer
    box22 = new Box(970,260,30,35);
    box23 = new Box(1000,260,30,35);
    box24 = new Box(1030,260,30,35);
    //3rd layer
    box25 = new Box(1000,240,30,35);

    polygon = new Polygon(150,300,25,25)

    slingshot = new Slingshot(polygon.body,{x:150, y:250})

    Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background("black");

    fill("white")
    text("SCORE:"+score,1000,40);
    console.log(score);

    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();

    box25.display();

    polygon.display();

    slingshot.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

    Engine.update(engine);

   


    drawSprites();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    Matter.Body.setPosition(polygon.body,{x:150, y:300});
    slingshot.attach(polygon.body);
}