import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1200,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: {y: 500},
        debug: true
    }
  }
};
