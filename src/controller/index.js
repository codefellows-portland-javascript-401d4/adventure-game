import angular from 'angular';
import game from './gameCtrl';
import swipe from './swipeCtrl';
import message from './messageCtrl';
// import date from './dateCtrl';

const module = angular.module('controllers', []);

module.controller('game', game);
module.controller('swipe', swipe);
module.controller('message', message);
// module.controller('date', date);

export default module.name;
