import angular from 'angular';
import game from './gameCtrl';
import swipe from './swipeCtrl';
import message from './messageCtrl';

const module = angular.module('controllers', []);

module.controller('game', game);
module.controller('swipe', swipe);
module.controller('message', message);

export default module.name;
