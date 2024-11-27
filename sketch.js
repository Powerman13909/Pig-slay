const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, slingshot, weapon;
var missile = []
var gameState = "onSling";
var bg_img;

function preload(){
   bg_img = loadImage("sprites/bg.jpg")
}

function setup(){
    var canvas = createCanvas(1200, 500);
    canvas.position(15, 80);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 50);
    weapon1 = new Weapon(200, 200);
    weapon2 = new Weapon(150, 200);

   missile.push(weapon1)
   missile.push(weapon2)
    
   slingshot = new SlingShot(missile[missile.length-1].body,{x: 200, y: 310});
    enemy = new Enemy(900,200)
    

}

function draw(){
    background(bg_img);
    Engine.update(engine);
    ground.display();
    weapon1.display();
    weapon2.display()
    slingshot.display();
    enemy.display()
}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(missile[missile.length-1].body, {x: mouseX , y: mouseY});
        Matter.Body.applyForce(missile[missile.length-1].body, missile[missile.length-1].body.position, {x:5,y:-5})
        
        return false;
    }
}

function mouseReleased(){
    slingshot.fly();
    missile.pop();
    gameState = "launched";
    return false;
}


function keyPressed(){
    if((keyCode === 32) && gameState ==="launched"){
        if(missile.length>=0 ){   
            Matter.Body.setPosition(missile[missile.length-1].body, {x: 200 , y: 50});         
            slingshot.attach(missile[missile.length-1].body);
            
            gameState = "onSling";
           
        }
    }
}
    