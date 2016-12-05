import angular from 'angular';
import game from './gameCtrl';

const module = angular.module('controllers', []);

module.controller('game', game);

export default module.name;
