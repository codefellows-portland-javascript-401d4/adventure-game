import angular from 'angular';
import game from './gameCtrl';
import swipe from './swipeCtrl';

const module = angular.module('controllers', []);

module.controller('game', game);
module.controller('swipe', swipe);

export default module.name;
