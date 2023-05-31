

window.onload = function(){
const config = {
    type: Phaser.AUTO,
    width: 620,
    height: 680,

    physics: 
    {
        default: 'arcade',
        arcade: 
        {
            //set the gravity of the game( speed at which an object fall)
            gravity: { y: 10 },
            debug: false,
            enableBody: true
        }
    },
    scene: [StartScene, GameScene, EndScene],
    audio: {
        disableWebAudio: true
    }
  };
  
 const game = new Phaser.Game(config);
}
