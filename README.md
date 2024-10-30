# nl6

## Development Environment Setup

To set up the development environment using Yarn and Vite, follow these steps:

1. Install Yarn if you haven't already:
   ```sh
   npm install -g yarn
   ```

2. Install the project dependencies:
   ```sh
   yarn install
   ```

3. Start the development server:
   ```sh
   yarn dev
   ```

## Running the Development Server

To run the development server, use the following command:
```sh
yarn dev
```

## Installing Phaser

To install Phaser, use the following command:
```sh
yarn add phaser
```

## Using Phaser in the Development Setup

To use Phaser in the development setup, follow these steps:

1. Import the `PlayScene` class in your `src/main.ts` file:
   ```typescript
   import PlayScene from './PlayScene';
   ```

2. Initialize a Phaser game in your `src/main.ts` file:
   ```typescript
   const config = {
     type: Phaser.AUTO,
     width: 800,
     height: 600,
     scene: PlayScene
   };

   const game = new Phaser.Game(config);
   ```
