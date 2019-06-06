import 'phaser';
import Player from '../classes/Entities.js'

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {

    this.load.tilemapTiledJSON('tilemap', 'assets/tilemap.json');
    this.load.image('tileset', 'assets/tileset.png');

    this.load.image('bg', 'assets/background.png');
    this.load.image('fg', 'assets/foreground.png');

    this.load.spritesheet('playerIdle', 'assets/Spritesheets/idle-Sheet.png', {frameWidth: 32, frameHeight: 26, startFrame: 1, endFrame: 4});
    this.load.spritesheet('playerRun', 'assets/Spritesheets/run-Sheet.png', {frameWidth: 36, frameHeight: 26, startFrame: 1, endFrame: 3});
    this.load.spritesheet('playerSlash', 'assets/Spritesheets/slash-Sheet.png', {frameWidth: 42, frameHeight: 26, startFrame: 1, endFrame: 4});
    this.load.spritesheet('playerThrow', 'assets/Spritesheets/throw-Sheet.png', {frameWidth: 40, frameHeight: 28, startFrame: 1, endFrame: 5});
    this.load.spritesheet('playerDeath', 'assets/Spritesheets/death-Sheet.png', {frameWidth: 35, frameHeight: 26, startFrame: 1, endFrame: 4});
    this.load.spritesheet('playerHurt', 'assets/Spritesheets/hurt-Sheet.png', {frameWidth: 32, frameHeight: 26, startFrame: 1, endFrame: 5});
    this.load.spritesheet('playerSneak', 'assets/Spritesheets/sneak-Sheet.png', {frameWidth: 32, frameHeight: 26, startFrame: 1, endFrame: 6});
    this.load.spritesheet('playerQuickJump', 'assets/Spritesheets/quick-jump-Sheet.png', {frameWidth: 32, frameHeight: 26, startFrame: 1, endFrame: 4});
    this.load.spritesheet('playerLongJump', 'assets/Spritesheets/long-jump-Sheet.png', {frameWidth: 34, frameHeight: 30, startFrame: 1, endFrame: 8});

  }

  create () {

    //Create Background
    this.background = this.add.tileSprite(this.game.config.width/2, this.game.config.height/2, 1200, 640, 'bg');
    this.foreground = this.add.tileSprite(this.game.config.width/2, this.game.config.height/2, 1200, 640, 'fg');
    
    //Create Map & Layer
    var map = this.make.tilemap({key: 'tilemap'});
    var tileset = map.addTilesetImage('tileset');
    var layer = map.createStaticLayer(0, tileset, 0, 0)
    layer.setCollisionByExclusion([-1]);

    //Set Boundaries
    this.physics.world.bounds.width = layer.width;
    this.physics.world.bounds.height = layer.height;

    //Instantiate Player
    var player = this.add.sprite(16, 576, 'playerIdle');

    //Player Animations
    

  }

  update() {

    //Scroll Background
    this.background.tilePositionX += 2;
    this.foreground.tilePositionX += 4;
  }
};
