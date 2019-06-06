import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {

    this.load.tilemapTiledJSON('tilemap', 'assets/tilemap.json');
    this.load.image('tileset', 'assets/tileset.png');
    this.load.spritesheet('player', 'assets/Spritesheets/idle-sheet.png', { frameWidth: 32, frameHeight: 26});
    this.load.image('bg', 'assets/Landscape.gif');

  }

  create () {
    
    //Create Map & Layer
    var map = this.make.tilemap({key: 'tilemap'});
    var tileset = map.addTilesetImage('tileset');
    var layer = map.createStaticLayer(0, tileset, 0, 0)
    layer.setCollisionByExclusion([-1]);

    //Set Boundaries
    this.physics.world.bounds.width = layer.width;
    this.physics.world.bounds.height = layer.height;

    //Instantiate Player
    var player = this.add.sprite(16, 576, 'player');

  }
};
