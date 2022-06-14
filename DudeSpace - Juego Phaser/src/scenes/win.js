import Button from "../js/button.js";

export class Win extends Phaser.Scene {
    constructor() {
      super("Win");
    }

    create() {
        this.add
          .image(this.cameras.main.centerX, this.cameras.main.centerY, "Fondo_Win")
          .setScale(1.1);
    
        this.add.image(
          this.cameras.main.centerX,
          this.cameras.main.centerY / 1.5,
          "Win_logo"
        )
        .setScale(1.1);

        const boton = new Button(
            this.cameras.main.centerX,
            this.cameras.main.centerY + this.cameras.main.centerY / 3,
            "Reintentar",
            this,
            () => {
              this.scene.start("MainMenu");
            });    
    }
}