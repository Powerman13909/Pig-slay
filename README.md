# Angry-Bird-Game
Angry Bird Game - One Level 


missiles.pop();
    gameState = "launched";
    return false;


    function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(missiles[missiles.length-1].body, {x: mouseX , y: mouseY});
        Matter.Body.applyForce(missiles[missiles.length-1].body, missiles[missiles.length-1].body.position, {x:5,y:-5})
        
        return false;
    }
}

function mouseReleased(){
    slingshot.fly();
    
    missiles.pop();
    gameState = "launched";
    return false;
}


function keyPressed(){
    if((keyCode === 32) && gameState ==="launched"){
        if(missiles.length>=0 ){   
            Matter.Body.setPosition(missiles[missiles.length-1].body, {x: 200 , y: 50});         
            slingshot.attach(missiles[missiles.length-1].body);
            
            gameState = "onSling";
           
        }
        
    }
    
}




var missiles = []