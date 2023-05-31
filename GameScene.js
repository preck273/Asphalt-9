//global variables

let player;
let obstaclePoliceCar;
let obstacleBlueCar;
let obstacleCar1;
let obstacleStopSign;
let obstacleStopSign2;
let gameState = {};
let playerScore;
let currentScore;
let timer;
let crashSound;
let gameScene;

class GameScene extends Phaser.Scene {
    constructor(){
        super('GameScene'); 
    }

    //load all asset file to be used 
    preload(){
        const image = "img/" //image path
        this.load.image("obstacleCar1", `${image}car1.png`);
        this.load.image("car", `${image}playercar.png`);
        this.load.image("obstaclePoliceCar", `${image}police.png`);
        this.load.image("obstacleStopSign", `${image}stop.png`);
        this.load.image("obstacleStopSign2", `${image}stop.png`);
        this.load.image("obstacleBlueCar", `${image}car3.png`);
        this.load.image("road", `${image}road.jpg`);
        this.load.audio('crashSound', "sound/audio2.wav");
        
    }

    create(){
        
        this.road = this.add.tileSprite(300, 250, 0,0, "road"); //add the road background
        player = new Player(this, 150,580, "car"); //pass car into the player class
        gameState.cursors = this.input.keyboard.createCursorKeys();// call keyboard key function from phaser
        //player.setCollideWorldBounds(true);

        //add player score
        playerScore = new Score();
        currentScore = playerScore.getScore;
        gameState.scoreText = this.add.text(15, 16, `score: ${currentScore}`,  { fontSize : '28px', fill: '#000'});
        timer = this.time.addEvent({
            delay: 1200,
            callback: this.onEvent,
            callbackScope: this,
            loop: true
        });

            //create object of the obstacleCars class and set the position of the cars on the road + gravity
       obstacleBlueCar = new ObstacleCars(this, 270, 800, "obstacleBlueCar").setGravityY(25);
       obstacleCar1 = new ObstacleCars(this, 420, 800, "obstacleCar1").setGravityY(15);
       obstacleStopSign = new ObstacleCars(this, 500, 0, "obstacleStopSign").setGravityY(25);
       obstacleStopSign2 = new ObstacleCars(this, 500, 0, "obstacleStopSign2").setGravityY(25);
       
        //check for collision between the player Car and the obstacle cars, if true end game
        
        this.physics.add.collider(player,  obstacleBlueCar, () =>{
            this.endScene();
        });

        this.physics.add.collider(player,  obstacleCar1, () =>{
            this.endScene();
        });
        this.physics.add.collider(player,  obstacleStopSign, () =>{
            this.endScene();
        });

        this.physics.add.collider(player, obstacleStopSign2,  () =>{
            this.endScene();
        });
    }
  //increase score
    onEvent(){
        currentScore += 1; //Increase score +1        
    }
    //endScene
    endScene(){
        this.scene.stop('GameScene');
        this.scene.start('EndScene')
        crashSound = this.sound.add("crashSound");
        crashSound.play();
        this.physics.pause();// stop the game if collision is detected
        
    }

    //loop of the game
    update(){
        player.moveCar();
        obstacleStopSign2.placeObstacles5('obstacleStopSign2', 5); 
        obstacleBlueCar.placeObstacles2('obstacleBlueCar', 5); 
        obstacleCar1.placeObstacles3('obstacleCar1', 5); 
        obstacleStopSign.placeObstacles4('obstacleStopSign', 5); 
        gameState.scoreText.setText('Score: ' + currentScore)
        this.road.tilePositionY -= 4.0;// add movement to the road
    }   
    
}

 gameScene = new GameScene();