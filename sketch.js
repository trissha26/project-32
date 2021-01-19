const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var backgroundImg;
var score = 0;

function preload (){
 polygonImg = loadImage("polygon.png");

 getBackgroundImg();
}

function setup(){
 createCanvas(1280,570); 

 engine = Engine.create();
 world = engine.world;

 ground = new Ground(640,565,1280,10); 

 stand1 = new Ground(620,420,350,10);
 stand2 = new Ground(1015,200,280,10); 

 block1 = new Block(500,390,40,50); 
 block2 = new Block(540,390,40,50); 
 block3 = new Block(580,390,40,50); 
 block4 = new Block(620,390,40,50); 
 block5 = new Block(660,390,40,50); 
 block6 = new Block(700,390,40,50); 
 block7 = new Block(740,390,40,50); 
 block8 = new Block(540,340,40,50); 
 block9 = new Block(580,340,40,50); 
 block10 = new Block(620,340,40,50); 
 block11 = new Block(660,340,40,50); 
 block12 = new Block(700,340,40,50); 
 block13 = new Block(580,290,40,50); 
 block14 = new Block(620,290,40,50); 
 block15 = new Block(660,290,40,50); 
 block16 = new Block(620,240,40,50);
 block17 = new Block(935,170,40,50); 
 block18 = new Block(975,170,40,50); 
 block19 = new Block(1015,170,40,50); 
 block20 = new Block(1055,170,40,50); 
 block21 = new Block(1095,170,40,50); 
 block22 = new Block(975,120,40,50); 
 block23 = new Block(1015,120,40,50); 
 block24 = new Block(1055,120,40,50); 
 block25 = new Block(1015,70,40,50);

 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon);

 slingshot = new SlingShot(this.polygon,{x:200,y:200});

}

function draw(){
 if(backgroundImg){
  background(backgroundImg);
 }

 Engine.update(engine);

 ground.display(); 
 stand1.display(); 
 stand2.display(); 
 fill("skyblue"); 
 block1.display(); 
 block2.display(); 
 block3.display(); 
 block4.display(); 
 block5.display(); 
 block6.display(); 
 block7.display(); 
 fill("pink"); 
 block8.display(); 
 block9.display(); 
 block10.display(); 
 block11.display(); 
 block12.display(); 
 fill("turquoise"); 
 block13.display(); 
 block14.display(); 
 block15.display();
 fill("grey"); 
 block16.display(); 
 fill("skyblue"); 
 block17.display(); 
 block18.display(); 
 block19.display(); 
 block20.display(); 
 block21.display(); 
 fill("turquoise"); 
 block22.display(); 
 block23.display(); 
 block24.display(); 
 fill("pink"); 
 block25.display()

 textSize(25);
 fill("white");
 text("Score: "+score,570,50);

 block1.score(); 
 block2.score(); 
 block3.score(); 
 block4.score(); 
 block5.score(); 
 block6.score(); 
 block7.score(); 
 block8.score(); 
 block9.score(); 
 block10.score(); 
 block11.score(); 
 block12.score(); 
 block13.score(); 
 block14.score(); 
 block15.score(); 
 block16.score();  
 block17.score(); 
 block18.score(); 
 block19.score(); 
 block20.score(); 
 block21.score();  
 block22.score(); 
 block23.score(); 
 block24.score();  
 block25.score()

 slingshot.display();
 imageMode(CENTER);
 image(polygonImg, polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY})

}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.polygon)
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

