import * as Phaser from "phaser";
import TextureGenerator from "./TextureGenerator";
import PlayScene from "./PlayScene";

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'app',
	scene: PlayScene,
};

const game = new Phaser.Game(config);
