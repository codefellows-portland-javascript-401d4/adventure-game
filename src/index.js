import angular from 'angular';
import globalController from './controllers/globalController';
import gameController from './controllers/gameController';
import GameSpace from './models/game-space';
import Player from './models/player';
import './main.css';

angular.module('orcSlayer', [])
  .controller('gameController', gameController)
  .controller('globalController', globalController)
  .service('GameSpace', GameSpace)
  .service('Player', Player);