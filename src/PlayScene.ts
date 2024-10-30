import * as Phaser from "phaser";
import TextureGenerator from "./TextureGenerator";
import MapGenerator from "./MapGenerator";

class PlayScene extends Phaser.Scene {
  private mapGenerator: MapGenerator;

  constructor() {
    super({ key: 'PlayScene' });
  }

  preload() {
    TextureGenerator.generateSolidTexture(this, 'redTexture', 100, 100, 0xff0000);
  }

  create() {
    this.mapGenerator = new MapGenerator(this, 32, 25, 19, 0.5);
    this.mapGenerator.generateMap();
  }

  update() {
    this.mapGenerator.updateMap();
  }
}

export default PlayScene;
