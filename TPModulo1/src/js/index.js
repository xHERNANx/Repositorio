import {Preload} from '../escenas/preload.js'
import {Play} from '../escenas/play.js'
import {Retry} from '../escenas/retry.js'
import {MainMenu} from '../escenas/mainmenu.js'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale:{
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      min: {
        width: 800,
        height: 600,
      },
      max: {
        width: 1600,
        height: 1200,
      },
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 },
        debug: false,
      },
    },
    scene: [Preload, MainMenu, Play, Retry],
  };
  var game = new Phaser.Game(config);