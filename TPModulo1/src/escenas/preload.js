export class Preload extends Pasher.Scene {
    constructor(){
        super("Preload");
    }  



  preload() {
    this.load.image("sad_cow", "public/assets/sad_cow.png");
    this.load.image("phaser_logo", "public/assets/phaser_logo.png");
    this.load.image("mainmenu_bg", "public/assets/main_menu_background.png");
    this.load.image("sky", "public/assets/sky.png");
    this.load.image("ground", "public/assets/platform.png");
    this.load.image("star", "public/assets/star.png");
    this.load.image("bomb", "public/assets/bomb.png");
    this.load.image("star2", "public/assets/star2.png");
    this.load.spritesheet("dude", "public/assets/dude.png", { 
      frameWidth: 32, 
      frameHeight: 48
    });  
  }



  create() {
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.start("MainMenu");
  }
}
