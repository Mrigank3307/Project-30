const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

ground = new Ground (200,395,1200,10);
upperGround = new Ground (600,200,200,10);

box = new Boxes (300,200,40,40);

box1 = new Box (525,10,20,20);
box2 = new Box (525,30,20,20);
box3 = new Box (525,50,20,20);
box4 = new Box (525,70,20,20);
box5 = new Box (525,90,20,20);
box6 = new Box (525,110,20,20);
box7 = new Box (525,130,20,20);

box8 = new Box  (520,395,20,20);
box9 = new Box  (520,375,20,20);
box10 = new Box (520,355,20,20);
box11 = new Box (520,335,20,20);
box12 = new Box (520,315,20,20);
box13 = new Box (520,295,20,20);
box14 = new Box (520,275,20,20);

box15 = new Box  (500,395,20,20);
box16 = new Box  (500,375,20,20);
box17 = new Box (500,355,20,20);
box18 = new Box (500,335,20,20);
box19 = new Box (500,315,20,20);
box20 = new Box (500,295,20,20);
box21 = new Box (500,275,20,20);

box22 = new Box  (480,395,20,20);
box23 = new Box  (4800,375,20,20);
box24 = new Box (480,355,20,20);
box25 = new Box (480,335,20,20);
box26 = new Box (480,315,20,20);
box27 = new Box (480,295,20,20);
box28 = new Box (480,275,20,20);

box29 = new Box  (460,395,20,20);
box30 = new Box  (460,375,20,20);
box31 = new Box (460,355,20,20);
box32 = new Box (460,335,20,20);
box33 = new Box (460,315,20,20);
box34 = new Box (460,295,20,20);
box35 = new Box (460,275,20,20);


slingshot = new SlingShot(box.body,{x:250, y:300});
}

function draw() {
  background(255);

  Engine.update(engine);

  ground.display();
  upperGround.display();

  box.display();


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
  box26.display();
  box27.display();
  box28.display();

  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();

  slingshot.display();

  

 

  if (box.body.position.x > 800 || box.body.position.x < 0 ||  box.body.position.y < 0 || keyCode === 32 || box.body.speed < 0.35) {
 
    Matter.Body.setPosition(box.body, {x: 225, y: 250});
    slingshot.six(box.body);

  }

  //console.log (box.body);

 text ("If you use space please press another key boefore slinging" , 150,200);
 
}

function mouseDragged(){
  Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}