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
    this.load.atlas('masterNinja', 'assets/Atlas/masterNinja.png', 'assets/Atlas/masterNinja.json');

    /*
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
    this.anims.create({
      key: 'hurt',
      frameRate: 5,
      repeat: -1,
      frames: this.anims.generateFrameNames('hurt', {
        prefix: 'ninjaatlas_',
        suffix: '.png',
        start: 24,
        end: 28
      })
    });
    this.anims.create({
      key: 'throw',
      frameRate: 5,
      repeat: -1,
      frames: this.anims.generateFrameNames('throw', {
        prefix: 'ninjaatlas_',
        suffix: '.png',
        start: 35,
        end: 39
      })
    });
    this.anims.create({
      key: 'slash',
      frameRate: 5,
      repeat: -1,
      frames: this.anims.generateFrameNames('slash', {
        prefix: 'ninjaatlas_',
        suffix: '.png',
        start: 15,
        end: 19
      })
    });
    this.anims.create({
      key: 'bounce',
      frameRate: 4,
      repeat: -1,
      frames: this.anims.generateFrameNames('bounce', {
        prefix: 'ninjaatlas_',
        suffix: '.png',
        start: 21,
        end: 24
      })
    });
    */
    
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
    var player = this.add.sprite(16, 576, 'masterNinja', 'assets/Atlas/images/ninja40.png');
    console.log(player);
     //Add Player Animations
    var idleFrames = this.anims.generateFrameNames('masterNinja', {
                          start: 40, end: 43, zeroPad: 2,
                          prefix: 'images/ninja', suffix: '.png'
    });
    this.anims.create({ key: 'idle', frames: idleFrames, frameRate: 10, repeat: -1 });
    player.anims.play('idle');
   
    /*
    this.anims.create({
      key: 'run',
      frameRate: 3,
      repeat: -1,
      frames: this.anims.generateFrameNames('run', {
        prefix: 'ninja',
        suffix: '.png',
        start: 1,
        end: 3
      })
    });
    this.textures.addSpriteSheetFromAtlas('ninja', { frameWidth: 24, frameHeight: 21, atlas: 'ninja', frame: 'ninjatlas'})
    this.anims.create({
      key: 'jump',
      frameRate: 8,
      repeat: -1,
      frames: this.anims.generateFrameNames('jump', {
        prefix: 'ninja',
        suffix: '.png',
        start: 8,
        end: 15
      })
    });
    */

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
