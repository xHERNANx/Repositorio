import Button from "../js/button.js";




export class Opciones extends Phaser.Scene {
  constructor() {
    super("Opciones");
  }

  create() {

    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "opciones"
      )
   

      this.add.image(this.cameras.main.centerX/3.50, this.cameras.main.centerY + this.cameras.main.centerY/1.12, 'volver').setInteractive().on("pointerdown",
      ()=>this.scene.start("MainMenu", 
      
      ));




  }


}

