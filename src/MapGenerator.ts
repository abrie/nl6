import * as Phaser from "phaser";
import TextureGenerator from "./TextureGenerator";
import * as Perlin from "perlin-noise";

class MapGenerator {
  private scene: Phaser.Scene;
  private tileSize: number;
  private mapWidth: number;
  private mapHeight: number;
  private noiseThreshold: number;
  private tilemap: Phaser.Tilemaps.Tilemap;
  private tileset: Phaser.Tilemaps.Tileset;
  private layer: Phaser.Tilemaps.DynamicTilemapLayer;

  constructor(scene: Phaser.Scene, tileSize: number, mapWidth: number, mapHeight: number, noiseThreshold: number) {
    this.scene = scene;
    this.tileSize = tileSize;
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.noiseThreshold = noiseThreshold;

    this.tilemap = this.scene.make.tilemap({ width: this.mapWidth, height: this.mapHeight, tileWidth: this.tileSize, tileHeight: this.tileSize });
    this.tileset = this.tilemap.addTilesetImage('tiles');
    this.layer = this.tilemap.createDynamicLayer('layer', this.tileset);
  }

  generateMap() {
    const noise = Perlin.generatePerlinNoise(this.mapWidth, this.mapHeight);
    for (let y = 0; y < this.mapHeight; y++) {
      for (let x = 0; x < this.mapWidth; x++) {
        const value = noise[y * this.mapWidth + x];
        const tileIndex = value > this.noiseThreshold ? 1 : 0;
        this.layer.putTileAt(tileIndex, x, y);
      }
    }
  }

  updateMap() {
    this.layer.forEachTile((tile) => {
      const value = Math.random();
      const tileIndex = value > this.noiseThreshold ? 1 : 0;
      tile.index = tileIndex;
    });
  }
}

export default MapGenerator;
