import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1200,
  height: 640,
  autoCenter: 1,
  backgroundColor: 'black',
  pixelArt: true,
  roundPixels: true,
  audio: {
    disableWebAudio: true,
    noAudio: false
  },
  fps: {
    target: 2,
    min: 2,
    forceSetTimeOut: true
  },
  physics: {
    default: 'arcade',
    arcade: {
        gravity: {y: 500},
        debug: true
    }
  }
};
