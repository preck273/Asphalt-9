class ObstacleCars extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
    }


//move obstacles from the y-axis(top of the screen)
    placeObstacles2(){
        obstacleBlueCar.y += 1;//speed
        if(obstacleBlueCar.y > 1800){
            this.changeObstaclePosition2(obstacleBlueCar);
        }
    }
//Spawns the object randomly on the X-axis
    changeObstaclePosition2(){
        obstacleBlueCar.y = 0;
        const randomX2 = Phaser.Math.Between(335, 130, 15); 
        obstacleBlueCar.x = randomX2;
    }
        

    placeObstacles3(){
        obstacleCar1.y += 1;
        if(obstacleCar1.y > 2200){
            this.changeObstaclePosition3(obstacleCar1);
        }
    }

    changeObstaclePosition3(){
        obstacleCar1.y = 0;
        const randomX3 = Phaser.Math.Between(280, 430, 7); //set object in a random position
        obstacleCar1.x = randomX3;
    }

    placeObstacles4(){
        obstacleStopSign.y += 1;
        if(obstacleStopSign.y > 500){
            this.changeObstaclePosition4(obstacleStopSign);
        }
    }

    changeObstaclePosition4(){
        obstacleStopSign.y= 0;
        obstacleStopSign.x = 500;
    }

    placeObstacles5(){
        obstacleStopSign2.y += 1;
        if(obstacleStopSign2.y > 500){
            this.changeObstaclePosition5(obstacleStopSign2);
        }
    }

    changeObstaclePosition5(){
        obstacleStopSign2.y= 0;
        obstacleStopSign2.x = 50;
    }

}
