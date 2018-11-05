import angular from 'angular';
import game from './gameCtrl';
import score from './scoreCtrl';

const module = angular.module('controllers', []);

module.controller('game', game);
module.controller('score', score);

export default module.name;
