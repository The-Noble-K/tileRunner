import 'phaser';
import {Player} from '../classes/Entities.js'

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {

    this.load.tilemapTiledJSON('tilemap', 'assets/tilemap.json');
    this.load.image('tileset', 'assets/tileset.png');
    this.load.image('bg', 'assets/background.png');
    this.load.image('fg', 'assets/foreground.png');
    this.load.atlas('ninja', 'assets/Atlas/ninjaAtlas.png', 'assets/Atlas/ninjaAtlas.json');

    this.anims.create({
      key: 'idle',
      frameRate: 4,
      repeat: -1,
      frames: this.anims.generateFrameNames('idle', {
          prefix: 'ninjaatlas_',
          suffix: '.png',
          start: 40,
          end: 43
      })
    });
    this.anims.create({
      key: 'run',
      frameRate: 3,
      repeat: -1,
      frames: this.anims.generateFrameNames('run', {
        prefix: 'ninjaatlas_',
        suffix: '.png',
        start: 01,
        end: 03
      })
    });
    this.anims.create({
      key: 'sneak',
      frameRate: 6,
      repeat: -1,
      frames: this.anims.generateFrameNames('sneak', {
        prefix: 'ninjaatlas_',
        suffix: '.png',
        start: 29,
        end: 34
      })
    });
    this.anims.create({
      key: 'death',
      frameRate: 4,
      repeat: -1,
      frames: this.anims.generateFrameNames('death', {
        prefix: 'ninjaatlas_',
        suffix: '.png',
        start: 04,
        end: 07
      })
    });

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
    var player = new Player(16, 576, 'ninja', 'ninjaatlas_40.png');
    console.log(player);
    player.play('idle');

    //Add Key Detection
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    
  }

  update() {

    //Scroll Background
    this.background.tilePositionX += 2;
    this.foreground.tilePositionX += 4;

  }
};
