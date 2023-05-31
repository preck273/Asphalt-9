class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene,x,y,texture,frame); 

        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
    }

    
//function to move car when the right and left key is pressed
    moveCar(){

        player.setVelocity(0);

        if (gameState.cursors.right.isDown){
            player.setVelocityX(160);
        }
         else if (gameState.cursors.left.isDown)
        {
            player.setVelocityX(-160);
        }
        
        
    }

}