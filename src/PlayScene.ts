import * as Phaser from "phaser";
import TextureGenerator from "./TextureGenerator";

class PlayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PlayScene' });
  }

  preload() {
    TextureGenerator.generateSolidTexture(this, 'redTexture', 100, 100, 0xff0000);
  }

  create() {
    this.add.image(400, 300, 'redTexture');
  }

  update() {
    // Update game objects here
  }
}

export default PlayScene;
