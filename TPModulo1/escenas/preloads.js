export class Preloads extends Pasher.Scene {
    constructor(){
        super("Preloads")
    }  



preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('star2', 'assets/star2.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('sad_cow', 'assets/sad_cow.png');
    this.load.image('phaser_logo', 'assets/phaser_logo.png');
    this.load.image('mainmenu_bg', 'assets/main_menu_background.png');
}

create ()
{
    this.scene.start('MainMenu')
}

}
