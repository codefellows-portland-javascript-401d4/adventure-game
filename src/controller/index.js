import angular from 'angular';
import game from './gameCtrl';
import message from './messageCtrl';

const module = angular.module('controllers', []);

module.controller('game', game);
module.controller('message', message);

export default module.name;
