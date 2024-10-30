import * as Phaser from "phaser";

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
	// Load assets here
}

function create() {
	// Create game objects here
}

function update() {
	// Update game objects here
}
