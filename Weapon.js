class Weapon extends BaseClass {

    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/weapon.png")
      this.smokeImage = loadImage("sprites/smoke.jpeg");
      this.trajectory =[];
      this.angle = 90
      this.Visibility = 255;
    }
  
    display() {
      
      super.display();
      
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      for(var i=0; i<this.trajectory.length; i++){
        push();
        this.Visibility = this.Visibility - 0.5;
        tint(255,this.Visibility);
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        pop();
      }
    }
  }
  