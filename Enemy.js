class Enemy extends BaseClass{
    constructor(x,y){
        super(x,y,50,50)
        this.image = loadImage("sprites/bomb.png")
       var blastImg = loadImage("sprites/blast.png")

    }
    display(){
        if(this.body.speed > 5){
            this.image = blastImg
            tint(255,this.visibility)
            super.display()
        }
        
    }}
     

   
