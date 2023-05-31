class StartScene extends Phaser.Scene{
    constructor(){
        super('StartScene');
    }

    preload(){
        this.load.image('startbg', 'img/background.png');;
    }

    create(){
        this.background = this.add.sprite(300, 250, 'startbg'); //add width and height
        this.input.on("pointerup", () => {
            this.scene.stop("StartScene");
            this.scene.start('GameScene');
          });     
    }

}

const startScene = new StartScene();