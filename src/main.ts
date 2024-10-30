import * as Phaser from "phaser";
import TextureGenerator from "./TextureGenerator";

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'app',
	scene: {
		preload: preload,
		create: create,
		update: update,
	},
};

const game = new Phaser.Game(config);

function preload() {
	TextureGenerator.generateSolidTexture(this, 'redTexture', 100, 100, 0xff0000);
}

function create() {
	this.add.image(400, 300, 'redTexture');
}

function update() {
	// Update game objects here
}
