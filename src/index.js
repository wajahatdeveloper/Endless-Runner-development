import '../stylesheets/styler.css';
import Phaser from 'phaser';
import Preload from './preload';
import { Boot } from './boot';
import Game from './game';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 960,
  height: 520,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  dom: {
    createContainer: true,
  },
  scene: [Boot, Preload, Game],
};

Object.create(new Phaser.Game(config));
