import Phaser from 'phaser';
import WebFontFile from './support_script/webfontloader';
import 'regenerator-runtime/runtime';

const gameState = {
  sceneWidth: 0,
  sceneHeight: 0,
  score: 0,
  music: true,
  sound: true,
};

const playStopAudio = (status, audio) => {
  if (status) {
    if (!audio.isPlaying) {
      audio.play();
    }
  } else {
    audio.stop();
  }
};

class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    this.load.addFile(new WebFontFile(this.load, 'Akaya Telivigala'));
  }

  create() {
    gameState.sceneWidth = this.scale.width;
    gameState.sceneHeight = this.scale.height;
    gameState.playerName = '';

    this.scene.stop();
    this.scene.start('Preload');
  }
}

export { Boot, gameState, playStopAudio };