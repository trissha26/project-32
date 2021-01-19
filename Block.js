class Block {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.4,
      'friction':0.5,
  }
  this.visiblity = 5;
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
}
display(){
  if(this.body.speed<3){
    var pos = this.body.position
  rectMode(CENTER);
  strokeWeight(2);
  stroke("black");
  rect(pos.x, pos.y, this.width, this.height)
  }
  else{
    World.remove(world,this.body)
    push();
    this.visiblity = this.visiblity-5;
    pop();
  }

  
  }

  score(){
  if(this.visiblity<0 && this.visiblity>-105){
   score++
  }
  }
     
}
