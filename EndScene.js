class EndScene extends Phaser.Scene{
    constructor(){
        super('EndScene');
    }

    preload(){
        this.load.image('endbg', 'img/endbg.png');
    }

    create(){
        this.background = this.add.sprite(300, 250, 'endbg');
        this.input.on("pointerup", () => {
            this.scene.stop('EndScene');
            this.scene.start('GameScene');
          });    
          
          gameState.scoreText = this.add.text(16, 15, `score: ${currentScore}`,  { fontSize : '60px', fill: '#fff'});
    }

    update(){
        gameState.scoreText.setText('Score: ' + currentScore);
    }

}

const endScene = new EndScene();