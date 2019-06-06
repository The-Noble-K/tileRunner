import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {

    this.load.tilemapTiledJSON('tilemap', 'assets/tilemap.json');
    this.load.image('tileset', 'assets/tileset.png');
    this.load.image('bg', 'assets/background.png');
    this.load.image('fg', 'assets/foreground.png');

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
    //var player = this.add.sprite(16, 576, 'player');

  }

  update() {

    //Scroll Background
    this.background.tilePositionX += 2;
    this.foreground.tilePositionX += 4;
  }
};
