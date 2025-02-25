class BaseClass{
  constructor(x, y, width, height, angle,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      if(this.image){
        image(this.image, 0, 0, this.width, this.height);
      }
      else{
        rect( 0, 0, this.width, this.height);
      }
      
      pop();
    }
}