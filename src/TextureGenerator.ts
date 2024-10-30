import * as Phaser from "phaser";

class TextureGenerator {
  static generateSolidTexture(scene: Phaser.Scene, textureName: string, width: number, height: number, color: number) {
    const graphics = scene.add.graphics();
    graphics.fillStyle(color, 1);
    graphics.fillRect(0, 0, width, height);
    graphics.generateTexture(textureName, width, height);
    graphics.destroy();
  }
}

export default TextureGenerator;
