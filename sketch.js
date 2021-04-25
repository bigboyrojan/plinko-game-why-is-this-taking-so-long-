var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;

var base;
var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480,800)
  engine = Engine.create();
	world = engine.world;
 base = new Ground(width/2,height,width,20);
 for(var k = 0; k<= width; k = k + 80){
  divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
 }

 for (var j = 40; j <= width; j=j+50){
plinkos.push(new Ball(j,75));
 }

 for (var j = 15; j <= width-10; j=j+50){
  plinkos.push(new Ball(j,175));
   }

   for (var j = 10; j <= width-15; j=j+50){
    plinkos.push(new Ball(j,275));
     }

     for (var j = 50; j <= width+10; j=j+50){
      plinkos.push(new Ball(j,375));
       }
   
 }
function draw() {
  background(255,255,255);  
  Engine.update(engine);
base.display();

for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}
 if(frameCount%60 === 0){
  particles.push(new Particles(random(width/2-10, width/2+10), 10,10))
 }
}

for (var j = 0; j < particles.length; j++) {
   
  particles[j].display();
}

for (var k = 0; k < divisions.length; k++) {
     
  divisions[k].display();
}